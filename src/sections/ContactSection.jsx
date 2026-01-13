// import React, { forwardRef } from 'react';
// import { Box, Typography, Container, Grid } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// /**
//  * ContactSection 컴포넌트
//  *
//  * Footer 역할을 하는 연락처 섹션입니다.
//  * - 회사 연락처 정보 표시
//  * - 이메일 정보 표시
//  * - 깔끔하고 모던한 footer 디자인
//  *
//  * Props:
//  * @param {React.Ref} ref - 섹션 ref [Optional]
//  *
//  * Example usage:
//  * <ContactSection ref={contactSectionRef} />
//  */
// const ContactSection = forwardRef((props, ref) => {
//   const [viewRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   // 애니메이션 헬퍼 함수
//   const getAnimatedStyle = (delay) => ({
//     opacity: isInView ? 1 : 0,
//     transform: isInView ? 'translateY(0)' : 'translateY(30px)',
//     transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
//   });

//   // Dummy 연락처 정보
//   const contactInfo = {
//     company: 'Tempus',
//     address: '(01811) 서울특별시 노원구 공릉로 232 서울테크노파크 12층',
//     phone: '+82-2-944-6513',
//     email: 'ce@tempuselec.com',
//   };

//   return (
//     <Box
//       ref={(node) => {
//         if (typeof ref === 'function') ref(node);
//         else if (ref) ref.current = node;
//       }}
//       sx={{
//         width: '100%',
//         backgroundColor: '#0F172A',
//         color: '#FFFFFF',
//         py: { xs: 8, md: 10 },
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box ref={viewRef}>
//           <Grid container spacing={4} alignItems="center">
//             {/* 왼쪽: 회사명 및 주소 */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ ...getAnimatedStyle(0.2) }}>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontSize: { xs: '2rem', md: '2.5rem' },
//                     fontWeight: 900,
//                     color: '#FFFFFF',
//                     mb: 3,
//                     letterSpacing: '-0.02em',
//                   }}
//                 >
//                   {contactInfo.company}
//                 </Typography>

//                 <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
//                   <LocationOnIcon
//                     sx={{
//                       fontSize: 20,
//                       color: '#3B82F6',
//                       mr: 2,
//                       mt: 0.5,
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: '1rem',
//                       color: 'rgba(255, 255, 255, 0.8)',
//                       lineHeight: 1.7,
//                     }}
//                   >
//                     {contactInfo.address}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* 전화번호 */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Box sx={{ ...getAnimatedStyle(0.4) }}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: 1.5,
//                     marginTop: '20px',
//                   }}
//                 >
//                   <PhoneIcon
//                     sx={{
//                       fontSize: 20,
//                       color: '#3B82F6',
//                       mt: 0.5,
//                       flexShrink: 0,
//                     }}
//                   />
//                   <Box>
//                     <Typography
//                       sx={{
//                         fontSize: '0.85rem',
//                         color: 'rgba(255, 255, 255, 0.6)',
//                         mb: 0.5,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.1em',
//                       }}
//                     >
//                       Phone
//                     </Typography>
//                     <Typography
//                       component="a"
//                       href={`tel:${contactInfo.phone}`}
//                       sx={{
//                         fontSize: { xs: '0.95rem', md: '1.1rem' },
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         textDecoration: 'none',
//                         transition: 'color 0.3s ease',
//                         '&:hover': {
//                           color: '#3B82F6',
//                         },
//                       }}
//                     >
//                       {contactInfo.phone}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* 이메일 */}
//             <Grid item xs={12} sm={6} md={3}>
//               <Box sx={{ ...getAnimatedStyle(0.5) }}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: 1.5,
//                     marginTop: '20px',
//                   }}
//                 >
//                   <EmailIcon
//                     sx={{
//                       fontSize: 20,
//                       color: '#3B82F6',
//                       mt: 0.5,
//                       flexShrink: 0,
//                     }}
//                   />
//                   <Box>
//                     <Typography
//                       sx={{
//                         fontSize: '0.85rem',
//                         color: 'rgba(255, 255, 255, 0.6)',
//                         mb: 0.5,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.1em',
//                       }}
//                     >
//                       Email
//                     </Typography>
//                     <Typography
//                       component="a"
//                       href={`mailto:${contactInfo.email}`}
//                       sx={{
//                         fontSize: { xs: '0.95rem', md: '1.1rem' },
//                         color: '#FFFFFF',
//                         fontWeight: 600,
//                         textDecoration: 'none',
//                         transition: 'color 0.3s ease',
//                         wordBreak: 'break-word',
//                         '&:hover': {
//                           color: '#3B82F6',
//                         },
//                       }}
//                     >
//                       {contactInfo.email}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>

//           {/* 하단 구분선 및 저작권 */}
//           <Box
//             sx={{
//               mt: { xs: 6, md: 8 },
//               pt: { xs: 4, md: 6 },
//               borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//               textAlign: 'center',
//               ...getAnimatedStyle(0.6),
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '0.9rem',
//                 color: 'rgba(255, 255, 255, 0.6)',
//               }}
//             >
//               © 2026 {contactInfo.company}. All rights reserved.
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// });

// ContactSection.displayName = 'ContactSection';

// export default ContactSection;

import React, { forwardRef } from 'react';
import { Box, Typography, Container, Grid, alpha } from '@mui/material';
import useIsInView from '../hooks/useIsInView';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import tempusLogo from '../assets/photo/Tempuslogo.png';

const ContactSection = forwardRef((props, ref) => {
  const [viewRef, isInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getAnimatedStyle = (delay) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
  });

  const contactInfo = {
    company: 'Tempus',
    address: '(01811) 서울특별시 노원구 공릉로 232 서울테크노파크 12층',
    phone: '+82-2-944-6513',
    email: 'ce@tempuselec.com',
  };

  return (
    <Box
      ref={(node) => {
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      sx={{
        width: '100%',
        backgroundColor: '#0F172A', // 다크 슬레이트 블루
        color: '#F8FAFC',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box ref={viewRef}>
          <Grid container spacing={5} alignItems="flex-start">
            {/* 왼쪽: 브랜드 및 주소 */}
            <Grid item xs={12} md={5}>
              <Box sx={getAnimatedStyle(0.2)}>
                <Box
                  component="img"
                  src={tempusLogo}
                  alt={contactInfo.company}
                  sx={{
                    height: { xs: '40px', md: '50px' },
                    width: 'auto',
                    mb: 3,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    transition: 'filter 0.3s ease',
                  }}
                />

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    maxWidth: '400px',
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 20,
                      color: '#60A5FA', // 더 밝고 선명한 블루
                      mr: 1.5,
                      mt: 0.3,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: '#94A3B8', // Slate 400: 가독성 좋은 보조 텍스트 색상
                      lineHeight: 1.6,
                      fontWeight: 400,
                      wordBreak: 'keep-all',
                    }}
                  >
                    (01811) 서울특별시 노원구 공릉로 232
                    <br /> 서울테크노파크 12층
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* 오른쪽 연락처 그룹 */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={4}>
                {/* 전화번호 */}
                <Grid item xs={12} sm={6}>
                  <Box sx={getAnimatedStyle(0.4)}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginTop: '68px',
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: '12px',
                          backgroundColor: alpha('#3B82F6', 0.1),
                          display: 'flex',
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 20, color: '#60A5FA' }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            color: '#64748B',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            mb: 0.5,
                          }}
                        >
                          Phone
                        </Typography>
                        <Typography
                          component="a"
                          href={`tel:${contactInfo.phone}`}
                          sx={{
                            fontSize: '1.1rem',
                            color: '#F1F5F9',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': { color: '#60A5FA' },
                          }}
                        >
                          {contactInfo.phone}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* 이메일 */}
                <Grid item xs={12} sm={6}>
                  <Box sx={getAnimatedStyle(0.5)}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginTop: '67px',
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: '12px',
                          backgroundColor: alpha('#3B82F6', 0.1),
                          display: 'flex',
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 20, color: '#60A5FA' }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            color: '#64748B',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            mb: 0.5,
                          }}
                        >
                          Email
                        </Typography>
                        <Typography
                          component="a"
                          href={`mailto:${contactInfo.email}`}
                          sx={{
                            fontSize: '1.1rem',
                            color: '#F1F5F9',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            wordBreak: 'break-all',
                            '&:hover': { color: '#60A5FA' },
                          }}
                        >
                          {contactInfo.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* 하단 저작권 */}
          <Box
            sx={{
              mt: { xs: 8, md: 10 },
              pt: 4,
              borderTop: `1px solid ${alpha('#FFFFFF', 0.08)}`,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              ...getAnimatedStyle(0.6),
            }}
          >
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
              }}
            >
              © 2026 {contactInfo.company}. All rights reserved.
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#475569',
                cursor: 'pointer',
                '&:hover': { color: '#94A3B8' },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
