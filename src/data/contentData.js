/**
 * 랜딩 페이지 콘텐츠 데이터
 * 모든 섹션에서 사용되는 텍스트를 중앙 관리
 */

// HeroSection 콘텐츠
export const heroContent = {
  mainText: '보이지 않는 것을 봅니다',
  typingSpeed: 60,
  deleteSpeed: 30,
  startDelay: 300,
  cursorType: 'line',
};

// TransitionSection 콘텐츠
export const transitionContent = {
  text: 'ABOUT',
  description: [
    "템퍼스는 '가격 경쟁력이 있는 IR 멀티밴드 분광 센서'에",
    '중점을 두고, 높은 노이즈 대비 감도( SNR) 및 넓은',
    '감지파장 (WDR)을 가진 마이크로써모파일을 성공적으로 개발하였습니다.',
    '34개의 특허와 13년 기술력을 바탕으로 차별화된 적외선 센서 솔루션을 제공합니다',
  ],
};

// MissionSection 콘텐츠
export const missionContent = {
  title: 'Tempus Mission/ 응용 분야 및 특징',
  description: {
    brandName: 'Tempus',
    message: [
      '는 다양한 산업 분야에서 활용되는',
      '센서 기술과 솔루션으로 Physical AI의 새로운 가능성을 열어갑니다',
    ],
  },
};

// TechnologySection 기술소개
export const technologyContent = {
  mainMessage: ['당신의 시스템에 적합한', '을 제공합니다'],
  subMessage: [
    '자체 MEMS Fab 기반 차별화된 적외선센서 기술로',
    ' Physical AI의 새로운 가능성을 열어갑니다',
  ],
  mainTitle: 'PHYSICAL AI',
  h1Title: '독자적 Micro-Thermopile 기반 MEMS 센서 기술',
  description:
    '마이크로 전자기계시스템(MEMS) 기술을 활용한 초소형,고성능 멀티체널센서를 제공합니다. 자체개발 원천기술에 기반하여 고객요구에 맞춤형으로 대응합니다',
  cards: [
    {
      id: 1,
      title: 'Micro-thermopile 원천기술',
      description: 'in-house MEMS FAB를 통한 개발/생산',
      photo: '/src/assets/photo/technology1.png', // TODO: 실제 이미지 경로로 변경
    },
    {
      id: 2,
      title: '코: NDIR/TCD 가스 센서',
      description: '로봇의 후각 기능을 구현하는 비접촉 가스센서',
      photo: '/src/assets/photo/technology2.png', // TODO: 실제 이미지 경로로 변경
    },
    {
      id: 3,
      title: '눈:SWIR/FIR 적외선영상센서',
      description: '로봇의 시각 기능을 구현하는 수분/열영상센서',
      photo: '/src/assets/photo/technology3.png', // TODO: 실제 이미지 경로로 변경
    },
  ],
};

export const MicroThermopileContent = {
  title: 'Micro Thermopile 원천기술',
  mainMessage: ['In-house MEMS Fab 기반 개발/생산'],
};

// ProjectsSection 콘텐츠
export const productContent = {
  title: 'Ordinary Projects',
  // 실제 프로젝트 데이터는 productData.js에서 관리
};

// ProductsSection 콘텐츠
export const productsContent = {
  title: 'Ordinary Projects',
};

// ContactSection 콘텐츠
export const contactContent = {
  title: ["Let's Work", 'Together'],
  subtitle: ['인재를 모집합니다,', '함께 만들어 나가요.'],
  contact: {
    email: {
      label: 'Email',
      value: 'hello@ordinary.design',
    },
    phone: {
      label: 'Phone',
      value: '+82 10 1234 5678',
    },
  },
};

// CareertactSection 콘텐츠
export const qualityManagementCareerContent = {
  title: ['센서 품질관리 정규직 채용 (일본어 가능자)'],
  subtitle: ['품질팀'],
  description: [
    '품질 관리 및 개선 업무를 담당할 인재를 모집합니다',
    ' 일본어 소통이 가능한 분을 우대합니다',
  ],
};
export const EngineeringCareerContent = {
  title: ['센서 응용개발 펌웨어 Engineer'],
  subtitle: ['제품응용팀'],
  description: [
    '제품 응용 기술 개발 및 연구 업무를 수행할',
    '연구소 엔지니어를 모집합니다',
  ],
};

// 전체 사이트 메타 데이터
export const siteMetadata = {
  // brandName: 'Tempus',
  brandTagline: 'See the unseen',
  navigation: {
    home: 'Home',
    technology: 'Technology',
    product: 'Product',
    career: 'Career',
    contact: 'Contact',
  },
};
