import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { transitionContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import buildingImg from '../assets/photo/buildingImg.jpeg';

function TransitionSection() {
  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [statsRef, isStatsInView] = useIsInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { year: '2012', label: 'Founded' },
    { value: '33+', label: 'Patents' },
    { value: '31+', label: 'Projects' },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#F8F9FA',
        overflow: 'hidden',
      }}
    >
      {/* --- BACKGROUND ANIMATION SEQUENCE (챠라락 효과) --- */}

      {/* 1. 왼쪽 메인 반원 (가장 먼저 등장) */}
      <Box
        sx={{
          position: 'absolute',
          top: '46%',
          left: '0',
          width: '65%',
          height: '62%',
          transform: isContentInView
            ? 'translateY(-50%) translateX(0)'
            : 'translateY(-50%) translateX(-100%)',
          borderRadius: '0 250px 250px 0',
          background:
            'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
          backgroundColor: '#ECF4F9',
          backdropFilter: 'blur(40px)',

          opacity: isContentInView ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.1s', // 첫 번째
          zIndex: 0,
        }}
      />

      {/* 2. 상단 오른쪽 도형 (두 번째) 회색 */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          top: '0',
          right: '0',
          width: '100%',
          height: '140px',
          backgroundColor: '#ECF4F9',
          borderRadius: '250px 0 0 250px',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateX(0)' : 'translateX(100px)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.3s', // 두 번째
        }}
      />

      {/* 3. 상단 왼쪽 파란색 작은 반원 (세 번째) */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: '65px',
          left: '0',
          width: '50%',
          height: '130px',
          borderRadius: ' 0 250px 250px 0',
          background:
            'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
          backgroundColor: '#D8E8F2',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.5s', // 세 번째
        }}
      />

      {/* 4. 하단 배경 장식 (네 번째) 회색 */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
          left: '0',
          width: '80%',
          height: '23%',
          backgroundColor: '#ECF4F9',
          borderRadius: '0 250px 250px 0',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.7s', // 네 번째
        }}
      />

      {/* 5. 보조 블루 글로우 (배경 레이어 마무리) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
          opacity: isContentInView ? 1 : 0,
          transition: 'opacity 2s ease 1s',
        }}
      />

      {/* --- CONTENT LAYER --- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1600px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          padding: { xs: '80px 20px 40px', md: '80px 60px 60px' },
          zIndex: 2,
        }}
      >
        {/* 왼쪽: 텍스트 섹션 */}
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { xs: '20px', md: '120px', lg: '160px' },

            maxWidth: { xs: '100%', md: '800px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#1E40AF',
              letterSpacing: '0.3em',
              mb: 2,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 1.2s', // 배경이 나온 뒤 등장
            }}
          >
            DISCOVER OUR STORY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.1,
              mb: 4,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 1.4s',
            }}
          >
            {transitionContent.text === 'ABOUT'
              ? '혁신을 넘어\n미래를 설계합니다'
              : transitionContent.text}
          </Typography>

          <Box sx={{ mb: 5 }}>
            {transitionContent.description.map((text, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 1,
                  opacity: isContentInView ? 1 : 0,
                  transform: isContentInView
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                  transition: `all 0.8s ease ${1.6 + index * 0.1}s`,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 2s',
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                position: 'relative',
                display: 'inline-block',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#666',
                textDecoration: 'none',
                paddingBottom: '4px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1E40AF',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                },
                '&:hover': {
                  color: '#1E40AF',
                  '&::after': { transform: 'scaleX(1)' },
                },
              }}
            >
              더 알아보기 →
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 이미지 섹션 */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          right: 0,
          transform: 'translateY(-50%)',
          width: { xs: '50%', md: '40%', lg: '43%' },
          height: { xs: '350px', md: '555px' },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '250px 0 0 250px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
            opacity: isContentInView ? 1 : 0,
            transform: isContentInView ? 'translateX(0)' : 'translateX(100px)',
            transition: 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s', // 배경 작업 중반부에 등장
          }}
        >
          <Box
            component="img"
            src={buildingImg}
            alt="회사 건물"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* 통계 카드 (가장 마지막에 등장하여 정점) */}
        <Box
          ref={statsRef}
          sx={{
            position: 'absolute',
            bottom: { xs: '3px', md: '-60px' },
            right: { xs: '200px', md: '400px' },
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: { xs: '24px', md: '32px 48px' },
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: { xs: 4, md: 6 },
            zIndex: 10,
            opacity: isStatsInView ? 1 : 0,
            transform: isStatsInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 2.2s', // 모든 요소 중 가장 늦게 등장
          }}
        >
          {stats.map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 800,
                }}
              >
                {stat.value || stat.year}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Typography
        sx={{
          position: 'absolute',
          bottom: '-4%',
          right: '5px',
          fontSize: '8vw',
          fontWeight: 900,
          color: 'rgba(0,0,0,0.02)',
          zIndex: 2,
          pointerEvents: 'none',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        TEMPUS
      </Typography>
    </Box>
  );
}

export default TransitionSection;
