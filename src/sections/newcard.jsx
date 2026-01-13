// v2
// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// // 아이콘: 더 정밀한 느낌을 주는 아이콘들
// import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// import SensorsIcon from '@mui/icons-material/Sensors';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({ threshold: 0.05, triggerOnce: true });

//   const techData = [
//     {
//       id: '01',
//       title: 'Micro-thermopile 원천기술',
//       subtitle: 'CORE TECHNOLOGY',
//       desc: 'in-house MEMS FAB를 통한\n독자적 설계 및 공정 원천기술 확보',
//       icon: <PrecisionManufacturingIcon sx={{ fontSize: 35 }} />,
//       color: '#1E40AF',
//     },
//     {
//       id: '02',
//       title: '코: NDIR/TCD 가스 센서',
//       subtitle: 'ROBOT OLFACTION',
//       desc: '로봇의 후각 기능을 구현하는\n비접촉 방식의 초정밀 가스 센싱',
//       icon: <SensorsIcon sx={{ fontSize: 35 }} />,
//       color: '#2563EB',
//     },
//     {
//       id: '03',
//       title: '눈: SWIR/FIR 적외선 센서',
//       subtitle: 'ROBOT VISION',
//       desc: '가시광선 너머의 정보를 시각화하여\n환경을 분석하는 차세대 영상 센서',
//       icon: <VisibilityIcon sx={{ fontSize: 35 }} />,
//       color: '#3B82F6',
//     },
//   ];

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         backgroundColor: '#F1F4F9', // 배경색을 살짝 눌러 카드를 돋보이게 함
//         overflow: 'hidden',
//         // --- 하이테크 도트 패턴 배경 ---
//         backgroundImage: `radial-gradient(#d1d9e6 1.2px, transparent 0)`,
//         backgroundSize: '40px 40px',
//       }}
//     >
//       {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           top: '20%',
//           left: '-5%',
//           fontSize: '15vw',
//           fontWeight: 950,
//           color: 'rgba(30, 64, 175, 0.04)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//           letterSpacing: '-0.05em',
//         }}
//       >
//         TECH
//       </Typography>

//       {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
//       {/* <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '8px',
//           right: '-3%',
//           fontSize: '15vw',
//           fontWeight: 950,
//           color: 'rgba(30, 64, 175, 0.04)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//           letterSpacing: '-0.05em',
//         }}
//       >
//         NOLOGY
//       </Typography> */}

//       {/* 배경 장식: 우측 하단 기하학적 면 (최적화: 하드웨어 가속) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '45vw',
//           height: '45vw',
//           backgroundColor: '#E2E8F0',
//           borderRadius: '100px',
//           transform: 'rotate(-15deg)',
//           zIndex: 0,
//           opacity: 0.5,
//           pointerEvents: 'none',
//           willChange: 'transform',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* 왼쪽: 헤더 섹션 (밀도 있는 타이포그래피) */}
//           <Grid item xs={12} lg={4}>
//             <Box sx={{ mb: { xs: 4, lg: 0 }, pl: { md: 4 } }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Box
//                   sx={{
//                     width: 40,
//                     height: 2,
//                     backgroundColor: '#1E40AF',
//                     mr: 2,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: '1rem',
//                     fontWeight: 800,
//                     color: '#1E40AF',
//                     letterSpacing: '0.3em',
//                   }}
//                 >
//                   TECHNOLOGY
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: '2.2rem', md: '3.2rem' },
//                   fontWeight: 900,
//                   color: '#0F172A',
//                   lineHeight: 1.1,
//                   mb: 3,
//                   wordBreak: 'keep-all',
//                 }}
//               >
//                 독자적 기반의
//                 <br />
//                 <Box component="span" sx={{ color: '#1E40AF' }}>
//                   MEMS 센서 솔루션
//                 </Box>
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: '1.1rem',
//                   color: '#475569',
//                   lineHeight: 1.8,
//                   wordBreak: 'keep-all',
//                   maxWidth: '380px',
//                 }}
//               >
//                 자체 개발 원천기술을 바탕으로 고객 요구에 최적화된 맞춤형
//                 마이크로 센서 기술을 설계하고 공급합니다.
//               </Typography>
//             </Box>
//           </Grid>

//           {/* 오른쪽: 기술 카드 (더 선명하고 임팩트 있는 디자인) */}
//           <Grid item xs={12} lg={8}>
//             <Grid container spacing={3}>
//               {techData.map((tech, index) => (
//                 <Grid item xs={12} md={4} key={tech.id}>
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       backgroundColor: '#FFFFFF',
//                       borderRadius: '24px',
//                       padding: '50px 35px',
//                       height: '100%',
//                       minHeight: '420px',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       border: '1px solid rgba(30, 64, 175, 0.1)',
//                       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
//                       transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//                       opacity: isInView ? 1 : 0,
//                       transform: isInView
//                         ? 'translateY(0)'
//                         : 'translateY(60px)',
//                       transitionDelay: `${0.4 + index * 0.15}s`,
//                       overflow: 'hidden',
//                       '&:hover': {
//                         transform: 'translateY(-20px)',
//                         // 진해진 그림자 색상 (브랜드 컬러 틴트 포함)
//                         boxShadow: `0 40px 70px rgba(30, 64, 175, 0.25)`,
//                         '& .accent-bar': { height: '8px' },
//                         '& .hover-arrow': {
//                           transform: 'translateX(5px)',
//                           opacity: 1,
//                         },
//                       },
//                     }}
//                   >
//                     {/* 아이콘: 더 진한 색감과 배경 */}
//                     <Box
//                       sx={{
//                         width: '70px',
//                         height: '70px',
//                         borderRadius: '18px',
//                         backgroundColor: `${tech.color}10`, // 10% 투명도
//                         color: tech.color,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 4,
//                         border: `1px solid ${tech.color}20`,
//                       }}
//                     >
//                       {tech.icon}
//                     </Box>

//                     <Typography
//                       sx={{
//                         fontSize: '0.8rem',
//                         fontWeight: 800,
//                         color: tech.color,
//                         mb: 1.5,
//                         letterSpacing: '0.1em',
//                       }}
//                     >
//                       {tech.subtitle}
//                     </Typography>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 850,
//                         color: '#0F172A',
//                         mb: 2.5,
//                         fontSize: '1.4rem',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {tech.title}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontSize: '0.95rem',
//                         color: '#64748B',
//                         lineHeight: 1.7,
//                         whiteSpace: 'pre-line',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {tech.desc}
//                     </Typography>

//                     {/* 하단 버튼: 현대적인 링크 스타일 */}
//                     <Box
//                       sx={{
//                         mt: 4,
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                         color: '#0F172A',
//                         fontWeight: 700,
//                         cursor: 'pointer',
//                         '&:hover': { color: tech.color },
//                       }}
//                     >
//                       <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
//                         READ DETAILS
//                       </Typography>
//                       <ArrowForwardIcon
//                         className="hover-arrow"
//                         sx={{
//                           fontSize: 18,
//                           opacity: 0.7,
//                           transition: 'all 0.3s ease',
//                         }}
//                       />
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default TechnologySection;

//회색느낌나는 버전

// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// // 아이콘: 더 정밀한 느낌을 주는 아이콘들
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'; // 원천기술
// import AirIcon from '@mui/icons-material/Air'; // 가스센서
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; // 영상센서
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({ threshold: 0.1, triggerOnce: false });

//   const techData = [
//     {
//       id: '01',
//       title: 'Micro-thermopile 원천기술',
//       subtitle: 'CORE TECHNOLOGY',
//       desc: 'in-house MEMS FAB를 통한\n독자적 설계 및 공정 원천기술 확보',
//       icon: <SettingsInputComponentIcon sx={{ fontSize: 32 }} />,
//       color: '#1E40AF',
//     },
//     {
//       id: '02',
//       title: '코: NDIR/TCD 가스 센서',
//       subtitle: 'ROBOT OLFACTION',
//       desc: '로봇의 후각 기능을 구현하는\n비접촉 방식의 초정밀 가스 센싱',
//       icon: <AirIcon sx={{ fontSize: 35 }} />,
//       color: '#2563EB',
//     },
//     {
//       id: '03',
//       title: '눈: SWIR/FIR 적외선 센서',
//       subtitle: 'ROBOT VISION',
//       desc: '가시광선 너머의 정보를 시각화하여\n환경을 분석하는 차세대 영상 센서',
//       icon: <RemoveRedEyeIcon sx={{ fontSize: 35 }} />,
//       color: '#3B82F6',
//     },
//   ];

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         minHeight: '100dvh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         backgroundColor: '#F1F4F9', // 배경색을 살짝 눌러 카드를 돋보이게 함
//         overflow: 'hidden',
//         // --- 하이테크 도트 패턴 배경 ---
//         // backgroundImage: `radial-gradient(#d1d9e6 1.2px, transparent 0)`,
//         backgroundSize: '40px 40px',
//       }}
//     >
//       {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           top: '20%',
//           left: '-5%',
//           fontSize: '15vw',
//           fontWeight: 950,
//           color: 'rgba(30, 64, 175, 0.04)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//           letterSpacing: '-0.05em',
//         }}
//       >
//         TECH
//       </Typography>

//       {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
//       {/* <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '8px',
//           right: '-3%',
//           fontSize: '15vw',
//           fontWeight: 950,
//           color: 'rgba(30, 64, 175, 0.04)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//           letterSpacing: '-0.05em',
//         }}
//       >
//         NOLOGY
//       </Typography> */}

//       {/* 배경 장식: 우측 하단 기하학적 면 (최적화: 하드웨어 가속) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '45vw',
//           height: '45vw',
//           backgroundColor: '#E2E8F0',
//           borderRadius: '100px',
//           transform: 'rotate(-15deg)',
//           zIndex: 0,
//           opacity: 0.5,
//           pointerEvents: 'none',
//           willChange: 'transform',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* 왼쪽: 헤더 섹션 (밀도 있는 타이포그래피) */}
//           <Grid item xs={12} lg={4}>
//             <Box sx={{ mb: { xs: 4, lg: 0 }, pl: { md: 4 } }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Box
//                   sx={{
//                     width: 40,
//                     height: 2,
//                     backgroundColor: '#1E40AF',
//                     mr: 2,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: '1rem',
//                     fontWeight: 800,
//                     color: '#1E40AF',
//                     letterSpacing: '0.3em',
//                   }}
//                 >
//                   TECHNOLOGY
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: '2.2rem', md: '3.2rem' },
//                   fontWeight: 900,
//                   color: '#0F172A',
//                   lineHeight: 1.1,
//                   mb: 3,
//                   wordBreak: 'keep-all',
//                 }}
//               >
//                 독자적 기반의
//                 <br />
//                 <Box component="span" sx={{ color: '#1E40AF' }}>
//                   MEMS 센서 솔루션
//                 </Box>
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: '1.1rem',
//                   color: '#475569',
//                   lineHeight: 1.8,
//                   wordBreak: 'keep-all',
//                   maxWidth: '380px',
//                 }}
//               >
//                 자체 개발 원천기술을 바탕으로 고객 요구에 최적화된 맞춤형
//                 마이크로 센서 기술을 설계하고 공급합니다.
//               </Typography>
//             </Box>
//           </Grid>

//           {/* 오른쪽: 기술 카드 (더 선명하고 임팩트 있는 디자인) */}
//           <Grid item xs={12} lg={8}>
//             <Grid container spacing={3}>
//               {techData.map((tech, index) => (
//                 <Grid item xs={12} md={4} key={tech.id}>
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       backgroundColor: '#FFFFFF',
//                       borderRadius: '24px',
//                       padding: '50px 35px',
//                       height: '100%',
//                       minHeight: '420px',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       border: '1px solid rgba(30, 64, 175, 0.1)',
//                       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
//                       transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//                       opacity: isInView ? 1 : 0,
//                       transform: isInView
//                         ? 'translateY(0)'
//                         : 'translateY(60px)',
//                       transitionDelay: `${0.4 + index * 0.15}s`,
//                       overflow: 'hidden',
//                       '&:hover': {
//                         transform: 'translateY(-20px)',
//                         // 진해진 그림자 색상 (브랜드 컬러 틴트 포함)
//                         boxShadow: `0 40px 70px rgba(30, 64, 175, 0.25)`,
//                         '& .accent-bar': { height: '8px' },
//                         '& .hover-arrow': {
//                           transform: 'translateX(5px)',
//                           opacity: 1,
//                         },
//                       },
//                     }}
//                   >
//                     {/* 아이콘: 더 진한 색감과 배경 */}
//                     <Box
//                       sx={{
//                         width: '70px',
//                         height: '70px',
//                         borderRadius: '18px',
//                         backgroundColor: `${tech.color}10`, // 10% 투명도
//                         color: tech.color,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 4,
//                       }}
//                     >
//                       {tech.icon}
//                     </Box>

//                     <Typography
//                       sx={{
//                         fontSize: '0.8rem',
//                         fontWeight: 800,
//                         color: tech.color,
//                         mb: 1.5,
//                         letterSpacing: '0.1em',
//                       }}
//                     >
//                       {tech.subtitle}
//                     </Typography>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 850,
//                         color: '#0F172A',
//                         mb: 2.5,
//                         fontSize: '1.4rem',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {tech.title}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontSize: '0.95rem',
//                         color: '#64748B',
//                         lineHeight: 1.7,
//                         whiteSpace: 'pre-line',
//                         flexGrow: 1,
//                       }}
//                     >
//                       {tech.desc}
//                     </Typography>

//                     {/* 하단 버튼: 현대적인 링크 스타일 */}
//                     <Box
//                       sx={{
//                         mt: 4,
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                         color: '#0F172A',
//                         fontWeight: 700,
//                         cursor: 'pointer',
//                         '&:hover': { color: tech.color },
//                       }}
//                     >
//                       <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
//                         READ DETAILS
//                       </Typography>
//                       <ArrowForwardIcon
//                         className="hover-arrow"
//                         sx={{
//                           fontSize: 18,
//                           opacity: 0.7,
//                           transition: 'all 0.3s ease',
//                         }}
//                       />
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default TechnologySection;
///
//화분
// import React, { forwardRef } from 'react';
// import { Box, Typography, Button, Container, Grid } from '@mui/material';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import {
//   contactContent,
//   qualityManagementCareerContent,
//   EngineeringCareerContent,
// } from '../data/contentData';

// const CareerSection = forwardRef((props, ref) => {
//   const [viewRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const careerPosts = [
//     qualityManagementCareerContent,
//     EngineeringCareerContent,
//   ];

//   const getAnimatedStyle = (delay) => ({
//     opacity: isInView ? 1 : 0,
//     transform: isInView ? 'translateY(0)' : 'translateY(40px)',
//     transition: `all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
//   });

//   return (
//     <FullPageSection ref={ref}>
//       <Box
//         ref={viewRef}
//         sx={{
//           width: '100%',
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           position: 'relative',
//           backgroundColor: '#F8FAFC', //
//           overflow: 'hidden',
//           py: { xs: 10, md: 0 },
//         }}
//       >
//         {/* --- 배경 장식 도형 top --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '550px',
//             width: '600px',
//             height: '300px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '20px 250px 20px 250px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '150px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '250px 20px 250px 20px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />

//         {/* --- 배경 장식 도형 --- 아래 회분 */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '50%',
//             left: '200px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#FAF6E8',
//             borderRadius: '20px 20px 20px 150px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />

//         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//           {/* 1. 상단 타이틀 섹션 (중앙 정렬 유지) */}
//           <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2.5rem', md: '4rem' },
//                 fontWeight: 900,
//                 color: '#0F172A',
//                 lineHeight: 1.1,
//                 letterSpacing: '-0.03em',
//                 ...getAnimatedStyle(0.3),
//               }}
//             >
//               {contactContent.title[0]} <br />
//               <Box component="span" sx={{ color: '#3B82F6' }}>
//                 {contactContent.title[1]}
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: { xs: '1.1rem', md: '1.25rem' },
//                 color: '#64748B',
//                 lineHeight: 1.8,
//                 maxWidth: '700px',
//                 mx: 'auto',
//                 wordBreak: 'keep-all',
//                 marginTop: '20px',
//                 ...getAnimatedStyle(0.5),
//               }}
//             >
//               {contactContent.subtitle[0]} {contactContent.subtitle[1]}
//             </Typography>
//           </Box>

//           {/* 2. 하단 콘텐츠 섹션 (가로 한 줄 배치: 설명 + 카드1 + 카드2) - justifyContent="center" 추가 */}
//           <Grid
//             container
//             spacing={3}
//             alignItems="stretch"
//             justifyContent="center"
//           >
//             {/* 왼쪽: 설명 문구 및 버튼 */}
//             <Grid item xs={12} lg={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   px: { lg: 2 }, // 양옆 균형을 위해 padding 조정
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: '1.2rem',
//                     color: '#475569',
//                     lineHeight: 1.7,
//                     mb: 4,
//                     wordBreak: 'keep-all',
//                     fontWeight: 500,
//                     ...getAnimatedStyle(0.5),
//                   }}
//                 >
//                   혁신적인 기술로 세상을 연결하는 여정에 <br />
//                   여러분의 열정을 더해주세요.
//                 </Typography>

//                 <Box sx={getAnimatedStyle(0.6)}>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       borderColor: '#0F172A',
//                       color: '#0F172A',
//                       padding: '14px 36px',
//                       marginLeft: '50px',
//                       borderRadius: '100px',
//                       fontSize: '0.95rem',
//                       fontWeight: 700,
//                       borderWidth: '2px',
//                       transition: 'all 0.3s',
//                       '&:hover': {
//                         borderWidth: '2px',
//                         backgroundColor: '#0F172A',
//                         color: '#FFF',
//                       },
//                     }}
//                   >
//                     기업 문화 알아보기
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* 오른쪽: 카드들 (한 줄에 나란히) */}
//             {careerPosts.map((post, index) => (
//               <Grid item xs={12} md={6} lg={4} key={index}>
//                 <Box
//                   sx={{
//                     height: '280px',

//                     backgroundColor: 'rgba(255, 255, 255, 0.75)',
//                     backdropFilter: 'blur(12px)',
//                     borderRadius: '32px',
//                     padding: { xs: 4, md: 5 },
//                     border: '1px solid rgba(255, 255, 255, 0.5)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                     cursor: 'pointer',
//                     ...getAnimatedStyle(0.7 + index * 0.1),
//                     '&:hover': {
//                       backgroundColor: '#FFFFFF',
//                       transform: 'translateY(-15px)',
//                       boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
//                       '& .arrow-icon': {
//                         transform: 'translateX(5px)',
//                         color: '#3B82F6',
//                       },
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       mb: 3,
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         sx={{
//                           fontSize: '0.8rem',
//                           color: '#3B82F6',
//                           fontWeight: 800,
//                           mb: 1,
//                           textTransform: 'uppercase',
//                         }}
//                       >
//                         {post.subtitle[0]}
//                       </Typography>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 850,
//                           color: '#0F172A',
//                           fontSize: '1.5rem',
//                           lineHeight: 1.2,
//                         }}
//                       >
//                         {post.title[0]}
//                       </Typography>
//                     </Box>
//                     <ArrowForwardIosIcon
//                       className="arrow-icon"
//                       sx={{
//                         fontSize: 18,
//                         color: '#CBD5E1',
//                         mt: 1,
//                         transition: '0.3s',
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ flexGrow: 1, mb: 4 }}>
//                     {post.description.map((desc, i) => (
//                       <Typography
//                         key={i}
//                         sx={{
//                           color: '#475569',
//                           lineHeight: 1.6,
//                           fontSize: '0.95rem',
//                           mb: 0.5,
//                         }}
//                       >
//                         • {desc}
//                       </Typography>
//                     ))}
//                   </Box>
//                   {/* <Box
//                     sx={{
//                       mt: 3,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                       color: '#0F172A',
//                       fontWeight: 800,
//                       cursor: 'pointer',
//                       '&:hover': '#3B82F6',
//                     }}
//                   >
//                     <Typography sx={{ fontSize: '0.9rem' }}>
//                       READ DETAILS
//                     </Typography>
//                     <ArrowForwardIcon
//                       className="hover-arrow"
//                       sx={{ fontSize: 18, opacity: 0.7, transition: '0.3s' }}
//                     />
//                   </Box> */}
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

//         {/* 배경 워터마크 */}
//         {/* <Typography
//           sx={{
//             position: 'absolute',
//             bottom: '2%',
//             right: '2%',
//             fontSize: '12vw',
//             fontWeight: 900,
//             color: 'rgba(15, 23, 42, 0.02)',
//             zIndex: 0,
//             userSelect: 'none',
//           }}
//         >
//           JOIN US
//         </Typography> */}
//       </Box>
//     </FullPageSection>
//   );
// });

// CareerSection.displayName = 'CareerSection';

// export default CareerSection;
