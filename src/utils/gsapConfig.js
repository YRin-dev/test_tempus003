import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAP 플러그인 설정 유틸리티
 * 
 * 애플리케이션에서 사용할 GSAP 플러그인들을 등록합니다.
 * 앱 초기화 시 한 번만 호출하면 됩니다.
 * 
 * 현재 등록된 플러그인:
 * - ScrollTrigger: 스크롤 기반 애니메이션
 * 
 * Example usage:
 * import { initializeGSAP } from './utils/gsapConfig';
 * initializeGSAP();
 */
export function initializeGSAP() {
  // GSAP ScrollTrigger 플러그인 등록
  gsap.registerPlugin(ScrollTrigger);
  
  console.log('🎨 GSAP plugins initialized:', {
    ScrollTrigger: '✅ Registered'
  });
}

// 기본 GSAP 인스턴스 export (필요시 사용)
export { gsap, ScrollTrigger };

// 애플리케이션 시작 시 자동 초기화
initializeGSAP(); 