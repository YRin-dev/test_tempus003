// import React, { forwardRef } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   alpha,
//   Stack,
// } from '@mui/material';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import AssignmentIndOutlineIcon from '@mui/icons-material/AssignmentIndOutlined';
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
//           backgroundColor: '#F8F9FA', // 깔끔한 라이트 블루 그레이
//           overflow: 'hidden',
//           py: { xs: 10, md: 0 },
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '150px',
//             background:
//               'linear-gradient(180deg, #FFFFFF 0%, rgba(253, 253, 251, 0) 100%)',
//             zIndex: 3,
//             pointerEvents: 'none',
//           }}
//         />

//         {/* --- 배경 장식: '새싹'의 유기적 형태 (Blue 톤으로 변경) --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '10%',
//             right: '600px',
//             width: '550px',
//             height: '300px',
//             backgroundColor: '#E1EDFA', // 매우 연한 블루 '#F0F7FF'
//             borderRadius: '20px 250px 20px 250px',
//             filter: 'blur(10px)',
//             opacity: isInView ? 0.8 : 0,
//             transform: isInView
//               ? 'rotate(0deg) scale(1)'
//               : 'rotate(-20deg) scale(0.8)',
//             transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//           }}
//         />

//         {/* --- 배경 장식 도형 (새싹 테마: Sage Green) --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '10%',
//             right: '15%',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#E8F2EE', // 매우 연한 세이지 그린 (새싹의 생명력)
//             borderRadius: '250px 20px 250px 20px',
//             filter: 'blur(5px)',
//             opacity: isInView ? 0.6 : 0,
//             transform: isInView
//               ? 'rotate(0deg) scale(1)'
//               : 'rotate(-15deg) scale(0.8)',
//             transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
//           }}
//         />

//         {/* --- 배경 장식: '화분'의 안정적 형태 --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '49%',
//             right: '190px',
//             width: '390px',
//             height: '300px',
//             filter: 'blur(0px)',
//             backgroundColor: '#F7F5F0', //연한 베이지는 '#F7F5F0'
//             borderRadius: '40px 100px 300px 40px',
//             opacity: isInView ? 0.6 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
//             transitionDelay: '0.2s',
//           }}
//         />

//         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//           {/* 1. 타이틀 섹션 */}
//           <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2.5rem', md: '4rem' },
//                 fontWeight: 900,
//                 color: '#334155',
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
//                 marginTop: '24px',
//                 ...getAnimatedStyle(0.5),
//               }}
//             >
//               {contactContent.subtitle[0]} {contactContent.subtitle[1]}
//             </Typography>
//           </Box>

//           <Grid
//             container
//             spacing={4}
//             alignItems="stretch"
//             justifyContent="center"
//           >
//             {/* 3. 오른쪽: 채용 카드 */}
//             {careerPosts.map((post, index) => {
//               // 카드별 링크 URL
//               const cardUrls = [
//                 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=52727141&recommend_ids=eJxVjcsRwzAQQqvJfT%2BgXc4uxP134UgzkZXjGx7AYFui73b%2F1MUYUBRuWSwkbXCcqUp%2F6LNrC8sEjN0dsDn1kytc9R5N2WvLsE5wp9GNfn8pt%2BTRJZQb8yvbIaeUCx%2Flzy%2F%2F&view_type=list&gz=1&t_ref_content=ing_recruit&t_ref=company_info_view&relayNonce=075d05502916b2ba06ae&immediately_apply_layer_open=n#seq=0',
//                 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=52727159&recommend_ids=eJxNjrkRwEAIA6txzo%2BIXYj778Kcx8NduKykwSUKYH3AfOXtElaS9hTJjwkcNk3kwApTaqQPk7rGJxrnTDm6ntNd1mLbcFMZ607hMVP9VWWdTxZjh0Fq2GHty%2BryC9%2B4L%2Fw%3D&view_type=list&gz=1&t_ref_content=ing_recruit&t_ref=company_info_view&relayNonce=8d78861cb284921852a9&immediately_apply_layer_open=n#seq=0',
//               ];
//               const cardUrl = cardUrls[index] || null;

//               const handleCardClick = () => {
//                 if (cardUrl) {
//                   window.open(cardUrl, '_blank', 'noopener,noreferrer');
//                 }
//               };

//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={6}
//                   lg={4}
//                   key={index}
//                   sx={{ display: 'flex' }}
//                 >
//                   <Box
//                     onClick={cardUrl ? handleCardClick : undefined}
//                     sx={{
//                       width: '400px',
//                       height: '300px',
//                       backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                       backdropFilter: 'blur(12px)',
//                       borderRadius: '32px',
//                       padding: { xs: 4, md: 5 },
//                       border: '1px solid rgba(255, 255, 255, 0.5)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                       cursor: cardUrl ? 'pointer' : 'default',
//                       ...getAnimatedStyle(0.7 + index * 0.1),
//                       '&:hover': {
//                         backgroundColor: '#FFFFFF',
//                         transform: 'translateY(-15px)',
//                         //boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
//                         boxShadow: `0 30px 60px ${alpha('#3B82F6', 0.15)}`,
//                         borderColor: '#3B82F6', // 호버 시 테두리 블루
//                         '& .arrow-icon': {
//                           transform: 'translate(4px, -4px) rotate(-45deg)', // 대각선 위로 이동 및 회전
//                           color: '#3B82F6',
//                         },
//                         '& .detail-text': {
//                           color: '#3B82F6',
//                         },
//                         '& .hover-arrow': {
//                           transform: 'translateX(5px)',
//                           opacity: 1,
//                         },
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         mb: 2,
//                       }}
//                     >
//                       <Box>
//                         <Typography
//                           sx={{
//                             fontSize: '0.8rem',
//                             color: '#3B82F6',
//                             fontWeight: 800,
//                             mb: 1,
//                             textTransform: 'uppercase',
//                           }}
//                         >
//                           {post.subtitle[0]}
//                         </Typography>
//                         <Typography
//                           variant="h5"
//                           sx={{
//                             fontWeight: 850,
//                             color: '#0F172A',
//                             fontSize: '1.5rem',
//                             lineHeight: 1.2,
//                             mb: 1.7,
//                           }}
//                         >
//                           {post.title[0]}
//                         </Typography>
//                         <Stack direction="row" spacing={1.5} sx={{ mb: 2 }}>
//                           <Box
//                             sx={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               gap: 0.5,
//                             }}
//                           >
//                             <WorkOutlineIcon
//                               sx={{ fontSize: '0.9rem', color: '#64748B' }}
//                             />
//                             <Typography
//                               sx={{
//                                 fontSize: '0.85rem',
//                                 color: '#64748B',
//                                 fontWeight: 600,
//                               }}
//                             >
//                               신입 · 경력
//                             </Typography>
//                           </Box>
//                           <Box
//                             sx={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               gap: 0.5,
//                             }}
//                           >
//                             <AssignmentIndOutlineIcon
//                               sx={{ fontSize: '0.9rem', color: '#64748B' }}
//                             />
//                             <Typography
//                               sx={{
//                                 fontSize: '0.85rem',
//                                 color: '#64748B',
//                                 fontWeight: 600,
//                               }}
//                             >
//                               정규직
//                             </Typography>
//                           </Box>
//                         </Stack>
//                       </Box>
//                       <ArrowForwardIosIcon
//                         className="arrow-icon"
//                         sx={{
//                           fontSize: 18,
//                           color: '#CBD5E1',
//                           mt: 1,
//                           transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                         }}
//                       />
//                     </Box>

//                     <Box sx={{ flexGrow: 1, mb: 4 }}>
//                       {post.description.map((desc, i) => (
//                         <Typography
//                           key={i}
//                           sx={{
//                             color: '#475569',
//                             lineHeight: 1.6,
//                             fontSize: '0.95rem',
//                             mb: 0.5,
//                           }}
//                         >
//                           {index === 1 ? desc : `• ${desc}`}
//                         </Typography>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Grid>
//               );
//             })}

//             {/* 2. 오른쪽: 설명 및 버튼 */}
//             <Grid item xs={12} lg={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   px: { lg: 3 },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: '1.2rem',
//                     color: '#334155',
//                     lineHeight: 1.7,
//                     mb: 5,
//                     wordBreak: 'keep-all',
//                     fontWeight: 500,
//                     ...getAnimatedStyle(0.5),
//                   }}
//                 >
//                   혁신적인 기술로 세상을 연결하는 여정에 <br />
//                   여러분의 열정을 더해주세요.
//                 </Typography>

//                 <Box
//                   component="button"
//                   sx={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: 1.5,
//                     px: 3,
//                     py: 1.6,
//                     marginLeft: '50px',
//                     width: 'fit-content', // 글자 사이즈에 맞게 자동 조정
//                     backgroundColor: 'transparent',
//                     color: '#0F172A',
//                     borderRadius: '50px',
//                     border: `1px solid ${alpha('#0F172A', 0.3)}`,
//                     cursor: 'pointer',
//                     fontWeight: 800,
//                     fontSize: '0.85rem',
//                     letterSpacing: '0.1em',
//                     transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:hover': {
//                       transform: 'translateY(-4px)', // 위로 살짝 떠오름
//                       borderColor: '#3B82F6', // 강조색으로 경계선 변경
//                       color: '#3B82F6', // 텍스트 색상 변경
//                       backgroundColor: alpha('#3B82F6', 0.05), // 아주 은은한 배경색 추가
//                       boxShadow: `0 10px 20px ${alpha('#3B82F6', 0.2)}`, // 강조색 그림자
//                       '& .arrow-icon': {
//                         transform: 'translateX(5px)', // 화살표만 오른쪽으로 밀려남
//                       },
//                     },
//                     '&:active': {
//                       transform: 'translateY(-1px)', // 클릭 시 눌리는 효과
//                     },
//                   }}
//                 >
//                   DETAILS
//                   <ArrowForwardIcon
//                     className="arrow-icon" // 클래스명 부여하여 hover 시 선택 가능하게 함
//                     sx={{
//                       fontSize: 18,
//                       transition:
//                         'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)', // 화살표 전용 트랜지션
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Shape Divider - 하단 물결 효과 */}
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//             overflow: 'hidden',
//             lineHeight: 0,
//             transform: 'rotate(180deg)',
//             zIndex: 1,
//           }}
//         >
//           <svg
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//             style={{
//               position: 'relative',
//               display: 'block',
//               width: 'calc(159% + 1.3px)',
//               height: '80px',
//               transform: 'rotateY(180deg)',
//             }}
//           >
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//               opacity="0.25"
//               fill="#1E40AF"
//               fillOpacity="1"
//             />
//             <path
//               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//               opacity="0.5"
//               fill="#1E40AF"
//               fillOpacity="1"
//             />
//             <path
//               d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//               fill="#0F172A"
//               fillOpacity="1"
//             />
//           </svg>
//         </Box>
//       </Box>
//     </FullPageSection>
//   );
// });

// CareerSection.displayName = 'CareerSection';

// export default CareerSection;

import React, { forwardRef } from 'react';
import { Box, Typography, Container, Grid, alpha, Stack } from '@mui/material';
import FullPageSection from '../components/commons/container/FullPageSection';
import useIsInView from '../hooks/useIsInView';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentIndOutlineIcon from '@mui/icons-material/AssignmentIndOutlined';
import {
  contactContent,
  qualityManagementCareerContent,
  EngineeringCareerContent,
} from '../data/contentData';

const CareerSection = forwardRef((props, ref) => {
  const [viewRef, isInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const careerPosts = [
    qualityManagementCareerContent,
    EngineeringCareerContent,
  ];

  const getAnimatedStyle = (delay) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
  });

  return (
    <FullPageSection ref={ref}>
      <Box
        ref={viewRef}
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#F8F9FA',
          overflow: 'hidden',
          py: { xs: 10, md: 0 },
        }}
      >
        {/* 상단 화이트 그라데이션 오버레이 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '150px',
            background:
              'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* --- [왼쪽 디자인 요소] JOIN US 세로 텍스트 & 라인 --- */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '20px', md: '40px', lg: '60px' },
            top: '50%',
            transform: 'translateY(-50%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            zIndex: 3,
            opacity: isInView ? 1 : 0,
            transition: 'all 1s ease 1s',
          }}
        >
          <Box
            sx={{
              width: '1px',
              height: '80px',
              backgroundColor: alpha('#3B82F6', 0.3),
            }}
          />
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: alpha('#334155', 0.4),
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            Join Our Journey{' '}
            <Box component="span" sx={{ color: '#3B82F6', fontWeight: 900 }}>
              JOIN US
            </Box>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '1px',
                height: '120px',
                background: `linear-gradient(to bottom, ${alpha(
                  '#3B82F6',
                  0.3
                )}, transparent)`,
              }}
            />
            <Box
              sx={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#3B82F6',
                boxShadow: `0 0 10px ${alpha('#3B82F6', 0.5)}`,
              }}
            />
          </Box>
        </Box>

        {/* --- 배경 장식 도형들 --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '10%',
            right: '580px',
            width: '550px',
            height: '300px',
            backgroundColor: '#E1EDFA',
            borderRadius: '20px 250px 20px 250px',
            filter: 'blur(10px)',
            opacity: isInView ? 0.8 : 0,
            transform: isInView
              ? 'rotate(0deg) scale(1)'
              : 'rotate(-20deg) scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '10%',
            right: '13%',
            width: '340px',
            height: '280px',
            backgroundColor: '#E8F2EE',
            borderRadius: '250px 20px 250px 20px',
            filter: 'blur(5px)',
            opacity: isInView ? 0.6 : 0,
            transform: isInView
              ? 'rotate(0deg) scale(1)'
              : 'rotate(-15deg) scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '49%',
            right: '170px',
            width: '390px',
            height: '300px',
            backgroundColor: '#F7F5F0',
            borderRadius: '40px 100px 300px 40px',
            opacity: isInView ? 0.6 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          {/* 1. 타이틀 섹션 */}
          <Box
            sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, pl: { md: 8 } }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#334155',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                ...getAnimatedStyle(0.3),
              }}
            >
              {contactContent.title[0]} <br />
              <Box component="span" sx={{ color: '#3B82F6' }}>
                {contactContent.title[1]}
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: '#64748B',
                lineHeight: 1.8,
                maxWidth: '700px',
                mx: 'auto',
                marginTop: '24px',
                ...getAnimatedStyle(0.5),
              }}
            >
              {contactContent.subtitle[0]} {contactContent.subtitle[1]}
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            alignItems="stretch"
            justifyContent="center"
            sx={{ pl: { md: 6 } }}
          >
            {careerPosts.map((post, index) => {
              const cardUrls = [
                'https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=52727141',
                'https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=52727159',
              ];
              const cardUrl = cardUrls[index];

              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={index}
                  sx={{ display: 'flex' }}
                >
                  <Box
                    onClick={() => cardUrl && window.open(cardUrl, '_blank')}
                    sx={{
                      width: '400px',
                      height: '300px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '32px',
                      padding: { xs: 4, md: 5 },
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                      cursor: 'pointer',
                      ...getAnimatedStyle(0.7 + index * 0.1),
                      '&:hover': {
                        backgroundColor: '#FFFFFF',
                        transform: 'translateY(-15px)',
                        boxShadow: `0 30px 60px ${alpha('#3B82F6', 0.15)}`, // 은은한 블루 그림자
                        borderColor: '#3B82F6',
                        '& .arrow-icon': {
                          transform: 'translate(4px, -4px) rotate(-45deg)',
                          color: '#3B82F6',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            color: '#3B82F6',
                            fontWeight: 800,
                            mb: 1,
                            textTransform: 'uppercase',
                          }}
                        >
                          {post.subtitle[0]}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 850,
                            color: '#0F172A',
                            fontSize: '1.5rem',
                            lineHeight: 1.2,
                            mb: 1.5,
                          }}
                        >
                          {post.title[0]}
                        </Typography>

                        {/* 신입·경력 · 정규직 정보 */}
                        <Stack direction="row" spacing={1.5} sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                            }}
                          >
                            <WorkOutlineIcon
                              sx={{ fontSize: '0.9rem', color: '#64748B' }}
                            />
                            <Typography
                              sx={{
                                fontSize: '0.85rem',
                                color: '#64748B',
                                fontWeight: 600,
                              }}
                            >
                              신입 · 경력
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                            }}
                          >
                            <AssignmentIndOutlineIcon
                              sx={{ fontSize: '0.9rem', color: '#64748B' }}
                            />
                            <Typography
                              sx={{
                                fontSize: '0.85rem',
                                color: '#64748B',
                                fontWeight: 600,
                              }}
                            >
                              정규직
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                      <ArrowForwardIosIcon
                        className="arrow-icon"
                        sx={{
                          fontSize: 18,
                          color: '#CBD5E1',
                          mt: 1,
                          transition: 'all 0.4s ease',
                        }}
                      />
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                      {post.description.map((desc, i) => (
                        <Typography
                          key={i}
                          sx={{
                            color: '#475569',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            mb: 0.5,
                          }}
                        >
                          {index === 1 ? desc : `• ${desc}`}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              );
            })}

            {/* 오른쪽: 안내 문구 및 버튼 */}
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: { lg: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    mb: 4,
                    fontWeight: 500,
                    ...getAnimatedStyle(0.5),
                  }}
                >
                  혁신적인 기술로 세상을 연결하는 여정에 <br />
                  여러분의 열정을 더해주세요.
                </Typography>
                <Box
                  component="button"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 4,
                    py: 1.6,
                    ml: 4.5,
                    width: 'fit-content',
                    backgroundColor: 'transparent',
                    color: '#0F172A',
                    borderRadius: '50px',
                    border: `1px solid ${alpha('#0F172A', 0.3)}`,
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#3B82F6',
                      color: '#3B82F6',
                      backgroundColor: alpha('#3B82F6', 0.05),
                      boxShadow: `0 10px 20px ${alpha('#3B82F6', 0.2)}`,
                      '& .btn-arrow': { transform: 'translateX(5px)' },
                    },
                  }}
                >
                  DETAILS{' '}
                  <ArrowForwardIcon
                    className="btn-arrow"
                    sx={{ fontSize: 18, transition: '0.3s' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* 하단 물결 Shape Divider */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: 'rotate(180deg)',
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: 'relative',
              display: 'block',
              width: 'calc(159% + 1.3px)',
              height: '80px',
              transform: 'rotateY(180deg)',
            }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.25"
              fill="#1E40AF"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.5"
              fill="#1E40AF"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#0F172A"
            />
          </svg>
        </Box>
      </Box>
    </FullPageSection>
  );
});

CareerSection.displayName = 'CareerSection';
export default CareerSection;
