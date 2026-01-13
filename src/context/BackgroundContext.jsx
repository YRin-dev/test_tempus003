import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

const BackgroundContext = createContext();

/**
 * BackgroundProvider 컴포넌트
 * 전체 앱의 배경색 상태를 관리하고 섹션별 트랜지션을 제공
 * 스크롤 위치에 따라 섹션별 배경색이 자동으로 전환됩니다
 *
 * Props:
 * @param {ReactNode} children - 하위 컴포넌트들 [Required]
 *
 * Example usage:
 * <BackgroundProvider>
 *   <App />
 * </BackgroundProvider>
 */
export function BackgroundProvider({ children }) {
  const [backgroundMode, setBackgroundMode] = useState('light');
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState('#ffffff');

  // 섹션별 배경색 등록을 위한 Map
  const sectionColorsRef = useRef(new Map());
  const observerRef = useRef(null);

  // 배경색 정의
  const backgroundColors = {
    light: '#ffffff',
    dark: '#020202',
    gray: '#6D7075',
    blue: '#1E3A8A',
    lightgray: '#F3F4F6',
  };

  /**
   * 직접 배경 모드 업데이트
   * @param {string} mode - 'light' 또는 'dark'
   */
  const updateBackgroundMode = (mode) => {
    if (
      mode === 'light' ||
      mode === 'dark' ||
      mode === 'gray' ||
      mode === 'blue' ||
      mode === 'lightgray'
    ) {
      console.log(`🎨 Background mode change to: ${mode}`);
      setBackgroundMode(mode);
      setCurrentBackgroundColor(backgroundColors[mode]);
    }
  };

  /**
   * 섹션별 배경색 등록
   * @param {string} sectionId - 섹션 고유 ID
   * @param {string} color - 배경색 (hex 코드)
   * @param {HTMLElement} element - 섹션 DOM 요소
   */
  // Intersection Observer 초기화
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // 가장 많이 보이는 섹션 찾기
          let maxRatio = 0;
          let activeSection = null;

          entries.forEach((entry) => {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              const sectionId = entry.target.dataset.sectionId;
              if (sectionId && sectionColorsRef.current.has(sectionId)) {
                activeSection = sectionColorsRef.current.get(sectionId);
              }
            }
          });

          // 가장 많이 보이는 섹션의 배경색으로 전환
          if (activeSection) {
            setCurrentBackgroundColor((prevColor) => {
              if (activeSection.color !== prevColor) {
                const activeSectionId = activeSection.element.dataset.sectionId;
                console.log(
                  `🎨 Background color changed to: ${activeSection.color} (section: ${activeSectionId})`
                );
                return activeSection.color;
              }
              return prevColor;
            });
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: '-20% 0px -20% 0px', // 화면 중앙 60% 영역에 있을 때만 감지
        }
      );
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  /**
   * 섹션별 배경색 등록
   * @param {string} sectionId - 섹션 고유 ID
   * @param {string} color - 배경색 (hex 코드)
   * @param {HTMLElement} element - 섹션 DOM 요소
   */
  const registerSection = useCallback((sectionId, color, element) => {
    if (!element || !observerRef.current) return;

    sectionColorsRef.current.set(sectionId, { color, element });

    // 섹션 요소에 data 속성 추가
    element.setAttribute('data-section-id', sectionId);
    observerRef.current.observe(element);
  }, []);

  /**
   * 섹션 등록 해제
   * @param {string} sectionId - 섹션 고유 ID
   */
  const unregisterSection = useCallback((sectionId) => {
    const section = sectionColorsRef.current.get(sectionId);
    if (section && observerRef.current) {
      observerRef.current.unobserve(section.element);
      sectionColorsRef.current.delete(sectionId);
    }
  }, []);

  const value = {
    backgroundMode,
    updateBackgroundMode,
    currentBackgroundColor,
    backgroundColors,
    registerSection,
    unregisterSection,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

/**
 * 배경 Context를 사용하는 커스텀 훅
 * @returns {Object} 배경 관련 상태와 함수들
 */
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
