import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * 스크롤에 따라 이미지 opacity만 변화하는 컴포넌트
 *
 * Props:
 * @param {string} backgroundColor - 배경 색상 [Optional, 기본값: '#0000ff']
 * @param {string} image - 배경 이미지 URL [Optional]
 * @param {React.ReactNode} backgroundComponent - 배경으로 사용될 컴포넌트 [Optional]
 * @param {React.ReactNode} children - 섹션 내부에 표시될 컨텐츠 [Optional]
 * @param {React.ReactNode} msg - 섹션에 표시할 메시지 [Optional]
 * @param {React.ReactNode} content - 섹션 아래에 표시될 컨텐츠 [Optional]
 * @param {boolean} useFadeEffect - 페이드 인 효과 사용 여부 [Optional, 기본값: false]
 * @param {number} targetOpacity - 최종 투명도 [Optional, 기본값: 0.3]
 *
 * Example usage:
 * // 배경 이미지 사용
 * <FadeInandOut
 *   image="path/to/image.jpg"
 *   msg={<Typography variant="h2">메인 메시지</Typography>}
 *   useFadeEffect={true}
 *   targetOpacity={0.3}
 * />
 */
function FadeInandOut({
  backgroundColor = '#0000ff',
  image,
  backgroundComponent,
  children,
  msg,
  content,
  useFadeEffect = false,
  targetOpacity = 0.5,
}) {
  // 상태 관리 - opacity만 관리
  const [_opacity, setOpacity] = useState(useFadeEffect ? 0 : 1);
  const [fadeOutOpacity, setFadeOutOpacity] = useState(1);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const prevOpacityRef = useRef(useFadeEffect ? 0 : 1);
  const prevFadeOutOpacityRef = useRef(1);
  const rafIdRef = useRef(null);

  // 가장 가까운 스크롤 컨테이너를 찾는 함수
  const findScrollContainer = useCallback((element) => {
    while (element && element !== document.body) {
      const style = window.getComputedStyle(element);
      if (
        style.overflow === 'auto' ||
        style.overflow === 'scroll' ||
        style.overflowY === 'auto' ||
        style.overflowY === 'scroll'
      ) {
        return element;
      }
      element = element.parentElement;
    }
    return null; // viewport 사용
  }, []);

  // 스크롤 이벤트 핸들러 - opacity만 계산
  const handleScroll = useCallback(
    (scrollContainer) => {
      if (!sectionRef.current || !containerRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();

      // 스크롤 컨테이너에 따라 높이 계산 분기
      let containerHeight;
      let containerTop = 0;

      if (scrollContainer === null) {
        // viewport 사용
        containerHeight = window.innerHeight;
        containerTop = 0;
      } else {
        // 특정 스크롤 컨테이너 사용
        const scrollContainerRect = scrollContainer.getBoundingClientRect();
        containerHeight = scrollContainer.clientHeight;
        containerTop = scrollContainerRect.top;
      }

      // 애니메이션 범위 설정
      const animationStartPoint = containerTop;
      const animationEndPoint = containerTop - window.innerHeight;

      // progress 계산
      let currentProgress = 0;
      let newOpacity = prevOpacityRef.current;
      let newFadeOutOpacity = prevFadeOutOpacityRef.current;

      if (
        containerRect.top <= animationStartPoint &&
        containerRect.top >= animationEndPoint
      ) {
        // 애니메이션 구간 내에 있을 때
        currentProgress =
          (animationStartPoint - containerRect.top) /
          (animationStartPoint - animationEndPoint);
        currentProgress = Math.max(0, Math.min(1, currentProgress));

        // 페이드 효과 사용 시 완전 불투명하게
        if (useFadeEffect) {
          newOpacity = 1;
        }

        // 스크롤 진행도에 따라 페이드 아웃
        const opacityRange = 1 - targetOpacity;
        newFadeOutOpacity = 1 - currentProgress * opacityRange;
      } else if (containerRect.top > animationStartPoint) {
        // 시작점보다 아래에 있으면
        currentProgress = 0;
        newFadeOutOpacity = 1; // 완전 불투명

        // 페이드 효과 사용 시
        if (useFadeEffect) {
          // 뷰포트에 진입하기 시작한 시점부터 스티키 지점까지 페이드인
          const fadeInStart = containerTop + containerHeight;

          if (containerRect.top < fadeInStart) {
            // fadeInProgress는 0(시작)부터 1(완료)까지 변화
            const fadeInProgress =
              1 -
              Math.max(
                0,
                Math.min(
                  1,
                  (containerRect.top - containerTop) / containerHeight
                )
              );
            newOpacity = fadeInProgress;
          } else {
            // 아직 컨테이너에 진입하지 않음
            newOpacity = 0;
          }
        }
      } else if (containerRect.top < animationEndPoint) {
        // 종료점보다 위에 있으면
        currentProgress = 1;
        newFadeOutOpacity = targetOpacity; // 최대 스크롤 시 목표 투명도

        // 페이드 효과 사용 시 계속 불투명 유지
        if (useFadeEffect) {
          newOpacity = 1;
        }
      }

      // 값이 변경된 경우에만 상태 업데이트
      if (Math.abs(newOpacity - prevOpacityRef.current) > 0.001) {
        prevOpacityRef.current = newOpacity;
        setOpacity(newOpacity);
      }
      if (Math.abs(newFadeOutOpacity - prevFadeOutOpacityRef.current) > 0.001) {
        prevFadeOutOpacityRef.current = newFadeOutOpacity;
        setFadeOutOpacity(newFadeOutOpacity);
      }
    },
    [useFadeEffect, targetOpacity]
  );

  // 이벤트 리스너 등록/해제
  useEffect(() => {
    if (!containerRef.current) return;

    // 스크롤 컨테이너 찾기
    const scrollContainer = findScrollContainer(
      containerRef.current.parentElement
    );

    // 스크롤 핸들러 래퍼 - requestAnimationFrame으로 최적화
    const scrollHandler = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        handleScroll(scrollContainer);
        rafIdRef.current = null;
      });
    };

    // 초기 계산
    scrollHandler();

    // 이벤트 리스너 등록
    if (scrollContainer === null) {
      // viewport 스크롤 감지
      window.addEventListener('scroll', scrollHandler, { passive: true });
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }
      };
    } else {
      // 특정 컨테이너 스크롤 감지
      scrollContainer.addEventListener('scroll', scrollHandler, {
        passive: true,
      });
      return () => {
        scrollContainer.removeEventListener('scroll', scrollHandler);
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }
      };
    }
  }, [handleScroll, findScrollContainer]);

  // 배경 렌더링 결정
  const renderBackground = () => {
    if (backgroundComponent) {
      return backgroundComponent;
    }
    return null;
  };

  // 통합된 렌더링 로직
  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* 스티키 영역만을 위한 컨테이너 */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '210vh', // 고정 높이
          boxSizing: 'border-box',
        }}
      >
        {/* 스티키 영역 (배경) */}
        <Box
          ref={sectionRef}
          sx={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            zIndex: 0,
          }}
        >
          {/* 베이스 이미지 레이어 - 항상 보임 */}
          {image && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1,
              }}
            />
          )}

          {/* 검은 배경 레이어 - 스크롤에 따라 진해짐 */}
          {image &&
            (() => {
              // 초기 어두움: 20% (0.2)
              const initialDarkness = 0.4;
              // 최종 어두움: targetOpacity를 기반으로 계산 (예: targetOpacity=0.3이면 최종 어두움=0.7)
              const finalDarkness = 1 - targetOpacity;
              // 스크롤 진행도에 따라 초기 어두움에서 최종 어두움까지 변화
              // fadeOutOpacity는 1에서 targetOpacity까지 감소하므로,
              // (1 - fadeOutOpacity)는 0에서 (1 - targetOpacity)까지 증가
              const opacityRange = 1 - targetOpacity;
              const darkProgress =
                opacityRange > 0 ? (1 - fadeOutOpacity) / opacityRange : 0;
              const darkOpacity = Math.min(
                1,
                Math.max(
                  initialDarkness,
                  initialDarkness +
                    darkProgress * (finalDarkness - initialDarkness)
                )
              );

              return (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#000000',
                    opacity: darkOpacity, // 초기 20%에서 시작하여 스크롤에 따라 진해짐
                    transition: 'opacity 0.1s ease-out',
                    willChange: 'opacity',
                    zIndex: 2,
                    '&::after': {
                      // 이미지 위에 어두운 그라데이션 오버레이 (가독성 확보)
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
                    },
                  }}
                />
              );
            })()}

          {/* 배경 컨텐츠 박스 - backgroundComponent용 */}
          {backgroundComponent && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {renderBackground()}
            </Box>
          )}

          {/* image나 backgroundComponent 없을 때 기본 배경색 */}
          {!image && !backgroundComponent && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: backgroundColor,
                zIndex: 1,
              }}
            />
          )}
        </Box>

        {/* 메인 메시지/컨텐츠 영역 - 위로 이동하지 않음 */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            marginTop: '-100vh',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              pointerEvents: 'auto',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {msg || children}
          </Box>
        </Box>

        {/* 추가 스크롤 공간 */}
        <Box
          sx={{
            height: '100vh', // 고정 여백
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* 스크롤 공간 */}
        </Box>
      </Box>

      {/* Content 전용 컨테이너 */}
      {content && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 10, // 스티키보다 위에
            width: '100%',
          }}
        >
          {content}
        </Box>
      )}
    </Box>
  );
}

FadeInandOut.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  backgroundComponent: PropTypes.node,
  children: PropTypes.node,
  msg: PropTypes.node,
  content: PropTypes.node,
  useFadeEffect: PropTypes.bool,
  targetOpacity: PropTypes.number,
};

export default FadeInandOut;
