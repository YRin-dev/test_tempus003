import React from 'react';
import { Box, Typography } from '@mui/material';
import FullPageSection from '../components/commons/container/FullPageSection';
import HumanIllustCarousel from '../template/HumanIllustCarousel';
import { missionContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * MissionSection 컴포넌트
 *
 * 브랜드 미션 메시지를 표시하는 섹션입니다.
 * - FullPageSection(widthType="vw")으로 전체 뷰포트 폭 차지
 * - missionContent에서 제목과 브랜드 미션 메시지 가져오기
 * - HumanIllustCarousel(pathType="circle", theme="dark")을 화면 중앙에 원형 배치
 * - 텍스트는 z-index로 일러스트 위에 오버레이
 * - useBackground('dark') 모드 전환 + useIsInView 사용 (threshold: 0.1)
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <MissionSection />
 */
function MissionSection() {
  const { updateBackgroundMode } = useBackground();
  const [ref, isInView] = useIsInView({ threshold: 0.1, triggerOnce: false });

  // 뷰포트에 10%만 보여도 dark 모드로 전환
  React.useEffect(() => {
    if (isInView) {
      updateBackgroundMode('dark');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <FullPageSection widthType="vw" ref={ref}>
      {/* HumanIllustCarousel - 배경 */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <HumanIllustCarousel pathType="circle" theme="dark" />
      </Box>

      {/* 텍스트 오버레이 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          padding: { xs: '40px 20px', md: '80px 40px' },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 2,
          }}
        >
          {missionContent.title}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.6,
            }}
          >
            <strong>{missionContent.description.brandName}</strong>
            {missionContent.description.message[0]}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.6,
            }}
          >
            {missionContent.description.message[1]}
          </Typography>
        </Box>
      </Box>
    </FullPageSection>
  );
}

export default MissionSection;
