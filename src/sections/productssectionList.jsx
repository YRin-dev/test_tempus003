// import React, { forwardRef } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Container,
//   Button,
//   Chip,
//   Stack,
// } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import { productsContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// // 더미 특징 데이터 (실제 데이터 연동 시 productData.js에 포함시켜야 함)
// const dummyFeatures = [
//   ['정밀 측정 기술', '긴 수명과 높은 신뢰성', '다양한 환경 적용 가능'],
//   ['조기 화재 감지', '배터리 열폭주 예방', '실시간 모니터링 시스템'],
//   ['다중 공기질 측정', '스마트 환기 연동', '쾌적한 실내 환경 조성'],
//   ['신속한 누출 감지', '원격 경보 알림', '높은 안전 기준 충족'],
//   ['비접촉 온도 측정', '넓은 측정 범위', '빠른 응답 속도'],
// ];

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         backgroundColor: '#F8F9FA', // 배경색을 연한 회색으로 변경하여 모던함 강조
//         py: { xs: 12, md: 16 },
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* --- 섹션 헤더 --- */}
//         <Box
//           ref={headerRef}
//           sx={{
//             mb: { xs: 10, md: 14 },
//             textAlign: 'center',
//             opacity: isHeaderInView ? 1 : 0,
//             transform: isHeaderInView ? 'translateY(0)' : 'translateY(30px)',
//             transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '1rem',
//               fontWeight: 700,
//               color: '#1E40AF',
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//               mb: 2,
//               display: 'block',
//             }}
//           >
//             {productsContent.title}
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.5rem', md: '3.5rem' },
//               fontWeight: 900,
//               color: '#111827',
//               lineHeight: 1.2,
//               wordBreak: 'keep-all',
//             }}
//           >
//             혁신적인 센서 기술로
//             <br />더 안전하고 스마트한 세상을 만듭니다.
//           </Typography>
//         </Box>

//         {/* --- 제품 리스트 (지그재그 레이아웃) --- */}
//         <Stack spacing={{ xs: 12, md: 16 }}>
//           {products.map((product, index) => (
//             <ProductItem
//               key={product.id}
//               product={product}
//               index={index}
//               features={dummyFeatures[index % dummyFeatures.length]} // 더미 특징 할당
//             />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// });

// // 개별 제품 아이템 컴포넌트
// const ProductItem = ({ product, index, features }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0; // 홀수 번째 아이템은 좌우 반전

//   // 애니메이션 스타일 생성 함수
//   const getAnimStyle = (delay) => ({
//     opacity: isInView ? 1 : 0,
//     transform: isInView ? 'translateY(0)' : 'translateY(40px)',
//     transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
//   });

//   return (
//     <Grid
//       ref={itemRef}
//       container
//       spacing={{ xs: 6, md: 8 }}
//       alignItems="center"
//       direction={isReversed ? 'row-reverse' : 'row'} // 지그재그 레이아웃 핵심
//     >
//       {/* --- 이미지 영역 --- */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             position: 'relative',
//             borderRadius: 8, // 더 큰 둥근 모서리
//             overflow: 'hidden',
//             boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)', // 부드럽고 깊은 그림자
//             ...getAnimStyle(0.6), // 가장 늦게 등장
//             '&:hover img': {
//               transform: 'scale(1.05)', // 호버 시 이미지 살짝 확대
//             },
//           }}
//         >
//           <Box
//             component="img"
//             src={product.img}
//             alt={product.title}
//             sx={{
//               width: '100%',
//               height: 'auto',
//               maxHeight: { md: '500px' },
//               objectFit: 'cover',
//               display: 'block',
//               transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
//             }}
//           />
//         </Box>
//       </Grid>

//       {/* --- 텍스트 정보 영역 --- */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             pl: isReversed ? 0 : { md: 4 },
//             pr: isReversed ? { md: 4 } : 0,
//           }}
//         >
//           {/* 배지 (Badge) */}
//           <Chip
//             label={product.exp}
//             sx={{
//               mb: 3,
//               fontWeight: 700,
//               color: '#1E40AF',
//               backgroundColor: 'rgba(30, 64, 175, 0.1)',
//               borderRadius: 2,
//               px: 1,
//               ...getAnimStyle(0), // 가장 먼저 등장
//             }}
//           />

//           {/* 제목 */}
//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 800,
//               color: '#111827',
//               mb: 2,
//               lineHeight: 1.2,
//               ...getAnimStyle(0.1),
//             }}
//           >
//             {product.title}
//           </Typography>

//           {/* 설명 */}
//           <Typography
//             sx={{
//               fontSize: '1.05rem',
//               color: '#4B5563',
//               lineHeight: 1.7,
//               mb: 4,
//               wordBreak: 'keep-all',
//               ...getAnimStyle(0.2),
//             }}
//           >
//             {product.description}
//           </Typography>

//           {/* 특징 리스트 (더미 데이터 활용) */}
//           <Stack spacing={2} sx={{ mb: 5, ...getAnimStyle(0.3) }}>
//             {features.map((feature, idx) => (
//               <Stack
//                 key={idx}
//                 direction="row"
//                 alignItems="center"
//                 spacing={1.5}
//               >
//                 <CheckCircleOutlineIcon
//                   sx={{ color: '#3B82F6', fontSize: 20 }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: '0.95rem',
//                     fontWeight: 600,
//                     color: '#374151',
//                   }}
//                 >
//                   {feature}
//                 </Typography>
//               </Stack>
//             ))}
//           </Stack>

//           {/* 버튼 */}
//           <Box sx={{ ...getAnimStyle(0.4) }}>
//             <Button
//               variant="contained"
//               endIcon={<ArrowForwardIcon />}
//               sx={{
//                 backgroundColor: '#1E40AF',
//                 padding: '12px 28px',
//                 fontSize: '0.95rem',
//                 fontWeight: 700,
//                 borderRadius: 3,
//                 textTransform: 'none',
//                 boxShadow: '0 4px 12px rgba(30, 64, 175, 0.2)',
//                 '&:hover': {
//                   backgroundColor: '#15338F',
//                   boxShadow: '0 6px 16px rgba(30, 64, 175, 0.3)',
//                   transform: 'translateY(-2px)',
//                 },
//                 transition: 'all 0.3s ease',
//               }}
//             >
//               제품 상세보기
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;

//v02
// import React, { forwardRef } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Container,
//   Stack,
//   Divider,
// } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import { productsContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         backgroundColor: '#ffffff',
//         py: { xs: 15, md: 25 }, // 충분한 여백으로 고급스러움 강조
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* --- 섹션 헤더: 정갈한 정렬 --- */}
//         <Box
//           ref={headerRef}
//           sx={{
//             mb: { xs: 12, md: 20 },
//             opacity: isHeaderInView ? 1 : 0,
//             transform: isHeaderInView ? 'none' : 'translateY(30px)',
//             transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '0.75rem',
//               fontWeight: 800,
//               color: '#3B82F6',
//               letterSpacing: '0.4em',
//               mb: 3,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 2,
//             }}
//           >
//             <Box
//               component="span"
//               sx={{ width: 40, height: '1px', bgcolor: '#3B82F6' }}
//             />
//             OUR SOLUTIONS
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.4rem', md: '4rem' },
//               fontWeight: 900,
//               color: '#0F172A',
//               lineHeight: 1.1,
//               letterSpacing: '-0.04em',
//             }}
//           >
//             {productsContent.title || 'Precision Technology.'}
//           </Typography>
//         </Box>

//         {/* --- 제품 리스트 (고급스러운 지그재그) --- */}
//         <Stack spacing={{ xs: 15, md: 25 }}>
//           {products.map((product, index) => (
//             <ProductItem key={product.id} product={product} index={index} />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// });

// // 개별 제품 아이템
// const ProductItem = ({ product, index }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0;

//   return (
//     <Grid
//       ref={itemRef}
//       container
//       spacing={{ xs: 4, md: 10 }}
//       alignItems="center"
//       direction={isReversed ? 'row-reverse' : 'row'}
//     >
//       {/* 이미지 섹션: 플로팅 효과 */}
//       <Grid item xs={12} md={7}>
//         <Box
//           sx={{
//             position: 'relative',
//             opacity: isInView ? 1 : 0,
//             transform: isInView
//               ? 'none'
//               : isReversed
//               ? 'translateX(50px)'
//               : 'translateX(-50px)',
//             transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
//           }}
//         >
//           <Box
//             sx={{
//               position: 'relative',
//               borderRadius: '4px', // 너무 둥글지 않은 세련된 모서리
//               overflow: 'hidden',
//               backgroundColor: '#f8fafc',
//               '&::after': {
//                 // 이미지 보호막 효과
//                 content: '""',
//                 position: 'absolute',
//                 inset: 0,
//                 background:
//                   'linear-gradient(45deg, rgba(15,23,42,0.05) 0%, transparent 100%)',
//               },
//             }}
//           >
//             <Box
//               component="img"
//               src={product.img}
//               alt={product.title}
//               sx={{
//                 width: '100%',
//                 height: 'auto',
//                 display: 'block',
//                 transition: 'transform 1s ease',
//                 '&:hover': { transform: 'scale(1.03)' },
//               }}
//             />
//           </Box>
//           {/* 이미지 배경 장식 요소 */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: -20,
//               [isReversed ? 'right' : 'left']: -20,
//               width: '100px',
//               height: '100px',
//               borderLeft: !isReversed ? '1px solid #e2e8f0' : 'none',
//               borderTop: '1px solid #e2e8f0',
//               borderRight: isReversed ? '1px solid #e2e8f0' : 'none',
//               zIndex: -1,
//             }}
//           />
//         </Box>
//       </Grid>

//       {/* 텍스트 섹션: 에디토리얼 스타일 */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             pl: isReversed ? 0 : { md: 4 },
//             pr: isReversed ? { md: 4 } : 0,
//             opacity: isInView ? 1 : 0,
//             transition: 'all 1.2s ease 0.4s',
//           }}
//         >
//           {/* 제품 번호와 카테고리 */}
//           <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//             <Typography
//               sx={{
//                 fontSize: '1.2rem',
//                 fontWeight: 900,
//                 color: '#e2e8f0',
//                 fontFamily: 'serif',
//               }}
//             >
//               {String(index + 1).padStart(2, '0')}
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: '0.75rem',
//                 fontWeight: 700,
//                 color: '#3B82F6',
//                 letterSpacing: '0.1em',
//               }}
//             >
//               {product.exp}
//             </Typography>
//           </Stack>

//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: '1.8rem', md: '2.4rem' },
//               fontWeight: 800,
//               color: '#0F172A',
//               mb: 3,
//               letterSpacing: '-0.02em',
//               wordBreak: 'keep-all',
//             }}
//           >
//             {product.title}
//           </Typography>

//           <Divider
//             sx={{
//               width: 40,
//               height: 2,
//               bgcolor: '#0F172A',
//               mb: 4,
//               border: 'none',
//             }}
//           />

//           <Typography
//             sx={{
//               fontSize: '1.05rem',
//               color: '#64748b',
//               lineHeight: 1.8,
//               mb: 5,
//               wordBreak: 'keep-all',
//               fontWeight: 400,
//             }}
//           >
//             {product.description}
//           </Typography>

//           {/* 세련된 텍스트 버튼 */}
//           <Box
//             component="button"
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 2,
//               padding: 0,
//               background: 'none',
//               border: 'none',
//               cursor: 'pointer',
//               color: '#0F172A',
//               fontWeight: 700,
//               fontSize: '0.9rem',
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 gap: 3,
//                 color: '#3B82F6',
//               },
//             }}
//           >
//             VIEW CASE STUDY
//             <ArrowForwardIcon sx={{ fontSize: 18 }} />
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;

//v03
// import React, { forwardRef } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Container,
//   Stack,
//   Divider,
//   alpha,
// } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import { productsContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         position: 'relative',
//         // --- 현대적인 메쉬 그라데이션 배경 ---
//         backgroundColor: '#ffffff',
//         backgroundImage: `
//           radial-gradient(at 0% 0%, hsla(210,100%,98%,1) 0, transparent 50%),
//           radial-gradient(at 100% 0%, hsla(220,100%,97%,1) 0, transparent 50%),
//           radial-gradient(at 100% 100%, hsla(210,100%,98%,1) 0, transparent 50%),
//           radial-gradient(at 0% 100%, hsla(220,100%,97%,1) 0, transparent 50%)
//         `,
//         py: { xs: 15, md: 25 },
//         overflow: 'hidden',
//       }}
//     >
//       {/* 배경 장식: 세로 그리드 라인 (비어보임 방지) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           zIndex: 0,
//           opacity: 0.4,
//           pointerEvents: 'none',
//           backgroundImage:
//             'linear-gradient(to right, #f1f5f9 1px, transparent 1px)',
//           backgroundSize: '25% 100%',
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* --- 섹션 헤더 --- */}
//         <Box
//           ref={headerRef}
//           sx={{
//             mb: { xs: 15, md: 25 },
//             textAlign: 'center',
//             opacity: isHeaderInView ? 1 : 0,
//             transform: isHeaderInView ? 'none' : 'translateY(40px)',
//             transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '0.85rem',
//               fontWeight: 800,
//               color: '#3B82F6',
//               letterSpacing: '0.5em',
//               mb: 3,
//               textTransform: 'uppercase',
//             }}
//           >
//             Our Advanced Solutions
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.8rem', md: '4.5rem' },
//               fontWeight: 900,
//               color: '#0F172A',
//               lineHeight: 1,
//               letterSpacing: '-0.05em',
//               mb: 4,
//             }}
//           >
//             {productsContent.title || 'Precision.\nPerformance.'}
//           </Typography>
//           <Box
//             sx={{
//               width: 60,
//               height: 4,
//               bgcolor: '#0F172A',
//               mx: 'auto',
//               borderRadius: 2,
//             }}
//           />
//         </Box>

//         {/* --- 제품 리스트 --- */}
//         <Stack spacing={{ xs: 20, md: 35 }}>
//           {products.map((product, index) => (
//             <ProductItem key={product.id} product={product} index={index} />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// });

// const ProductItem = ({ product, index }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0;

//   return (
//     <Grid
//       ref={itemRef}
//       container
//       spacing={{ xs: 6, md: 12 }}
//       alignItems="center"
//       direction={isReversed ? 'row-reverse' : 'row'}
//       sx={{ position: 'relative' }}
//     >
//       {/* 배경 큰 숫자 장식 (공간감 확보) */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           top: '-10%',
//           [isReversed ? 'left' : 'right']: '0',
//           fontSize: { xs: '10rem', md: '20rem' },
//           fontWeight: 900,
//           color: alpha('#e2e8f0', 0.3),
//           zIndex: -1,
//           lineHeight: 1,
//           userSelect: 'none',
//         }}
//       >
//         {String(index + 1).padStart(2, '0')}
//       </Typography>

//       {/* 이미지 섹션: 입체적인 카드 스타일 */}
//       <Grid item xs={12} md={7}>
//         <Box
//           sx={{
//             position: 'relative',
//             perspective: '1500px', // 3D 느낌 추가
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'none' : `translateY(60px) rotateX(5deg)`,
//             transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
//           }}
//         >
//           <Box
//             sx={{
//               position: 'relative',
//               borderRadius: '12px',
//               overflow: 'hidden',
//               boxShadow: `0 30px 60px ${alpha('#0f172a', 0.12)}`,
//               backgroundColor: '#ffffff',
//               border: `1px solid ${alpha('#f1f5f9', 0.8)}`,
//               '&:hover img': { transform: 'scale(1.05)' },
//             }}
//           >
//             <Box
//               component="img"
//               src={product.img}
//               alt={product.title}
//               sx={{
//                 width: '100%',
//                 height: 'auto',
//                 display: 'block',
//                 transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
//               }}
//             />
//           </Box>
//         </Box>
//       </Grid>

//       {/* 텍스트 섹션 */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'none' : 'translateY(30px)',
//             transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
//           }}
//         >
//           <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//             <Box
//               sx={{
//                 px: 1.5,
//                 py: 0.5,
//                 bgcolor: alpha('#3B82F6', 0.1),
//                 borderRadius: 1,
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#3B82F6' }}
//               >
//                 {product.exp}
//               </Typography>
//             </Box>
//             <Divider sx={{ flexGrow: 1, opacity: 0.5 }} />
//           </Stack>

//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: '2.2rem', md: '3rem' },
//               fontWeight: 850,
//               color: '#0F172A',
//               mb: 3,
//               lineHeight: 1.1,
//               letterSpacing: '-0.03em',
//             }}
//           >
//             {product.title}
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: '1.1rem',
//               color: '#475569',
//               lineHeight: 1.7,
//               mb: 6,
//               wordBreak: 'keep-all',
//               fontWeight: 450,
//             }}
//           >
//             {product.description}
//           </Typography>

//           <Box
//             component="button"
//             sx={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 2,
//               px: 4,
//               py: 2,
//               backgroundColor: '#0F172A',
//               borderRadius: '50px',
//               border: 'none',
//               cursor: 'pointer',
//               color: '#ffffff',
//               fontWeight: 600,
//               fontSize: '0.9rem',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               '&:hover': {
//                 backgroundColor: '#3B82F6',
//                 transform: 'translateY(-4px)',
//                 boxShadow: `0 10px 20px ${alpha('#3B82F6', 0.3)}`,
//               },
//             }}
//           >
//             Discover More
//             <ArrowForwardIcon sx={{ fontSize: 18 }} />
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;

//v04
// import React, { forwardRef } from 'react';
// import { Box, Typography, Grid, Container, Stack, alpha } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import { productsContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         position: 'relative',
//         // --- 현대적인 메쉬 그라데이션 배경 ---
//         backgroundColor: '#ffffff',
//         backgroundImage: `
//           radial-gradient(at 0% 0%, hsla(210,100%,98%,1) 0, transparent 50%),
//           radial-gradient(at 100% 0%, hsla(220,100%,97%,1) 0, transparent 50%),
//           radial-gradient(at 100% 100%, hsla(210,100%,98%,1) 0, transparent 50%),
//           radial-gradient(at 0% 100%, hsla(220,100%,97%,1) 0, transparent 50%)
//         `,
//         py: { xs: 15, md: 25 },
//         overflow: 'hidden',
//       }}
//     >
//       {/* 배경 장식: 컬러 조명(Glow) 효과 - 비어있는 공간을 색으로 채움 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '10%',
//           left: '10%',
//           width: '40vw',
//           height: '40vw',
//           background:
//             'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
//           filter: 'blur(80px)',
//           zIndex: 0,
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '10%',
//           right: '0%',
//           width: '50vw',
//           height: '50vw',
//           background:
//             'radial-gradient(circle, rgba(30,64,175,0.1) 0%, transparent 70%)',
//           filter: 'blur(100px)',
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* --- 섹션 헤더: 고대비 타이포그래피 --- */}
//         <Box
//           ref={headerRef}
//           sx={{
//             mb: { xs: 15, md: 25 },
//             opacity: isHeaderInView ? 1 : 0,
//             transform: isHeaderInView ? 'none' : 'translateY(40px)',
//             transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '0.9rem',
//               fontWeight: 800,
//               color: '#60A5FA', // 밝은 블루로 포인트
//               letterSpacing: '0.6em',
//               mb: 2,
//               textTransform: 'uppercase',
//             }}
//           >
//             Core Technology
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '3rem', md: '5rem' },
//               fontWeight: 950,
//               lineHeight: 0.9,
//               letterSpacing: '-0.06em',
//               background: 'linear-gradient(to bottom, #ffffff, #94a3b8)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             {productsContent.title || 'Future\nInnovation.'}
//           </Typography>
//         </Box>

//         {/* --- 제품 리스트 --- */}
//         <Stack spacing={{ xs: 20, md: 40 }}>
//           {products.map((product, index) => (
//             <ProductItem key={product.id} product={product} index={index} />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// });

// const ProductItem = ({ product, index }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0;

//   return (
//     <Grid
//       ref={itemRef}
//       container
//       spacing={{ xs: 6, md: 15 }}
//       alignItems="center"
//       direction={isReversed ? 'row-reverse' : 'row'}
//     >
//       {/* 이미지 섹션: 카드 없이 이미지만 강조 (그림자와 광택 효과만 추가) */}
//       <Grid item xs={12} md={7}>
//         <Box
//           sx={{
//             position: 'relative',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'none' : `scale(0.9) translateY(40px)`,
//             transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           {/* 이미지 뒤 은은한 후광 효과 */}
//           <Box
//             sx={{
//               position: 'absolute',
//               inset: '-10%',
//               background: `radial-gradient(circle, ${alpha(
//                 '#3B82F6',
//                 0.1
//               )} 0%, transparent 70%)`,
//               zIndex: -1,
//             }}
//           />

//           <Box
//             component="img"
//             src={product.img}
//             alt={product.title}
//             sx={{
//               width: '100%',
//               height: 'auto',
//               display: 'block',
//               borderRadius: '8px', // 아주 살짝만 둥글게
//               filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.5))', // 카드가 아닌 이미지 자체에 그림자
//               transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
//               '&:hover': { transform: 'translateY(-10px) scale(1.02)' },
//             }}
//           />
//         </Box>
//       </Grid>

//       {/* 텍스트 섹션: 가시성을 높인 디자인 */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'none' : 'translateY(20px)',
//             transition: 'all 1.2s ease 0.3s',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '4rem',
//               fontWeight: 900,
//               color: alpha('#ffffff', 0.05), // 배경에 은은하게 깔리는 숫자
//               fontFamily: 'Orbitron, sans-serif',
//               lineHeight: 1,
//               mb: -4,
//               ml: -1,
//             }}
//           >
//             {String(index + 1).padStart(2, '0')}
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: '0.8rem',
//               fontWeight: 700,
//               color: '#60A5FA',
//               mb: 2,
//               letterSpacing: '0.2em',
//             }}
//           >
//             {product.exp}
//           </Typography>

//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: '2.4rem', md: '3.2rem' },
//               fontWeight: 900,
//               mb: 3,
//               letterSpacing: '-0.04em',
//               lineHeight: 1.1,
//             }}
//           >
//             {product.title}
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: '1.15rem',
//               color: '#94a3b8',
//               lineHeight: 1.8,
//               mb: 6,
//               wordBreak: 'keep-all',
//               fontWeight: 400,
//             }}
//           >
//             {product.description}
//           </Typography>

//           <Box
//             component="button"
//             sx={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 2,
//               px: 4,
//               py: 2,
//               backgroundColor: '#0F172A',
//               borderRadius: '50px',
//               border: 'none',
//               cursor: 'pointer',
//               color: '#ffffff',
//               fontWeight: 600,
//               fontSize: '0.9rem',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               '&:hover': {
//                 backgroundColor: '#3B82F6',
//                 transform: 'translateY(-4px)',
//                 boxShadow: `0 10px 20px ${alpha('#3B82F6', 0.3)}`,
//               },
//             }}
//           >
//             Discover More
//             <ArrowForwardIcon sx={{ fontSize: 18 }} />
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;
