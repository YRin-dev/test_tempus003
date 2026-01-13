import React, { useState } from 'react';
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  // useMediaQuery,
  // useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useBackground } from '../../context/BackgroundContext';
import { useSectionRefs } from '../../context/SectionRefsContext';

import { siteMetadata } from '../../data/contentData';
import ContentArea from './container/ContentArea';
import tempusLogoImage from '../../assets/photo/Tempuslogo.png';

/**
 * Header 컴포넌트
 * Fixed 포지션으로 상단에 고정되며 테마 모드에 따라 색상이 변경됨
 * 모바일에서는 Drawer 메뉴, 인터랙티브 로고 포함
 * 스크롤 시 로고 축약 기능
 * SectionRefsContext를 사용하여 섹션 네비게이션 기능 제공
 *
 * Example usage:
 * <Header />
 */
const Header = () => {
  const { backgroundMode } = useBackground();
  const { scrollToSection } = useSectionRefs();
  // const theme = useTheme();
  //const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  // 테마 모드에 따른 색상 결정
  const textColor = backgroundMode === 'light' ? '#000000' : '#ffffff';

  /**
   * 로고 클릭 핸들러 - TopSection으로 이동
   */
  const handleLogoClick = () => {
    scrollToSection('top');
  };

  /**
   * 네비게이션 메뉴 클릭 핸들러
   * @param {string} section - 이동할 섹션 ('products', 'contact')
   */
  const handleNavClick = (section) => {
    setDrawerOpen(false); // 모바일 메뉴 닫기
    // 섹션 이름 매핑: 'projects' -> 'products'
    const sectionMap = {
      projects: 'products',
      contact: 'contact',
    };
    const targetSection = sectionMap[section] || section;
    scrollToSection(targetSection);
  };

  /**
   * Drawer 토글 핸들러
   */
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  /**
   * 네비게이션 메뉴 아이템들
   */
  const menuItems = [
    { label: siteMetadata.navigation.projects, section: 'projects' },
    { label: siteMetadata.navigation.contact, section: 'contact' },
  ];

  /**
   * 모바일 Drawer 컨텐츠
   */
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: backgroundMode === 'light' ? '#ffffff' : '#121212',
        position: 'relative',
      }}
    >
      {/* Drawer 헤더 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: `1px solid ${
            backgroundMode === 'light' ? '#e0e0e0' : '#333'
          }`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: textColor,
          }}
        >
          {siteMetadata.brandName}
        </Typography>
        <IconButton onClick={toggleDrawer} sx={{ color: textColor }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* 메뉴 리스트 */}
      <List sx={{ pt: 4 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.section}
            onClick={() => handleNavClick(item.section)}
            sx={{
              cursor: 'pointer',
              py: 2,
              '&:hover': {
                bgcolor: backgroundMode === 'light' ? '#f5f5f5' : '#222',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: textColor,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: { xs: 2, md: 3 },
          transition: 'all 0.7s ease-in-out',
          bgcolor: 'transparent',
          backdropFilter: 'none',
          borderBottom: 'none',
        }}
      >
        <ContentArea>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mx: 'auto',
            }}
          >
            {/* 회사 로고 이미지 */}
            <Box
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                height: { xs: '2rem', md: '2.5rem' },
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                component="img"
                src={tempusLogoImage}
                alt="Tempus Logo"
                sx={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter:
                    backgroundMode === 'light'
                      ? 'drop-shadow(0 1px 3px rgba(255,255,255,0.8)) drop-shadow(0 1px 2px rgba(255,255,255,0.6))'
                      : 'none',
                }}
              />
            </Box>

            {/* 데스크톱 네비게이션 메뉴
            {!isMobile && !isProjectDetailPage && (
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, md: 4 },
                  alignItems: 'center',
                }}
              >
                {menuItems.map((item) => (
                  <Typography
                    key={item.section}
                    variant="body2"
                    onClick={() => handleNavClick(item.section)}
                    sx={{
                      color: textColor,
                      opacity: 0.8,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textShadow: backgroundMode === 'light' 
                        ? '0 1px 2px rgba(255,255,255,0.8)' 
                        : 'none',
                      '&:hover': {
                        opacity: 1,
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )} */}

            {/* 모바일 햄버거 메뉴 */}
            {/* {isMobile && !isProjectDetailPage && (
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  color: textColor,
                  filter: backgroundMode === 'light' 
                    ? 'drop-shadow(0 1px 2px rgba(255,255,255,0.8))' 
                    : 'none',
                  '&:hover': {
                    bgcolor: backgroundMode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )} */}
          </Box>
        </ContentArea>
      </Box>

      {/* 모바일 Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
