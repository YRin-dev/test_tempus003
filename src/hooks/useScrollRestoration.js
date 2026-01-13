import React from 'react';

/**
 * 브라우저 스크롤 복원 비활성화 훅
 * 
 * SPA에서 페이지 이동 시 브라우저가 자동으로 스크롤 위치를 복원하는 것을 방지합니다.
 * 대신 커스텀 스크롤 관리 시스템(Lenis 등)을 사용할 수 있도록 합니다.
 * 
 * Example usage:
 * useScrollRestoration();
 */
function useScrollRestoration() {
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      console.log('🚫 브라우저 스크롤 자동 복원 해제');
    }
  }, []);
}

export default useScrollRestoration; 