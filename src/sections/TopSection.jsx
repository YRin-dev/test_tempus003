import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import SmoothScroll from '../components/patterns/scroll/SmoothScroll';
import AnimationLogoSection from './AnimationLogoSection';
import TransitionSection from './TransitionSection';

/**
 * TopSection 컴포넌트
 *
 * 메인 랜딩 페이지의 최상단 섹션으로 SmoothScroll로 부드러운 스크롤을 제공합니다.
 * - HeroSection: AnimationLogoSection 사용
 * - TransitionSection: 회사 소개
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <TopSection ref={topSectionRef} />
 */
const TopSection = forwardRef((props, ref) => {
  return (
    <Box ref={ref}>
      <SmoothScroll duration={1.2} smoothWheel={true}>
        <AnimationLogoSection />
        <TransitionSection />
      </SmoothScroll>
    </Box>
  );
});

TopSection.displayName = 'TopSection';

export default TopSection;
