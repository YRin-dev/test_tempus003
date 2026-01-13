import { useEffect, useRef } from 'react';
import { useBackground } from '../context/BackgroundContext';

/**
 * 섹션별 배경색을 자동으로 등록하는 훅
 * 섹션이 뷰포트에 보일 때 배경색이 자동으로 전환됩니다
 *
 * @param {string} sectionId - 섹션 고유 ID [Required]
 * @param {string} backgroundColor - 배경색 (hex 코드) [Required]
 *
 * Example usage:
 * function MySection() {
 *   const sectionRef = useSectionBackground('hero-section', '#FAFAF7');
 *
 *   return (
 *     <Box ref={sectionRef} sx={{ minHeight: '100vh' }}>
 *       섹션 내용
 *     </Box>
 *   );
 * }
 */
function useSectionBackground(sectionId, backgroundColor) {
  const { registerSection, unregisterSection } = useBackground();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && sectionId && backgroundColor) {
      registerSection(sectionId, backgroundColor, ref.current);

      return () => {
        unregisterSection(sectionId);
      };
    }
  }, [sectionId, backgroundColor, registerSection, unregisterSection]);

  return ref;
}

export default useSectionBackground;
