// 썸네일 이미지들 import
import refrigerImg from '../assets/photo/refrigerSensorImg.png';
import bssImg from '../assets/photo/BssSensorImg.png';
import co2Img from '../assets/photo/co2SensorImg.png';
import hydrogenImg from '../assets/photo/hydrigenSensorImg.png';
import irThermalImg from '../assets/photo/irArraySensorImg.png';

/**
 * 전역 프로젝트 데이터
 * - 프로젝트 목록과 상세 정보를 포함
 * - ID를 키로 하는 객체 구조로 빠른 조회 가능
 */
export const productData = {
  1: {
    id: 1,
    title: 'NDIR 냉매센서',
    exp: 'HVAC Safety',
    img: refrigerImg,
    description:
      '혁신적 NDIR 기술을 적용한 R32/R290/R454B/R1234yf 냉매가스 센서',
  },
  2: {
    id: 2,
    title: 'BSS 화재감지센서',
    exp: 'Fire Safety',
    img: bssImg,
    description: '에너지 저장 시스템의 화재 위험을 조기 감지하는 고성능 센서 ',
  },
  3: {
    id: 3,
    title: 'IQA 공기질관리센서',
    exp: 'Indoor Air Quality',
    img: co2Img,
    description: '실내 공기질을 정밀 측정하고 관리하는 스마트 센서 솔루션',
  },
  4: {
    id: 4,
    title: '도시가스 누기센서 및 경보기',
    exp: 'Gas Leakage Detection',
    img: hydrogenImg,
    description: '도시가스 누기를 신속하게 감지하는 가스센서 및 경보기',
  },
  5: {
    id: 5,
    title: '적외선 온도 어레이 센서',
    exp: 'IR Thermal Imaging',
    img: irThermalImg,
    description: '보급형 적외선 온도 어레이 센서를 통해 비접촉식 온도 측정',
  },
};

/**
 * 프로젝트 목록을 배열로 반환하는 함수
 * @returns {Array} 프로젝트 객체들의 배열
 */
export const getProjectsList = () => {
  return Object.values(productData);
};

/**
 * ID로 특정 프로젝트를 조회하는 함수
 * @param {number|string} id - 프로젝트 ID
 * @returns {object|null} 프로젝트 객체 또는 null
 */
export const getProjectById = (id) => {
  const projectId = parseInt(id);
  return productData[projectId] || null;
};

/**
 * 다음/이전 프로젝트 ID를 반환하는 함수
 * @param {number|string} currentId - 현재 프로젝트 ID
 * @returns {object} next, prev ID를 포함한 객체
 */
export const getAdjacentProjects = (currentId) => {
  const productIds = Object.keys(productData)
    .map((id) => parseInt(id))
    .sort((a, b) => a - b);
  const currentIndex = productIds.findIndex((id) => id === parseInt(currentId));

  return {
    prev: currentIndex > 0 ? productIds[currentIndex - 1] : null,
    next:
      currentIndex < productIds.length - 1
        ? productIds[currentIndex + 1]
        : null,
  };
};
