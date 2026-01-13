import * as d3 from 'd3';
import { useRef, useEffect, useState } from 'react';
import useIsInView from '../../../hooks/useIsInView';

/**
 * AnimatedPath 컴포넌트
 * SVG path를 stroke-dasharray 애니메이션으로 그려나가는 효과를 제공합니다.
 */

export const AnimatedPath = ({
  data,
  width = 144, // <- LandingPage 에서 넘기는 width 그대로 사용
  height = 144, // ✅ 새로 추가: 넘겨준 height 사용
  strokeWidth = 2,
  startDelay = 0,
  delay = 0,
  scale = 1,
  pathClassName = 'path',
  isReverse = false,
  color = '#002AFF',
  duration = 600,
  triggerMode = 'manual', // "manual" | "viewport"
  isTrigger = true,
  startWithReserve = false,
  ease = d3.easeQuadOut,
  viewportOptions = {},
}) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstCycle, setIsFirstCycle] = useState(true);

  // viewport 감지 훅
  const [viewportRef, isInView] = useIsInView({
    threshold: 0.3,
    triggerOnce: true,
    ...viewportOptions,
  });

  // 실제 트리거 여부
  const shouldTrigger = triggerMode === 'viewport' ? isInView : isTrigger;

  // SVG 초기 세팅 + path 생성
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // ✅ width, height 둘 다 prop 기반으로 설정
    svg.attr('width', width * scale).attr('height', height * scale);

    const gOriginalPath = svg
      .append('g')
      .attr('class', `g_original_${pathClassName}`)
      .attr('transform', `translate(0,0) scale(${scale})`);

    pathRef.current = gOriginalPath
      .append('path')
      .attr('class', `path_original_${pathClassName}`)
      .attr('d', data)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', strokeWidth)
      .node();

    const pathNode = pathRef.current;
    const pathElement = d3.select(pathNode);
    const length = pathNode.getTotalLength();

    // 처음 상태: 그려지지 않은(혹은 다 그려진) 상태
    pathElement
      .attr('stroke-dasharray', `${length} ${length}`)
      .attr('stroke-dashoffset', startWithReserve ? length : 0);

    setIsLoaded(true);
  }, [
    data,
    width,
    height, // ✅ height 변경에도 다시 세팅되도록
    scale,
    pathClassName,
    strokeWidth,
    color,
    startWithReserve,
  ]);

  // 애니메이션 동작
  useEffect(() => {
    if (!isLoaded || !pathRef.current) return;

    const pathNode = pathRef.current;
    const pathElement = d3.select(pathNode);
    const length = pathNode.getTotalLength();

    // 이전 애니메이션 중단
    pathElement.interrupt();

    if (shouldTrigger) {
      if (!isReverse) {
        // 그려지는 방향
        pathElement
          .attr('stroke-dasharray', `${length} ${length}`)
          .attr('stroke-dashoffset', length)
          .transition()
          .delay(delay + startDelay)
          .ease(ease)
          .duration(duration)
          .attr('stroke-dashoffset', 0);
      } else {
        // 지워지는 방향
        if (!(isFirstCycle && startWithReserve)) {
          pathElement
            .attr('stroke-dasharray', `${length} ${length}`)
            .attr('stroke-dashoffset', 0)
            .transition()
            .delay(0)
            .ease(ease)
            .duration(duration)
            .attr('stroke-dashoffset', length);
        }
      }

      if (isFirstCycle) setIsFirstCycle(false);
    } else {
      // 트리거 안 됐을 때는 초기 상태 유지
      pathElement.attr('stroke-dashoffset', startWithReserve ? length : 0);
    }
  }, [
    isReverse,
    shouldTrigger,
    isLoaded,
    startWithReserve,
    isFirstCycle,
    delay,
    startDelay,
    duration,
    ease,
  ]);

  // 색상만 변경됐을 때
  useEffect(() => {
    if (isLoaded && pathRef.current) {
      d3.select(pathRef.current).attr('stroke', color);
    }
  }, [color, isLoaded]);

  return (
    <svg
      ref={(node) => {
        svgRef.current = node;
        if (triggerMode === 'viewport' && viewportRef) {
          viewportRef.current = node;
        }
      }}
    />
  );
};

export default AnimatedPath;
