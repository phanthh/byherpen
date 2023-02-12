import { useState, useRef, useEffect } from "react";

export const useStuck = <T extends HTMLElement>() => {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    let cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    );
    cachedRef && observer.observe(cachedRef);
    return () => {
      cachedRef && observer.unobserve(cachedRef);
    };
  }, [ref]);

  return [ref, stuck] as const;
};

export const useScrollDown = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    const updateLastScrollY = () => {
      if (lastScrollY < window.scrollY) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", updateLastScrollY);
    return () => {
      window.removeEventListener("scroll", updateLastScrollY);
    };
  }, []);

  return scrollDown;
};
