import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';

// 커스텀 테마 불러오기!
import { lightTheme } from './styles/theme';

// 커스텀 훅 불러오기
import useLenisScroll from './hooks/useLenisScroll';
import useScrollRestoration from './hooks/useScrollRestoration';

// Context 불러오기
import { BackgroundProvider } from './context/BackgroundContext';
import { SectionRefsProvider } from './context/SectionRefsContext';

// 공통 컴포넌트 불러오기
import BackgroundLayer from './components/commons/BackgroundLayer';
import Header from './components/commons/Header';
import LenisScrollRestoration from './components/commons/LenisScrollRestoration';

// 페이지 컴포넌트 불러오기
import LandingPage from './pages/LandingPage';
import ProductDetail from './pages/ProductDetail';

/**
 * App 컴포넌트
 *
 * 튜토리얼 시작용 기본 애플리케이션 구조
 *
 * 기능:
 * - Lenis 부드러운 스크롤 전역 활성화
 * - GSAP ScrollTrigger 연동
 * - 전역 배경색 관리 시스템
 * - Header 상단 고정 네비게이션
 * - SectionRefsContext 섹션 이동 기능
 * - 튜토리얼용 기본 환영 메시지
 */
function App() {
  const theme = lightTheme;

  // 브라우저 자동 스크롤 복원 비활성화
  useScrollRestoration();

  // Lenis 부드러운 스크롤 활성화 (GSAP ScrollTrigger 연동)
  useLenisScroll(true, {
    integrateGSAP: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <BackgroundProvider>
          <SectionRefsProvider>
            {/* 전역 배경 레이어 */}
            <BackgroundLayer />

            {/* Lenis 스크롤 위치 복원 */}
            <LenisScrollRestoration />

            {/* 상단 고정 헤더 */}
            <Header />

            {/* 라우터 설정 */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </SectionRefsProvider>
        </BackgroundProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
