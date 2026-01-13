// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// // 아이콘: 기술적 느낌을 주는 아이콘들
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'; // 원천기술
// import AirIcon from '@mui/icons-material/Air'; // 가스센서
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; // 영상센서
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CompanyLogo from '../assets/photo/eyelogosgv.svg';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const techData = [
//     {
//       id: '01',
//       title: 'Micro-thermopile 원천기술',
//       subtitle: 'Original Tech',
//       desc: 'in-house MEMS FAB를 통한\n개발 및 생산 체계 구축',
//       icon: <SettingsInputComponentIcon sx={{ fontSize: 32 }} />,
//       color: '#1E40AF',
//     },
//     {
//       id: '02',
//       title: '코: NDIR/TCD 가스 센서',
//       subtitle: 'Robot Olfaction',
//       desc: '로봇의 후각 기능을 구현하는\n비접촉 정밀 가스센서',
//       icon: <AirIcon sx={{ fontSize: 32 }} />,
//       color: '#3B82F6',
//     },
//     {
//       id: '03',
//       title: '눈: SWIR/FIR 적외선영상센서',
//       subtitle: 'Robot Vision',
//       desc: '로봇의 시각 기능을 구현하는\n수분 및 열 영상센서',
//       icon: <RemoveRedEyeIcon sx={{ fontSize: 32 }} />,
//       color: '#60A5FA',
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
//         backgroundColor: '#F1F4F9',
//         overflow: 'hidden',
//       }}
//     >
//       {/* --- 배경 로고 워터마크 --- */}
//       <Box
//         component="img"
//         src={CompanyLogo}
//         alt="Company Watermark"
//         sx={{
//           position: 'absolute',
//           top: '5%',
//           left: '-5%',
//           width: '50vw', // 화면 너비의 절반 크기로 크게 배치
//           maxWidth: '800px',
//           opacity: 0.04, // 아주 은은하게 설정
//           filter: 'blur(0.2px)',
//           zIndex: 0,
//           userSelect: 'none',
//           pointerEvents: 'none', // 클릭 방지
//           transform: isInView
//             ? 'rotate(-10deg) scale(1)'
//             : 'rotate(-20deg) scale(1.1)',
//           transition: 'all 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//         }}
//       />

//       {/* --- 배경 정체성 요소 (Watermark) --- */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '0%',
//           left: '5%',
//           fontSize: { md: '12vw', lg: '10vw' },
//           fontWeight: 900,
//           color: 'rgba(30, 64, 175, 0.03)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//         }}
//       >
//         TECHNOLOGY
//       </Typography>

//       {/* --- 배경 디자인 (챠라락 반원) --- */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '50%',
//           height: '70%',
//           backgroundColor: '#C0D5F0',
//           borderRadius: '500px 500px 0 0',
//           opacity: isInView ? 0.4 : 0,
//           transform: isInView ? 'translateY(0)' : 'translateY(100px)',
//           transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//           zIndex: 0,
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
//                 Micro-Thermopile
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
//                   paddingTop: '10px',
//                 }}
//               >
//                 마이크로 전자기계시스템(MEMS) 기술을 활용한
//                 <br />
//                 초소형, 고성능 멀티채널센서를 제공합니다.
//                 <br />
//                 자체 개발 원천기술에 기반하여 고객 요구에 맞춤형으로 대응합니다.
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

//v04
// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';

// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
// import AirIcon from '@mui/icons-material/Air';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CompanyLogo from '../assets/photo/eyelogosgv.svg';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const techData = [
//     {
//       id: '01',
//       title: 'Micro-thermopile 원천기술',
//       subtitle: 'Original Tech',
//       desc: 'in-house MEMS FAB를 통한\n개발 및 생산 체계 구축',
//       icon: <SettingsInputComponentIcon sx={{ fontSize: 30 }} />,
//       color: '#1E40AF',
//     },
//     {
//       id: '02',
//       title: 'NDIR/TCD 가스 센서',
//       subtitle: 'Robot Olfaction',
//       desc: '로봇의 후각 기능을 구현하는\n비접촉 정밀 가스센서',
//       icon: <AirIcon sx={{ fontSize: 30 }} />,
//       color: '#3B82F6',
//     },
//     {
//       id: '03',
//       title: 'SWIR/FIR 적외선영상센서',
//       subtitle: 'Robot Vision',
//       desc: '로봇의 시각 기능을 구현하는\n수분 및 열 영상센서',
//       icon: <RemoveRedEyeIcon sx={{ fontSize: 30 }} />,
//       color: '#60A5FA',
//     },
//   ];

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%', // ✅ 100vw → 100% (가로 오버플로우/줄바꿈 이슈 방지)
//         minHeight: '95dvh', // ✅ 모바일 주소창 포함 안정적인 높이
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         backgroundColor: '#C4DBF2', // 연한색 #F8FAFC
//         overflow: 'hidden',
//       }}
//     >
//       {/* --- 배경 로고 워터마크 --- */}
//       <Box
//         component="img"
//         src={CompanyLogo}
//         alt="Company Watermark"
//         sx={{
//           position: 'absolute',
//           top: '5%',
//           left: '-5%',
//           width: '50vw',
//           maxWidth: '800px',

//           opacity: 0.04,
//           zIndex: 1,
//           userSelect: 'none',
//           pointerEvents: 'none',
//           transform: isInView
//             ? 'rotate(-10deg) scale(1)'
//             : 'rotate(-20deg) scale(1.1)',
//           transition: 'all 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//         }}
//       />

//       {/* 2. 도형 (두 번째) 회색 */}
//       {/* <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 0,
//           top: '0',
//           right: '0',
//           width: '97%',
//           height: '680px',
//           backgroundColor: '#E8F1FA', //F1F4F9
//           borderRadius: '0 0 0 250px',
//           opacity: isInView ? 1 : 0,
//           transform: isInView ? 'translateX(0)' : 'translateX(100px)',
//           transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//           transitionDelay: '0.3s', // 두 번째
//         }}
//       /> */}

//       <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '-2%',
//           left: '3%',
//           fontSize: { md: '12vw', lg: '11vw' },
//           fontWeight: 900,
//           color: 'rgba(30, 64, 175, 0.05)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//         }}
//       >
//         TECHNOLOGY
//       </Typography>

//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '50%',
//           height: '70%',
//           backgroundColor: '#C0D5F0',
//           borderRadius: '500px 500px 0 0',
//           opacity: isInView ? 0.4 : 0,
//           transform: isInView ? 'translateY(0)' : 'translateY(100px)',
//           transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//           zIndex: 0,
//         }}
//       />

//       <Container
//         maxWidth="xl"
//         sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 3 } }}
//       >
//         <Grid
//           container
//           spacing={{ xs: 4, lg: 5 }}
//           alignItems="center"
//           wrap="nowrap"
//         >
//           {/* ✅ 왼쪽 텍스트를 조금 줄여서 오른쪽 카드 폭 확보 */}
//           <Grid item xs={12} lg={3}>
//             <Box sx={{ mb: { xs: 4, lg: 0 }, pl: { md: 2 } }}>
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
//                   fontSize: { xs: '2.2rem', md: '3.0rem' },
//                   fontWeight: 900,
//                   color: '#0F172A',
//                   lineHeight: 1.1,
//                   mb: 2.5,
//                   wordBreak: 'keep-all',
//                 }}
//               >
//                 Micro-Thermopile
//                 <br />
//                 <Box component="span" sx={{ color: '#1E40AF' }}>
//                   MEMS 센서 솔루션
//                 </Box>
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: '1.15rem',
//                   color: '#334155',
//                   lineHeight: 1.75,
//                   wordBreak: 'keep-all',
//                   maxWidth: '360px',
//                   marginBottom: '80px',
//                   marginLeft: '10px',
//                   pt: 1,
//                 }}
//               >
//                 마이크로 전자기계시스템(MEMS) 기술을 활용한
//                 <br />
//                 초소형, 고성능 멀티채널센서를 제공합니다.
//                 <br />
//                 자체 개발 원천기술에 기반하여 고객 요구에 맞춤형으로 대응합니다.
//               </Typography>
//             </Box>
//           </Grid>

//           {/* ✅ 오른쪽 카드: flex row로 3개 동일 폭/동일 높이 고정 */}
//           <Grid item xs={12} lg={9}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 gap: { xs: 2, md: 3 },
//                 flexDirection: { xs: 'column', md: 'row' }, // 모바일은 세로, md+는 가로
//                 alignItems: 'stretch',
//               }}
//             >
//               {techData.map((tech, index) => (
//                 <Box
//                   key={tech.id}
//                   sx={{
//                     // ✅ 3개 카드 동일 폭을 강제
//                     flex: 1,
//                     minWidth: '310px', // ✅ 텍스트 때문에 카드가 밀려나 wrap되는 것 방지

//                     position: 'relative',
//                     backgroundColor: '#FFFFFF',
//                     borderRadius: '22px',

//                     // ✅ 사이즈/밀도 조정 (너무 커서 줄바꿈 되는 문제 해결)
//                     px: { xs: 3, md: 3.5, lg: 3.5 },
//                     py: { xs: 3.5, md: 4, lg: 4 },
//                     minHeight: { xs: 'auto', md: 360, lg: 400 }, // ✅ 3개 동일 높이

//                     display: 'flex',
//                     flexDirection: 'column',
//                     //border: '1px solid rgba(30, 64, 175, 0.12)',
//                     boxShadow: '0 10px 28px rgba(0, 0, 0, 0.05)',
//                     overflow: 'hidden',

//                     // ✅ 등장 애니메이션
//                     opacity: isInView ? 1 : 0,
//                     transform: isInView
//                       ? 'translate3d(0,0,0)'
//                       : 'translate3d(0,22px,0)',
//                     transitionProperty: 'opacity, transform, box-shadow',
//                     transitionDuration: '650ms, 900ms, 250ms',
//                     transitionTimingFunction:
//                       'ease, cubic-bezier(0.2, 0.8, 0.2, 1), ease',
//                     transitionDelay: `${0.25 + index * 0.12}s`,
//                     willChange: 'opacity, transform',

//                     '&:hover': {
//                       transform: 'translate3d(0,-12px,0)',
//                       boxShadow: `0 40px 70px rgba(30, 64, 175, 0.22)`,
//                       '& .hover-arrow': {
//                         transform: 'translateX(5px)',
//                         opacity: 1,
//                       },
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 62,
//                       height: 62,
//                       borderRadius: '16px',
//                       backgroundColor: `${tech.color}10`,
//                       color: tech.color,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       mb: 3,
//                     }}
//                   >
//                     {tech.icon}
//                   </Box>

//                   <Typography
//                     sx={{
//                       fontSize: '0.78rem',
//                       fontWeight: 800,
//                       color: tech.color,
//                       mb: 1.2,
//                       letterSpacing: '0.12em',
//                       textTransform: 'uppercase',
//                     }}
//                   >
//                     {tech.subtitle}
//                   </Typography>

//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: 850,
//                       color: '#0F172A',
//                       mb: 2,
//                       fontSize: { xs: '1.2rem', lg: '1.25rem' }, // ✅ 타이틀 폭 부담 줄임
//                       lineHeight: 1.25,
//                       wordBreak: 'keep-all',
//                     }}
//                   >
//                     {tech.title}
//                   </Typography>

//                   <Typography
//                     sx={{
//                       fontSize: '0.92rem',
//                       color: '#64748B',
//                       lineHeight: 1.65,
//                       whiteSpace: 'pre-line',
//                       flexGrow: 1,
//                     }}
//                   >
//                     {tech.desc}
//                   </Typography>

//                   <Box
//                     sx={{
//                       mt: 3,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                       color: '#0F172A',
//                       fontWeight: 700,
//                       cursor: 'pointer',
//                       '&:hover': { color: tech.color },
//                     }}
//                   >
//                     <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
//                       READ DETAILS
//                     </Typography>
//                     <ArrowForwardIcon
//                       className="hover-arrow"
//                       sx={{
//                         fontSize: 18,
//                         opacity: 0.7,
//                         transform: 'translateX(0)',
//                         transition: 'transform 250ms ease, opacity 250ms ease',
//                       }}
//                     />
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Shape Divider - 하단 물결 효과 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           width: '100%',
//           overflow: 'hidden',
//           lineHeight: 0,
//           transform: 'rotate(180deg)',
//         }}
//       >
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           style={{
//             position: 'relative',
//             display: 'block',
//             width: 'calc(159% + 1.3px)',
//             height: '60px',
//             transform: 'rotateY(180deg)',
//           }}
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity="0.25"
//             fill="#FFFFFF"
//             fillOpacity="1"
//           />
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity="0.5"
//             fill="#FFFFFF"
//             fillOpacity="1"
//           />
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             fill="#FFFFFF"
//             fillOpacity="1"
//           />
//         </svg>
//       </Box>
//     </Box>
//   );
// }
//
//export default TechnologySection;

//Vv05
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import useIsInView from '../hooks/useIsInView';

import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import AirIcon from '@mui/icons-material/Air';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CompanyLogo from '../assets/photo/eyelogosgv.svg';

function TechnologySection() {
  const [ref, isInView] = useIsInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const techData = [
    {
      id: '01',
      title: 'Micro-thermopile 원천기술',
      subtitle: 'Original Tech',
      desc: 'in-house MEMS FAB를 통한\n개발 및 생산 체계 구축',
      icon: <SettingsInputComponentIcon sx={{ fontSize: 30 }} />,
      color: '#1E40AF',
    },
    {
      id: '02',
      title: 'NDIR/TCD 가스 센서',
      subtitle: 'Robot Olfaction',
      desc: '로봇의 후각 기능을 구현하는\n비접촉 정밀 가스센서',
      icon: <AirIcon sx={{ fontSize: 30 }} />,
      color: '#3B82F6',
    },
    {
      id: '03',
      title: 'SWIR/FIR 적외선영상센서',
      subtitle: 'Robot Vision',
      desc: '로봇의 시각 기능을 구현하는\n수분 및 열 영상센서',
      icon: <RemoveRedEyeIcon sx={{ fontSize: 30 }} />,
      color: '#4791FF',
    },
  ];

  // 공통 애니메이션 스타일 헬퍼 함수
  const getAnimatedStyle = (delay) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        minHeight: '95dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#C4DBF2', // ✅ 요청하신 배경색 고정
        overflow: 'hidden',
      }}
    >
      {/* 배경 워터마크 */}
      <Box
        component="img"
        src={CompanyLogo}
        alt="Company Watermark"
        sx={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: '50vw',
          maxWidth: '800px',
          opacity: 0.04,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          transform: isInView
            ? 'rotate(-10deg) scale(1)'
            : 'rotate(-20deg) scale(1.1)',
          transition: 'all 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      />

      <Typography
        sx={{
          position: 'absolute',
          bottom: '-2%',
          left: '3%',
          fontSize: { md: '12vw', lg: '11vw' },
          fontWeight: 900,
          color: 'rgba(30, 64, 175, 0.05)',
          lineHeight: 1,
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        TECHNOLOGY
      </Typography>

      <Container
        maxWidth="xl"
        sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 3 } }}
      >
        <Grid
          container
          spacing={{ xs: 4, lg: 5 }}
          alignItems="center"
          wrap="nowrap"
        >
          {/* --- 왼쪽 텍스트 섹션: 순차적 애니메이션 적용 --- */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ mb: { xs: 4, lg: 0 }, pl: { md: 2 } }}>
              {/* 1. 왼쪽 타이틀 (0.1s) */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  ...getAnimatedStyle(0.1),
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 2,
                    backgroundColor: '#1E40AF',
                    mr: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#1E40AF',
                    letterSpacing: '0.3em',
                  }}
                >
                  TECHNOLOGY
                </Typography>
              </Box>

              {/* 2. 메인 제목 (0.3s) */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.2rem', md: '3.0rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.1,
                  mb: 2.5,
                  wordBreak: 'keep-all',
                  ...getAnimatedStyle(0.3),
                }}
              >
                Micro-Thermopile
                <br />
                <Box component="span" sx={{ color: '#1E40AF' }}>
                  MEMS 센서 솔루션
                </Box>
              </Typography>

              {/* 3. 본문 설명 (0.5s) */}
              <Typography
                sx={{
                  fontSize: '1.15rem',
                  color: '#334155',
                  lineHeight: 1.75,
                  wordBreak: 'keep-all',
                  maxWidth: '360px',
                  marginBottom: '80px',
                  marginLeft: '10px',
                  pt: 1,
                  ...getAnimatedStyle(0.5),
                }}
              >
                마이크로 전자기계시스템(MEMS) 기술을 활용한 초소형, 고성능
                멀티채널센서를 제공합니다.
                <br />
                자체 개발 원천기술에 기반하여 맞춤형으로 대응합니다.
              </Typography>
            </Box>
          </Grid>

          {/* --- 오른쪽 카드 섹션: (0.7s부터 시작) --- */}
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 3 },
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
              }}
            >
              {techData.map((tech, index) => (
                <Box
                  key={tech.id}
                  sx={{
                    flex: 1,
                    minWidth: '310px',
                    position: 'relative',

                    // ✅ 카드 배경: 반투명 + 블러 (Glassmorphism)
                    backgroundColor: 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',

                    borderRadius: '22px',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 3.5, md: 4 },
                    minHeight: { xs: 'auto', md: 360, lg: 400 },
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                    overflow: 'hidden',

                    // ✅ 카드 등장 애니메이션 (0.7s부터 순차적 시작)
                    opacity: isInView ? 1 : 0,
                    transform: isInView
                      ? 'translate3d(0,0,0)'
                      : 'translate3d(0,30px,0)',
                    transition: `all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${
                      0.7 + index * 0.15
                    }s`,

                    '&:hover': {
                      transform: 'translate3d(0,-12px,0)',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)', // 호버 시 좀 더 선명하게
                      boxShadow: `0 40px 70px rgba(30, 64, 175, 0.22)`,
                      '& .hover-arrow': {
                        transform: 'translateX(5px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 62,
                      height: 62,
                      borderRadius: '16px',
                      backgroundColor: `${tech.color}10`,
                      color: tech.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {tech.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: tech.color,
                      mb: 1.2,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tech.subtitle}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 850,
                      color: '#0F172A',
                      mb: 2,
                      fontSize: '1.28rem',
                      lineHeight: 1.25,
                      wordBreak: 'keep-all',
                    }}
                  >
                    {tech.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: '#334155',
                      lineHeight: 1.65,
                      whiteSpace: 'pre-line',
                      flexGrow: 1,
                    }}
                  >
                    {tech.desc}
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#0F172A',
                      fontWeight: 800,
                      cursor: 'pointer',
                      '&:hover': { color: tech.color },
                    }}
                  >
                    <Typography sx={{ fontSize: '0.9rem' }}>
                      READ DETAILS
                    </Typography>
                    <ArrowForwardIcon
                      className="hover-arrow"
                      sx={{ fontSize: 18, opacity: 0.7, transition: '0.3s' }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Shape Divider - 하단 물결 효과 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'rotate(180deg)',
        }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(159% + 1.3px)',
            height: '60px',
            transform: 'rotateY(180deg)',
          }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            fill="#FFFFFF"
            fillOpacity="1"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity="0.5"
            fill="#FFFFFF"
            fillOpacity="1"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#FFFFFF"
            fillOpacity="1"
          />
        </svg>
      </Box>
    </Box>
  );
}

export default TechnologySection;
