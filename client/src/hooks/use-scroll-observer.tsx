import { useEffect, useState, useRef, RefObject } from "react";

interface UseScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollObserver<T extends HTMLElement>(
  options: UseScrollObserverOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
