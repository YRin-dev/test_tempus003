import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

/**
 * ProductDetail 컴포넌트
 *
 * 개별 제품(프로젝트) 상세 페이지
 *
 * Props: 없음 (URL 파라미터로 제품 ID를 받음)
 *
 * Example usage:
 * <ProductDetail />
 */
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: '80px', md: '120px' },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ textAlign: 'center', color: 'white', maxWidth: '800px' }}>
        <Button
          onClick={() => navigate('/')}
          sx={{
            mb: 4,
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
          variant="outlined"
        >
          뒤로가기
        </Button>

        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
            fontWeight: 900,
            fontSize: {
              xs: '2.5rem',
              sm: '3.5rem',
              md: '4.5rem',
              lg: '5.5rem',
            },
            letterSpacing: '-0.02em',
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          Product Detail
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          제품 ID: {id}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.8,
          }}
        >
          개별 제품 상세 페이지입니다.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductDetail;
