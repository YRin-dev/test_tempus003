// import React from 'react';
// import { Box, Typography, Stack, Container, Grid } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// import fabImg from '../assets/photo/fabImg.png'; // 기존 FAB 이미지 사용
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         position: 'relative',
//         backgroundColor: '#000',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//       }}
//     >
//       {/* --- 1. 배경 이미지 (Ken Burns Effect: 은은하게 확대되는 효과) --- */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           zIndex: 0,
//           '&::after': {
//             // 이미지 위에 어두운 그라데이션 오버레이 (가독성 확보)
//             content: '""',
//             position: 'absolute',
//             inset: 0,
//             background:
//               'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
//           },
//         }}
//       >
//         <Box
//           component="img"
//           src={fabImg}
//           alt="Technical Fab"
//           sx={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transform: isInView ? 'scale(1.1)' : 'scale(1)',
//             transition: 'transform 10s ease-out', // 10초 동안 천천히 확대
//           }}
//         />
//       </Box>

//       {/* --- 2. 배경 대형 텍스트 (정체성 부여) --- */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '-12%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           fontSize: '14vw',
//           fontWeight: 900,
//           color: 'rgba(255, 255, 255, 0.05)',
//           whiteSpace: 'nowrap',
//           zIndex: 1,
//           letterSpacing: '-0.02em',
//           pointerEvents: 'none',
//         }}
//       >
//         PHYSICAL AI
//       </Typography>

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={8}>
//             {/* --- 3. 메인 슬로건 섹션 --- */}
//             <Box sx={{ mb: 10 }}>
//               <Typography
//                 sx={{
//                   color: '#3B82F6',
//                   fontWeight: 800,
//                   letterSpacing: '0.5em',
//                   fontSize: '0.9rem',
//                   mb: 3,
//                   opacity: isInView ? 1 : 0,
//                   transform: isInView ? 'none' : 'translateY(20px)',
//                   transition: 'all 1s ease 0.5s',
//                 }}
//               >
//                 FUTURE SENSING SOLUTION
//               </Typography>

//               <Typography
//                 variant="h1"
//                 sx={{
//                   color: '#FFFFFF',
//                   fontSize: { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' },
//                   fontWeight: 900,
//                   lineHeight: 1.1,
//                   letterSpacing: '-0.03em',
//                   mb: 4,
//                   opacity: isInView ? 1 : 0,
//                   transform: isInView ? 'none' : 'translateY(40px)',
//                   transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.7s',
//                 }}
//               >
//                 당신의 시스템에 적합한
//                 <br />
//                 <Box component="span" sx={{ color: '#3B82F6' }}>
//                   코와 눈
//                 </Box>
//                 을 제공합니다.
//               </Typography>

//               <Typography
//                 sx={{
//                   color: 'rgba(255,255,255,0.6)',
//                   fontSize: '1.2rem',
//                   lineHeight: 1.8,
//                   maxWidth: '600px',
//                   wordBreak: 'keep-all',
//                   opacity: isInView ? 1 : 0,
//                   transition: 'all 1s ease 1.2s',
//                 }}
//               >
//                 자체 MEMS Fab 기반 차별화된 적외선센서 기술로 Physical AI의
//                 새로운 가능성을 열어갑니다
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* 우측 하단 장식: 스크롤 유도 레이블 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           right: '5%',
//           bottom: '5%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 2,
//           opacity: isInView ? 0.6 : 0,
//           transition: '1s ease 2s',
//         }}
//       >
//         <Box sx={{ width: '1px', height: '80px', backgroundColor: '#FFF' }} />
//         <Typography
//           sx={{
//             color: '#FFF',
//             fontSize: '0.7rem',
//             fontWeight: 700,
//             writingMode: 'vertical-rl',
//             letterSpacing: '0.2em',
//           }}
//         >
//           SCROLL TO EXPLORE
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default TechnologySection;
