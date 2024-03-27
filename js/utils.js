import React from 'react';

const isRenderingOnServer = typeof window === 'undefined';
const QUERY = '(prefers-reduced-motion: no-preference)';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    let isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};

const getInitialState = () =>
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState(getInitialState);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
}

export { random, range, usePrefersReducedMotion, useRandomInterval };
