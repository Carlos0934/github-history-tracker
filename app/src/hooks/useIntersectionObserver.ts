import { useEffect } from "react";

function useIntersectionObserver(
  element: React.RefObject<HTMLElement>,
  callback: () => void,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const current = element.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback();
      });
    }, options);
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [element, callback, options]);
}

export default useIntersectionObserver;
