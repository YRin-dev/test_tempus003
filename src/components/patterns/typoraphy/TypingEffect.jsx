import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import useIsInView from '../../../hooks/useIsInView';

/**
 * 타이핑 효과 컴포넌트
 *
 * Props:
 * @param {Array} texts - 타이핑 할 텍스트 배열
 * @param {number} typingSpeed - 타이핑 속도 (ms)
 * @param {number} deleteSpeed - 삭제 속도 (ms)
 * @param {string} cursorColor - 커서 색상
 * @param {string} textColor - 텍스트 색상
 * @param {number|string|object} fontSize - 폰트 사이즈 (예: 32, '2.4rem', { xs: '1.8rem', md: '2.4rem' })
 * @param {string|object} variant - Typography variant 또는 breakpoints별 variant 객체
 * @param {string} textAlign - 정렬
 * @param {string} fontFamily - 폰트 패밀리
 * @param {number|string} fontWeight - 폰트 두께
 * @param {object} sx - 추가 스타일
 * @param {number} startDelay - 타이핑 시작 전 대기 시간 (ms)
 * @param {string} cursorType - 커서 타입 ('line', 'circle', 'square')
 */
function TypingEffect({
  texts = ['Hello Designers', 'You can make it', 'With Cursor AI.'],
  typingSpeed = 100,
  deleteSpeed = 50,
  cursorColor = '#fff',
  textColor = 'inherit',
  fontSize, // ✅ 이제 진짜 쓰일거야
  variant = { xs: 'h3', sm: 'h3', md: 'h2', lg: 'h1' },
  textAlign = 'left',
  fontFamily,
  fontWeight = 'bold',
  sx = {},
  startDelay = 0,
  cursorType = 'line',
}) {
  const textRef = useRef(null);
  const [containerRef, isInView] = useIsInView();
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const theme = useTheme();

  // texts 배열의 유효성을 확인하고 필요하면 기본값으로 설정
  const safeTexts =
    Array.isArray(texts) && texts.length > 0 ? texts : ['Hello Designer'];

  // 애니메이션 단계 전환 딜레이 값
  const delayAfterTyping = 1000; // 타이핑 완료 후 삭제 시작 전까지 대기 시간
  const delayBeforeTyping = 500; // 텍스트 삭제 완료 후 다음 텍스트 타이핑 시작 전 대기 시간

  // 화면에 보일 때 애니메이션 시작
  useEffect(() => {
    if (isInView && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setIsTyping(true);
        setHasStarted(true);
      }, startDelay);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, hasStarted, startDelay]);

  // 타이핑 애니메이션 효과 구현
  useEffect(() => {
    if (!isInView || !hasStarted) return;

    const currentFullText = safeTexts[textIndex] || '';
    const isLastText = textIndex === safeTexts.length - 1;

    // 1. 타이핑 중
    if (isTyping && charIndex < currentFullText.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentFullText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    }

    // 2. 타이핑 완료 → 잠시 대기
    else if (isTyping && charIndex >= currentFullText.length) {
      const pauseTimeout = setTimeout(() => {
        if (isLastText) {
          return; // 마지막 텍스트면 유지
        }
        setIsTyping(false); // 삭제로 전환
      }, delayAfterTyping);
      return () => clearTimeout(pauseTimeout);
    }

    // 3. 삭제 진행 중
    else if (!isTyping && charIndex > 0) {
      const deletingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
      return () => clearTimeout(deletingTimeout);
    }

    // 4. 삭제 완료 → 다음 텍스트
    else if (!isTyping && charIndex === 0) {
      if (isLastText) return;

      const nextTextTimeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
        setIsTyping(true);
      }, delayBeforeTyping);
      return () => clearTimeout(nextTextTimeout);
    }
  }, [
    textIndex,
    charIndex,
    isTyping,
    safeTexts,
    typingSpeed,
    deleteSpeed,
    isInView,
    hasStarted,
  ]);

  // fontSize 숫자인 경우(px)만 cursor 계산에 사용
  const numericFontSize = typeof fontSize === 'number' ? fontSize : undefined;

  // 커서 타입별 스타일 설정
  const getCursorStyle = () => {
    const baseStyle = {
      backgroundColor: cursorColor || textColor,
      animation: 'blink 1s ease-in-out infinite',
    };

    switch (cursorType) {
      case 'circle':
        return {
          ...baseStyle,
          width: numericFontSize ? `${numericFontSize * 0.2}px` : '0.2em',
          height: numericFontSize ? `${numericFontSize * 0.2}px` : '0.2em',
          borderRadius: '50%',
          display: 'inline-block',
          position: 'relative',
          verticalAlign: 'text-bottom',
        };
      case 'square':
        return {
          ...baseStyle,
          width: numericFontSize ? `${numericFontSize * 0.25}px` : '0.25em',
          height: numericFontSize ? `${numericFontSize * 0.25}px` : '0.25em',
          display: 'inline-block',
          position: 'relative',
          verticalAlign: 'text-bottom',
        };
      case 'line':
      default:
        return {
          ...baseStyle,
          width: numericFontSize ? `${numericFontSize * 0.08}px` : '0.08em',
          height: '1em',
          display: 'inline-block',
          verticalAlign: 'middle',
          marginBottom: '0.1em',
        };
    }
  };

  // 줄바꿈 처리 + 커서 렌더링
  const formattedText = () => {
    // 텍스트가 없는 경우에도 커서만 표시
    if (!currentText) {
      return (
        <Box
          component="span"
          sx={{
            ...getCursorStyle(),
            display: 'inline-block',
            position: 'relative',
            verticalAlign: cursorType === 'line' ? 'middle' : 'text-bottom',
            marginLeft: '0.1em',
            ...(cursorType === 'line'
              ? {
                  marginBottom: '0.1em',
                }
              : cursorType === 'circle' || cursorType === 'square'
              ? {
                  bottom: numericFontSize
                    ? `${numericFontSize * 0.2}px`
                    : '0.2em',
                }
              : {}),
            '@keyframes blink': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        />
      );
    }

    const lines = currentText.split('\n');

    return (
      <>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i === lines.length - 1 ? (
              <Box
                component="span"
                sx={{
                  ...getCursorStyle(),
                  display: 'inline-block',
                  position: 'relative',
                  verticalAlign:
                    cursorType === 'line' ? 'middle' : 'text-bottom',
                  marginLeft: '0.1em',
                  ...(cursorType === 'line'
                    ? {
                        marginBottom: '0.1em',
                      }
                    : cursorType === 'circle' || cursorType === 'square'
                    ? {
                        bottom: numericFontSize
                          ? `${numericFontSize * 0.2}px`
                          : '0.2em',
                      }
                    : {}),
                  '@keyframes blink': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 },
                  },
                }}
              />
            ) : (
              <br />
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  const isResponsiveVariant = typeof variant === 'object';

  return (
    <Box
      ref={containerRef}
      sx={{
        py: 4,
        ...sx,
        '@keyframes blink': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    >
      <Typography
        ref={textRef}
        variant={typeof variant === 'string' ? variant : undefined}
        color={textColor}
        sx={{
          fontWeight,
          fontFamily,
          letterSpacing: '0rem',
          minHeight: '1.2em',
          textAlign,
          whiteSpace: 'pre-wrap',
          display: 'block',
          width: '100%',

          // ✅ fontSize가 없을 때만 variant 객체로 반응형 타이포 설정
          ...(isResponsiveVariant &&
            !fontSize &&
            Object.keys(variant).reduce((acc, breakpoint) => {
              acc[theme.breakpoints.up(breakpoint)] = {
                ...theme.typography[variant[breakpoint]],
              };
              return acc;
            }, {})),

          // ✅ fontSize prop이 있으면 이게 최종 폰트 크기
          ...(fontSize !== undefined && { fontSize }),

          ...sx,
        }}
      >
        {formattedText()}
      </Typography>
    </Box>
  );
}

export default TypingEffect;
