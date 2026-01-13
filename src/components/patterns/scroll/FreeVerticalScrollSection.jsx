import React, { useRef, useEffect, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 모션 블러 필터 컴포넌트
const MotionBlurFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter
        id="free-vertical-motion-blur-filter"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="0 0">
          <animate
            attributeName="stdDeviation"
            values="0 0; 0 0"
            dur="0.1s"
            repeatCount="indefinite"
            id="free-vertical-blur-animation"
          />
        </feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

/**
 * 자유형 세로 스크롤 컴포넌트 (GSAP 공식 권장사항 적용)
 * gsap.context()를 사용하여 완전한 cleanup 보장
 *
 * Props:
 * @param {React.ReactNode} children - 세로로 배치될 컨텐츠 요소들 [Required]
 * @param {string} width - 섹션의 너비 [Optional, 기본값: "100vw"]
 * @param {string} backgroundColor - 섹션 배경색 [Optional]
 * @param {string|React.ReactNode} sectionTitle - 섹션 제목 [Optional]
 * @param {number} scrubValue - 스크롤 감도 [Optional, 기본값: 1]
 * @param {boolean} indicators - 개발 모드에서 스크롤 트리거 마커 표시 여부 [Optional, 기본값: false]
 * @param {boolean} preventOverlap - 겹침 방지 [Optional, 기본값: true]
 * @param {number} transitionDuration - 배경 투명도 트랜지션 시간 [Optional, 기본값: 0.5]
 * @param {boolean} enableMotionBlur - 모션 블러 활성화 여부 [Optional, 기본값: true]
 * @param {number} motionBlurIntensity - 모션 블러 강도 배율 [Optional, 기본값: 1.0]
 * @param {string|Element|null} scroller - 스크롤 컨테이너 [Optional, 기본값: "auto"]
 *
 * Example usage:
 * <FreeVerticalScrollSection
 *   width="100vw"
 *   backgroundColor="#f5f5f5"
 *   sectionTitle="자유형 세로 스크롤"
 *   enableMotionBlur={true}
 * >
 *   <ComponentA />
 *   <ComponentB />
 *   <ComponentC />
 * </FreeVerticalScrollSection>
 */
function FreeVerticalScrollSection({
  children,
  width = '100vw',
  backgroundColor,
  sectionTitle,
  scrubValue = 1,
  indicators = false,
  preventOverlap = true,
  transitionDuration = 0.5,
  enableMotionBlur = true,
  motionBlurIntensity = 1.0,
  scroller = 'auto',
}) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contextRef = useRef(null); // 🔥 GSAP context 저장

  // 🔥 리사이즈 시 컴포넌트 재초기화를 위한 key
  const [resizeKey, setResizeKey] = React.useState(0);

  // 가장 가까운 스크롤 컨테이너 자동 감지 함수
  const findNearestScrollContainer = useCallback(
    (element) => {
      if (scroller === 'auto') {
        let current = element?.parentElement;
        while (current && current !== document.body) {
          const style = window.getComputedStyle(current);
          const hasScroll =
            style.overflow === 'auto' ||
            style.overflow === 'scroll' ||
            style.overflowY === 'auto' ||
            style.overflowY === 'scroll';

          if (hasScroll) {
            console.log('🎯 Free: Auto-detected scroll container:', current);
            return current;
          }
          current = current.parentElement;
        }
        console.log('🎯 Free: No scroll container found, using window');
        return null;
      }

      console.log('🎯 Free: Using specified scroller:', scroller);
      return scroller;
    },
    [scroller]
  );

  // 🔥 GSAP 공식 권장: gsap.context()를 사용한 완전한 cleanup
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const bg = bgRef.current;

    if (!section || !container || !children?.length || !bg) return;

    // 무작위 ID 생성
    if (!section.id) {
      section.id = `free-vertical-section-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    }

    console.log('🚀 [FreeVertical] Initializing with GSAP context');

    // 🔥 GSAP context 생성 및 모든 애니메이션을 context 내에서 실행
    contextRef.current = gsap.context(() => {
      // 스크롤 컨테이너 감지
      const scrollContainer = findNearestScrollContainer(section);

      // 배경 초기 설정
      gsap.set(bg, { opacity: 0 });

      // 컨테이너 스타일 설정
      gsap.set(container, {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      });

      // 자식 요소들 스타일 설정
      container
        .querySelectorAll('.free-vertical-section-item')
        .forEach((item) => {
          gsap.set(item, {
            flexShrink: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          });
        });

      // DOM 렌더링 완료 후 ScrollTrigger 생성
      gsap.delayedCall(0.1, () => {
        const viewportHeight = scrollContainer
          ? scrollContainer.clientHeight
          : window.innerHeight;
        const actualContentHeight = container.scrollHeight;
        const maxScroll = Math.max(0, actualContentHeight - viewportHeight);

        console.log('🔄 Free container measurements:', {
          actualContentHeight,
          viewportHeight,
          maxScroll,
          totalItems: React.Children.count(children),
        });

        // 🔥 ScrollTrigger를 context 내에서 생성
        ScrollTrigger.create({
          trigger: section,
          scroller: scrollContainer,
          start: 'top top',
          end: () => `+=${maxScroll}`,
          pin: true,
          anticipatePin: 1,
          scrub: scrubValue,
          invalidateOnRefresh: true,
          markers: indicators,
          preventOverlap: preventOverlap,
          onUpdate: (self) => {
            const scrollProgress = self.progress;

            // 컨테이너 위치 업데이트
            gsap.to(container, {
              y: -maxScroll * scrollProgress,
              ease: 'none',
              overwrite: 'auto',
              duration: 0,
            });

            // 모션 블러 적용
            if (enableMotionBlur) {
              const velocity = self.getVelocity() || 0.001;
              const blurAnimation = document.getElementById(
                'free-vertical-blur-animation'
              );

              if (blurAnimation) {
                const velocityThreshold = 0.05;
                const maxBlurAmount = 8 * motionBlurIntensity;

                if (Math.abs(velocity) > velocityThreshold) {
                  const blurAmount = Math.min(
                    maxBlurAmount,
                    Math.abs(velocity) * 0.05 * motionBlurIntensity
                  );
                  blurAnimation.setAttribute(
                    'values',
                    `0 ${blurAmount}; 0 ${blurAmount}`
                  );

                  container
                    .querySelectorAll('.free-vertical-section-item img')
                    .forEach((img) => {
                      img.style.filter =
                        'url(#free-vertical-motion-blur-filter)';
                    });
                } else {
                  blurAnimation.setAttribute('values', '0 0; 0 0');

                  container
                    .querySelectorAll('.free-vertical-section-item img')
                    .forEach((img) => {
                      img.style.filter = 'none';
                    });
                }
              }
            }
          },
          onEnter: () => {
            gsap.to(bg, {
              opacity: 1,
              duration: transitionDuration,
              ease: 'power2.out',
            });
          },
          onLeave: () => {
            gsap.to(bg, {
              opacity: 0,
              duration: transitionDuration,
              ease: 'power2.in',
            });
          },
          onEnterBack: () => {
            gsap.to(bg, {
              opacity: 1,
              duration: transitionDuration,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(bg, {
              opacity: 0,
              duration: transitionDuration,
              ease: 'power2.in',
            });
          },
          onRefresh: () => {
            console.log('🔄 FreeVerticalScrollSection refreshed with context');
          },
        });
      });
    }, section); // context scope를 section으로 제한

    // 🔥 window resize 이벤트 리스너 추가
    const handleWindowResize = () => {
      console.log('🔄 [FreeVertical] Window resize detected');

      clearTimeout(window.freeVerticalResizeTimer);
      window.freeVerticalResizeTimer = setTimeout(() => {
        console.log('🔄 [FreeVertical] Reinitializing after resize');

        // 기존 context 정리
        if (contextRef.current) {
          contextRef.current.revert();
          contextRef.current = null;
        }

        // 컴포넌트 재초기화를 위해 resizeKey 업데이트
        setResizeKey((prev) => prev + 1);
      }, 200); // 200ms 디바운싱
    };

    window.addEventListener('resize', handleWindowResize);

    // 🔥 GSAP 공식 권장: context.revert()로 완전한 정리
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout(window.freeVerticalResizeTimer);

      if (contextRef.current) {
        console.log('🧹 [FreeVertical] GSAP context cleanup - complete revert');
        contextRef.current.revert(); // 모든 GSAP 효과와 DOM 조작 원상복구
        contextRef.current = null;
      }
    };
  }, [
    children,
    scrubValue,
    indicators,
    preventOverlap,
    transitionDuration,
    enableMotionBlur,
    motionBlurIntensity,
    findNearestScrollContainer,
    resizeKey,
  ]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width,
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 모션 블러 SVG 필터 */}
      {enableMotionBlur && <MotionBlurFilter />}

      {/* 배경 레이어 */}
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor,
          zIndex: 0,
        }}
      />

      {/* 섹션 제목 */}
      {sectionTitle && (
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '80px', md: '120px' },
            left: { xs: '20px', md: '40px' },
            zIndex: 10,
            maxWidth: { xs: 'calc(100% - 40px)', md: 'auto' },
          }}
        >
          {typeof sectionTitle === 'string' ? (
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
              }}
            >
              {sectionTitle}
            </Typography>
          ) : (
            sectionTitle
          )}
        </Box>
      )}

      {/* 자유형 세로 스크롤 컨테이너 */}
      <Box
        ref={containerRef}
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        {/* 자식 요소들을 세로로 배열 - 각자의 크기 유지 */}
        {React.Children.map(children, (child, index) => (
          <Box
            key={index}
            className="free-vertical-section-item"
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {React.cloneElement(child, { imageTransition: true })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

FreeVerticalScrollSection.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  sectionTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  scrubValue: PropTypes.number,
  indicators: PropTypes.bool,
  preventOverlap: PropTypes.bool,
  transitionDuration: PropTypes.number,
  enableMotionBlur: PropTypes.bool,
  motionBlurIntensity: PropTypes.number,
  scroller: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.oneOf([null]),
  ]),
};

export default FreeVerticalScrollSection;
