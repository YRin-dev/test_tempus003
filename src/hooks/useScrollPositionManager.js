import { useEffect, useCallback, useRef } from 'react';


/**
 * 통합 스크롤 위치 관리 훅
 * SharedObjectTransition과 일반 페이지 네비게이션의 스크롤을 통합 관리
 * 
 * @param {boolean} shouldManageScroll - 스크롤 관리 활성화 여부
 * @returns {object} 스크롤 관리 함수들
 */
export const useScrollPositionManager = (shouldManageScroll = true) => {
  const location = useLocation();
  const lastLocationRef = useRef(location.pathname);
  const scrollRestorationTimeoutRef = useRef(null);

  /**
   * 현재 스크롤 위치를 정밀하게 저장 - ProjectsSection 기준 개선
   * Lenis와 네이티브 스크롤 모두 고려하며, ProjectsSection 상대 위치도 저장
   */
  const saveCurrentScrollPosition = useCallback((reason = 'navigation') => {
    if (!shouldManageScroll) return;

    // ProjectsSection의 위치 찾기
    const projectsSection = document.querySelector('[data-testid="projects-section"]') || 
                           document.querySelector('#projects-section') ||
                           document.querySelector('[data-projects-title="true"]')?.closest('div');

    let projectsSectionInfo = { found: false };

    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      const absoluteTop = rect.top + (window.pageYOffset || document.documentElement.scrollTop);
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      projectsSectionInfo = {
        found: true,
        absoluteTop,
        relativeOffset: currentScrollY - absoluteTop,
        className: projectsSection.className || '',
        id: projectsSection.id || ''
      };
      
      console.log('📍 [저장] ProjectsSection 위치 정보:', {
        elementTop: absoluteTop,
        currentScroll: currentScrollY,
        relativeOffset: projectsSectionInfo.relativeOffset
      });
    } else {
      console.warn('⚠️ [저장] ProjectsSection을 찾을 수 없음');
    }

    const scrollData = {
      // 기존 스크롤 위치
      lenisY: window.lenis?.scroll || 0,
      nativeY: window.pageYOffset || document.documentElement.scrollTop || 0,
      nativeX: window.pageXOffset || document.documentElement.scrollLeft || 0,
      
      // 🔥 ProjectsSection 기준 정보 추가
      projectsSection: projectsSectionInfo,
      
      // 뷰포트 정보
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      // 문서 크기
      document: {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      },
      // 메타 정보
      timestamp: Date.now(),
      pathname: location.pathname,
      reason,
      source: window.lenis ? 'lenis' : 'native'
    };

    console.log(`📍 [저장] 스크롤 위치 저장 (${reason}):`, scrollData);

    // 여러 저장소에 백업
    sessionStorage.setItem('lastScrollPosition', JSON.stringify(scrollData));
    localStorage.setItem('lastScrollPosition', JSON.stringify(scrollData));

    return scrollData;
  }, [location.pathname, shouldManageScroll]);

  /**
   * 저장된 스크롤 위치를 복원
   * 다양한 저장소에서 우선순위별로 복원 시도
   */
  const restoreScrollPosition = useCallback((forceRestore = false) => {
    if (!shouldManageScroll && !forceRestore) return;

    // 이미 복원 중인 경우 방지
    if (scrollRestorationTimeoutRef.current) {
      clearTimeout(scrollRestorationTimeoutRef.current);
    }

    const attemptRestore = () => {
      let scrollData = null;
      let dataSource = '';

      // 1순위: SharedObject 트랜지션 상태
      if (window.__THUMBNAIL_TRANSITION_STATE__?.scrollPosition) {
        scrollData = window.__THUMBNAIL_TRANSITION_STATE__.scrollPosition;
        dataSource = 'SharedObject 글로벌 상태';
      }
      // 2순위: 세션 스토리지의 썸네일 상태
      else {
        const thumbnailState = sessionStorage.getItem('thumbnailState');
        if (thumbnailState) {
          try {
            const parsed = JSON.parse(thumbnailState);
            scrollData = parsed.scrollPosition;
            dataSource = '썸네일 세션 상태';
          } catch (e) {
            console.error('썸네일 상태 파싱 에러:', e);
          }
        }
      }
      // 3순위: 일반 스크롤 위치 (세션)
      if (!scrollData) {
        const sessionData = sessionStorage.getItem('lastScrollPosition');
        if (sessionData) {
          try {
            scrollData = JSON.parse(sessionData);
            dataSource = '세션 스토리지';
          } catch (e) {
            console.error('세션 스크롤 데이터 파싱 에러:', e);
          }
        }
      }
      // 4순위: 일반 스크롤 위치 (로컬)
      if (!scrollData) {
        const localData = localStorage.getItem('lastScrollPosition');
        if (localData) {
          try {
            scrollData = JSON.parse(localData);
            dataSource = '로컬 스토리지';
          } catch (e) {
            console.error('로컬 스크롤 데이터 파싱 에러:', e);
          }
        }
      }

      if (scrollData && scrollData.lenisY !== undefined) {
        console.log(`🎯 [복원] 2단계 스크롤 복원 시작 (${dataSource}):`, scrollData);

        // 🔍 ProjectsSection 찾기
        const projectsSection = document.querySelector('[data-testid="projects-section"]') || 
                               document.querySelector('#projects-section') ||
                               document.querySelector('[data-projects-title="true"]')?.closest('div');

        if (!projectsSection) {
          console.warn('⚠️ [복원] ProjectsSection을 찾을 수 없어 일반 복원 시도');
          // ProjectsSection을 찾을 수 없으면 기존 방식으로 복원
          const targetY = scrollData.lenisY || scrollData.nativeY || 0;
          if (window.lenis) {
            window.lenis.scrollTo(targetY, { immediate: true, force: true });
          }
          window.scrollTo({ top: targetY, behavior: 'auto' });
          return true;
        }

        // 📐 ProjectsSection의 현재 위치 계산
        const projectsRect = projectsSection.getBoundingClientRect();
        const projectsAbsoluteTop = projectsRect.top + (window.pageYOffset || document.documentElement.scrollTop);
        
        // 🔢 저장된 스크롤 위치에서 ProjectsSection 기준 상대 위치 계산
        const savedScrollY = scrollData.lenisY || scrollData.nativeY || 0;
        const savedProjectsTop = scrollData.projectsSection?.absoluteTop || projectsAbsoluteTop;
        const relativeOffset = scrollData.projectsSection?.relativeOffset || (savedScrollY - savedProjectsTop);

        console.log('📊 [복원] 2단계 복원 계산:', {
          저장된스크롤위치: savedScrollY,
          현재ProjectsSection위치: projectsAbsoluteTop,
          저장된ProjectsSection위치: savedProjectsTop,
          상대오프셋: relativeOffset,
          최종목표위치: projectsAbsoluteTop + relativeOffset
        });

        // 🚀 1단계: ProjectsSection으로 이동
        const step1Target = projectsAbsoluteTop;
        
        if (window.lenis) {
          console.log('🎯 [복원] 1단계: ProjectsSection으로 이동 (Lenis):', step1Target);
          window.lenis.scrollTo(step1Target, { immediate: true, force: true });
        } else {
          console.log('🎯 [복원] 1단계: ProjectsSection으로 이동 (Native):', step1Target);
          window.scrollTo({ top: step1Target, behavior: 'auto' });
        }

        // 🎯 2단계: 상대적 위치 조정 (약간의 지연 후)
        setTimeout(() => {
          const step2Target = projectsAbsoluteTop + relativeOffset;
          
          // 음수나 과도한 스크롤 방지
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const finalTarget = Math.max(0, Math.min(step2Target, maxScroll));
          
          console.log('🎯 [복원] 2단계: 상대 위치 조정:', {
            목표위치: step2Target,
            최종위치: finalTarget,
            최대스크롤: maxScroll
          });

          if (window.lenis) {
            window.lenis.scrollTo(finalTarget, { immediate: true, force: true });
          } else {
            window.scrollTo({ top: finalTarget, behavior: 'auto' });
          }

          // 🔍 3단계: 복원 검증 및 추가 조정 (추가 지연 후)
          setTimeout(() => {
            const currentScroll = window.lenis?.scroll || window.pageYOffset || document.documentElement.scrollTop;
            const difference = Math.abs(currentScroll - finalTarget);
            
            if (difference > 50) {
              console.log('🔄 [복원] 3단계: 추가 조정 필요:', {
                현재위치: currentScroll,
                목표위치: finalTarget,
                차이: difference
              });
              
              if (window.lenis) {
                window.lenis.scrollTo(finalTarget, { immediate: true });
              } else {
                window.scrollTo({ top: finalTarget, behavior: 'auto' });
              }
            } else {
              console.log('✅ [복원] 2단계 복원 완료!');
            }
          }, 100);
        }, 100);

        // 복원 완료 후 데이터 정리
        if (dataSource.includes('썸네일') || dataSource.includes('SharedObject')) {
          setTimeout(() => {
            sessionStorage.removeItem('thumbnailState');
            if (window.__THUMBNAIL_TRANSITION_STATE__) {
              window.__THUMBNAIL_TRANSITION_STATE__ = null;
            }
            console.log('🧹 [복원] 임시 데이터 정리 완료');
          }, 500);
        }

        return true;
      }

      console.log('📍 [복원] 복원할 스크롤 위치가 없습니다.');
      return false;
    };

    // 즉시 복원 시도 (forceRestore일 때)
    if (forceRestore) {
      return attemptRestore();
    }

    // 일반적인 경우 짧은 지연 후 복원
    scrollRestorationTimeoutRef.current = setTimeout(() => {
      attemptRestore();
    }, 16); // requestAnimationFrame과 비슷한 타이밍

  }, [shouldManageScroll]);

  /**
   * SharedObject 트랜지션용 스크롤 위치 저장
   */
  const saveScrollForTransition = useCallback((_additionalData = {}) => { // eslint-disable-line no-unused-vars
    const scrollData = saveCurrentScrollPosition('shared-object-transition');
    
    // SharedObject 상태에 스크롤 정보 추가
    if (window.__THUMBNAIL_TRANSITION_STATE__) {
      window.__THUMBNAIL_TRANSITION_STATE__.scrollPosition = scrollData;
    }

    // 세션 스토리지의 썸네일 상태에도 추가
    const existingThumbnailState = sessionStorage.getItem('thumbnailState');
    if (existingThumbnailState) {
      try {
        const parsed = JSON.parse(existingThumbnailState);
        parsed.scrollPosition = scrollData;
        sessionStorage.setItem('thumbnailState', JSON.stringify(parsed));
      } catch (e) {
        console.error('썸네일 상태 업데이트 에러:', e);
      }
    }

    // 라우터 스크롤 복원 방지 플래그 설정
    sessionStorage.setItem('preventScrollRestoration', 'true');

    return scrollData;
  }, [saveCurrentScrollPosition]);

  /**
   * 스크롤 복원 방지 플래그 해제
   */
  const clearScrollPreventionFlag = useCallback(() => {
    sessionStorage.removeItem('preventScrollRestoration');
  }, []);

  // 위치 변경 감지 및 자동 관리
  useEffect(() => {
    if (lastLocationRef.current !== location.pathname) {
      // 경로가 변경된 경우에만 복원 시도
      restoreScrollPosition();
      lastLocationRef.current = location.pathname;
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (scrollRestorationTimeoutRef.current) {
        clearTimeout(scrollRestorationTimeoutRef.current);
      }
    };
  }, [location.pathname, restoreScrollPosition]);

  return {
    saveCurrentScrollPosition,
    restoreScrollPosition,
    saveScrollForTransition,
    clearScrollPreventionFlag,
  };
};

export default useScrollPositionManager; 