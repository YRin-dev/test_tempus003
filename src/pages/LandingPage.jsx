import React from 'react';
import { useSectionRefs } from '../context/SectionRefsContext';
import TopSection from '../sections/TopSection';
import TechnologySection from '../sections/TechnologySection';
import TechnologyCardsSection from '../sections/TechnologyCardsSection';
import ProductsSection from '../sections/ProductsSection';
import ContactSection from '../sections/ContactSection';
import CareerSection from '../sections/CareerSection';

/**
 * LandingPage 컴포넌트
 *
 * 메인 랜딩 페이지로 모든 섹션을 포함합니다.
 * - TopSection: HeroSection, TransitionSection, MissionSection
 * - TechnologySection: 기술 소개 (StickySection + StorySection 스타일 텍스트)
 * - TechnologyCardsSection: 3개의 기술 카드
 * - ProductsSection: 제품 소개
 * - ContactSection: 연락처 정보
 *
 * Example usage:
 * <LandingPage />
 */
function LandingPage() {
  const {
    topSectionRef,
    technologySectionRef,
    technologyCardsSectionRef,
    productsSectionRef,
    careerSectionRef,
    contactSectionRef,
  } = useSectionRefs();

  return (
    <>
      <TopSection ref={topSectionRef} />
      <TechnologySection ref={technologySectionRef} />
      <TechnologyCardsSection ref={technologyCardsSectionRef} />
      <ProductsSection ref={productsSectionRef} />
      <CareerSection ref={careerSectionRef} />
      <ContactSection ref={contactSectionRef} />
    </>
  );
}

export default LandingPage;
