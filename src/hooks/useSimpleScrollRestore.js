import { useEffect } from 'react';


/**
 * 정확한 스크롤 위치 복원 훅
 * 뒤로가기를 정확히 감지하고 홈페이지에서만 스크롤 복원
 */
export const useSimpleScrollRestore = () => {
  const location = useLocation();

  // 홈페이지에서만 스크롤 복원 실행
  useEffect(() => {
    // 홈페이지가 아니면 실행하지 않음
    if (location.pathname !== '/') {
      console.log('🚫 [ScrollRestore] 홈페이지가 아니므로 스크롤 복원 생략:', location.pathname);
      return;
    }

    // StickySection 감지 (DOM 로드 후 체크)
    const checkTimer = setTimeout(() => {
      const hasStickySection = 
        // StickySection의 특징적인 구조 감지
        document.querySelector('[style*="position: sticky"]') ||
        document.querySelector('[style*="position:sticky"]') ||
        // 최소 높이가 200vh인 요소 (StickySection의 특징)
        document.querySelector('[style*="200vh"]') ||
        // StorySection 클래스나 특정 패턴
        document.querySelector('.story-section') ||
        document.querySelector('[data-story-section]') ||
        document.querySelector('[data-sticky-section]');

      if (hasStickySection) {
        console.log('🚫 [ScrollRestore] StickySection 감지 - 스크롤 복원 비활성화');
        
        // 브라우저 기본 스크롤 복원을 다시 활성화
        if (window.history.scrollRestoration) {
          window.history.scrollRestoration = 'auto';
        }
        
        // 충돌 방지를 위해 세션 데이터 정리
        sessionStorage.removeItem('scroll-/');
        sessionStorage.removeItem('hasScrollPosition');
        
        return;
      }

      console.log('🏠 [ScrollRestore] 홈페이지 로드 - 스크롤 복원 확인 (StickySection 없음)');
      
      // 브라우저 기본 스크롤 복원 비활성화
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }

      // 새로고침 감지 및 세션 리셋
      const isRefresh = () => {
        // 방법 1: beforeunload에서 설정한 플래그 확인 (가장 정확)
        if (sessionStorage.getItem('isRefreshing') === 'true') {
          return true;
        }
        
        // 방법 2: Navigation API - TYPE_RELOAD (1)
        if (window.performance?.navigation?.type === 1) {
          return true;
        }
        
        // 방법 3: Navigation Timing API
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0 && navEntries[0].type === 'reload') {
          return true;
        }
        
        return false;
      };

      // 새로고침인 경우 스크롤 세션 리셋
      if (isRefresh()) {
        console.log('🔄 [ScrollRestore] 새로고침 감지 - 스크롤 세션 완전 리셋');
        
        // 모든 스크롤 관련 데이터 삭제
        sessionStorage.removeItem('scroll-/');
        sessionStorage.removeItem('hasScrollPosition');
        sessionStorage.removeItem('isRefreshing');
        
        // history state도 정리
        const currentState = window.history.state || {};
        window.history.replaceState({
          ...currentState,
          hasScrollPosition: false,
          fromBack: false
        }, '');
        
        // 맨 위로 이동
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
        return;
      }

      // 뒤로가기 감지: performance.navigation.type === 2 또는 popstate 이벤트
      const isBackNavigation = () => {
        // 방법 1: Navigation API 사용
        if (window.performance?.navigation?.type === 2) {
          return true; // 뒤로가기/앞으로가기
        }
        
        // 방법 2: History state 확인
        if (window.history.state && window.history.state.fromBack) {
          return true;
        }
        
        // 방법 3: 세션 스토리지에 이전 방문 기록이 있는지 확인
        const hasStoredPosition = sessionStorage.getItem('scroll-/');
        if (hasStoredPosition) {
          return true; // 이전에 홈페이지를 방문했고 스크롤 위치가 저장되어 있음
        }
        
        return false;
      };

      // 뒤로가기가 아니면 맨 위로 이동
      if (!isBackNavigation()) {
        console.log('📍 [ScrollRestore] 새로운 방문 - 맨 위로 이동');
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
        return;
      }

      // 뒤로가기인 경우 스크롤 위치 복원
      console.log('🔙 [ScrollRestore] 뒤로가기 감지 - 스크롤 위치 복원 시작');

      const restoreTimer = setTimeout(() => {
        const savedPosition = sessionStorage.getItem('scroll-/');
        
        console.log('📍 [ScrollRestore] 저장된 위치:', savedPosition);
        
        if (savedPosition && savedPosition !== '0') {
          const scrollY = parseInt(savedPosition, 10);
          
          console.log('🎯 [ScrollRestore] 스크롤 복원:', scrollY);
          
          if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(scrollY, { 
              immediate: false,
              duration: 0.8
            });
            console.log('🚀 [ScrollRestore] Lenis 복원 완료');
          } else {
            window.scrollTo({ 
              top: scrollY, 
              behavior: 'smooth' 
            });
            console.log('🔄 [ScrollRestore] 네이티브 복원 완료');
          }
        } else {
          console.log('📍 [ScrollRestore] 저장된 스크롤 위치가 없음');
        }
      }, 300);

      return () => clearTimeout(restoreTimer);
    }, 100); // DOM 로드 후 체크를 위한 짧은 딜레이

    return () => clearTimeout(checkTimer);
  }, [location.pathname]);

  // 스크롤 위치 저장 함수 (홈페이지에서만)
  const saveScrollPosition = () => {
    // 홈페이지가 아니면 저장하지 않음
    if (location.pathname !== '/') {
      console.log('🚫 [ScrollRestore] 홈페이지가 아니므로 저장하지 않음');
      return;
    }

    const scrollY = window.lenis?.scroll || window.pageYOffset || document.documentElement.scrollTop || 0;
    
    if (scrollY > 10) {
      sessionStorage.setItem('scroll-/', scrollY.toString());
      
      // 뒤로가기 감지용 플래그 설정
      const currentState = window.history.state || {};
      window.history.replaceState({
        ...currentState,
        hasScrollPosition: true
      }, '');
      
      console.log('💾 [ScrollRestore] 홈 스크롤 위치 저장:', scrollY);
    } else {
      console.log('📍 [ScrollRestore] 스크롤이 10px 미만이므로 저장하지 않음');
    }
  };

  return saveScrollPosition;
};

// 글로벌 이벤트 리스너 추가
if (typeof window !== 'undefined') {
  let hasInitialized = false;
  
  if (!hasInitialized) {
    // 뒤로가기 시 플래그 설정
    window.addEventListener('popstate', () => {
      const currentState = window.history.state || {};
      window.history.replaceState({
        ...currentState,
        fromBack: true
      }, '');
      console.log('🔙 [ScrollRestore] popstate 이벤트 - 뒤로가기 플래그 설정');
    });
    
    // 새로고침 감지를 위한 beforeunload 이벤트
    window.addEventListener('beforeunload', () => {
      // 새로고침 플래그 설정
      sessionStorage.setItem('isRefreshing', 'true');
      console.log('🔄 [ScrollRestore] beforeunload - 새로고침 플래그 설정');
    });
    
    // 페이지 로드 시 새로고침 플래그 확인 및 제거
    if (sessionStorage.getItem('isRefreshing') === 'true') {
      console.log('🔄 [ScrollRestore] 새로고침 후 로드 - 스크롤 세션 리셋');
      sessionStorage.removeItem('scroll-/');
      sessionStorage.removeItem('hasScrollPosition');
      sessionStorage.removeItem('isRefreshing');
    }
    
    hasInitialized = true;
  }
}

export default useSimpleScrollRestore; 