import styled, { keyframes } from 'styled-components';

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;

const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

export { Wrapper, ChildWrapper, SparkleWrapper, SparkleSvg };
