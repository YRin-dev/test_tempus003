import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getNavigationType } from '../../utils/navigationDetector';

/**
 * Lenis와 호환되는 스크롤 복원 컴포넌트
 * 브라우저 기본 스크롤 복원과 Lenis를 연동
 *
 * 동작 원리:
 * 1. 브라우저 기본 스크롤 복원을 manual로 설정
 * 2. 뒤로가기/앞으로가기 시 Lenis로 스크롤 위치 복원
 * 3. 페이지 이동 시 스크롤 위치를 세션 스토리지에 저장
 */
const LenisScrollRestoration = () => {
  const location = useLocation();

  // 🔥 브라우저 기본 스크롤 복원 비활성화 및 Lenis 연동
  useEffect(() => {
    // 브라우저 기본 스크롤 복원 비활성화 (Lenis가 대신 처리)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      console.log(
        '🚫 [LenisScrollRestoration] 브라우저 기본 스크롤 복원 비활성화 - Lenis가 처리'
      );
    }

    return () => {
      // 컴포넌트 언마운트 시 브라우저 기본 복원 재활성화
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
        console.log(
          '✅ [LenisScrollRestoration] 브라우저 기본 스크롤 복원 재활성화'
        );
      }
    };
  }, []);

  // 🔄 뒤로가기/앞으로가기 시 스크롤 복원
  useEffect(() => {
    const navigationType = getNavigationType();

    // 뒤로가기/앞으로가기에서만 스크롤 복원 실행
    if (navigationType === 'normal') {
      console.log(
        '🔄 [LenisScrollRestoration] 브라우저 뒤로가기 감지 - Lenis 스크롤 복원'
      );

      // 페이지 로딩 완료 후 스크롤 복원
      const timer = setTimeout(() => {
        // 여러 저장소에서 스크롤 위치 찾기 (우선순위별)
        let scrollPosition = null;

        // 1순위: React Router state
        if (window.history.state?.scroll !== undefined) {
          scrollPosition = window.history.state.scroll;
          console.log(
            '📍 [LenisScrollRestoration] React Router state에서 스크롤 위치 발견:',
            scrollPosition
          );
        }
        // 2순위: 세션 스토리지 (location key 기반)
        else if (location.key) {
          const stored = sessionStorage.getItem(`scroll-${location.key}`);
          if (stored) {
            scrollPosition = parseFloat(stored);
            console.log(
              '📍 [LenisScrollRestoration] 세션 스토리지에서 스크롤 위치 발견:',
              scrollPosition
            );
          }
        }
        // 3순위: 세션 스토리지 (pathname 기반)
        else {
          const stored = sessionStorage.getItem(`scroll-${location.pathname}`);
          if (stored) {
            scrollPosition = parseFloat(stored);
            console.log(
              '📍 [LenisScrollRestoration] pathname 기반 스크롤 위치 발견:',
              scrollPosition
            );
          }
        }

        if (
          scrollPosition &&
          typeof scrollPosition === 'number' &&
          scrollPosition > 0
        ) {
          console.log(
            '🎯 [LenisScrollRestoration] 스크롤 위치 복원 시작:',
            scrollPosition
          );

          // 깜빡임 방지 클래스 제거 (있다면)
          document.body.classList.remove('scroll-restoring');

          // Lenis로 스크롤 복원
          if (window.lenis) {
            try {
              window.lenis.scrollTo(scrollPosition, {
                immediate: true,
                force: true,
                lock: false,
              });

              // 복원 검증 (100ms 후)
              setTimeout(() => {
                const currentScroll = window.lenis.scroll;
                const difference = Math.abs(currentScroll - scrollPosition);

                if (difference > 50) {
                  console.log('🔄 [LenisScrollRestoration] 재시도 필요:', {
                    목표: scrollPosition,
                    현재: currentScroll,
                    차이: difference,
                  });
                  window.lenis.scrollTo(scrollPosition, { immediate: true });
                } else {
                  console.log(
                    '✅ [LenisScrollRestoration] Lenis 스크롤 복원 완료'
                  );
                }
              }, 100);
            } catch (error) {
              console.error(
                '❌ [LenisScrollRestoration] Lenis 복원 실패:',
                error
              );
              // Lenis 실패 시 네이티브 스크롤로 폴백
              window.scrollTo({ top: scrollPosition, behavior: 'auto' });
            }
          } else {
            // Lenis가 없으면 네이티브 스크롤
            console.log(
              '🔄 [LenisScrollRestoration] Lenis 없음 - 네이티브 스크롤 사용'
            );
            window.scrollTo({ top: scrollPosition, behavior: 'auto' });
          }
        } else {
          console.log(
            '📍 [LenisScrollRestoration] 복원할 스크롤 위치가 없습니다'
          );
        }
      }, 150); // DOM 렌더링 완료 대기 (Lenis 초기화 시간 고려)

      return () => clearTimeout(timer);
    } else if (navigationType === 'direct') {
      // URL 직접 입력 시 맨 위로
      console.log('⬆️ [LenisScrollRestoration] 직접 입력 - 맨 위로 이동');
      setTimeout(() => {
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    }
  }, [location]);

  // 💾 스크롤 위치 저장 (페이지 이동 시)
  useEffect(() => {
    const saveScrollPosition = () => {
      const scrollY =
        window.lenis?.scroll ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

      if (scrollY > 0) {
        // 다중 저장소에 저장 (안정성 확보)
        if (location.key) {
          sessionStorage.setItem(`scroll-${location.key}`, scrollY.toString());
        }
        sessionStorage.setItem(
          `scroll-${location.pathname}`,
          scrollY.toString()
        );

        console.log('💾 [LenisScrollRestoration] 스크롤 위치 저장:', {
          스크롤위치: scrollY,
          경로: location.pathname,
          키: location.key,
        });
      }
    };

    // 페이지 언마운트 전에 스크롤 위치 저장
    const handleBeforeUnload = () => {
      saveScrollPosition();
    };

    // popstate 이벤트에서도 저장 (뒤로가기 직전)
    const handlePopState = () => {
      saveScrollPosition();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      saveScrollPosition(); // 컴포넌트 언마운트 시에도 저장
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.key, location.pathname]);

  return null; // 렌더링하지 않는 컴포넌트
};

export default LenisScrollRestoration;
