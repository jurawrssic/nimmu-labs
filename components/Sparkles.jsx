import { useEffect, useState } from 'react';

import {
  random,
  range,
  usePrefersReducedMotion,
  useRandomInterval,
} from '@/js/utils';

import {
  Wrapper,
  ChildWrapper,
  SparkleWrapper,
  SparkleSvg,
} from '@/styles/styled-components/sparkles';

const DEFAULT_COLOR = '#ffffff';

const generateSparkle = (color) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(-100, 150) + '%',
      left: random(-75, 150) + '%',
    },
  };

  return sparkle;
};

const Sparkle = ({ size, color, style }) => {
  const path = `M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013
    35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065
    44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5
    25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z`;

  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const getNextSparkles = (sparkles) => {
  const sparkle = generateSparkle(DEFAULT_COLOR);
  const now = Date.now();
  const nextSparkles = sparkles.filter((sp) => {
    const delta = now - sp.createdAt;
    return delta < 750;
  });

  nextSparkles.push(sparkle);

  return nextSparkles;
};

const SparklesComponent = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setSparkles(() => range(10).map(() => generateSparkle(color)));
  }, []);

  useRandomInterval(
    () => {
      setSparkles(getNextSparkles(sparkles));
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default SparklesComponent;
