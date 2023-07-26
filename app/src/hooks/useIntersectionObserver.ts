import { useEffect } from "react";

function useIntersectionObserver(
  element: React.RefObject<HTMLElement>,
  callback: () => void,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback();
      });
    }, options);
    if (element.current) observer.observe(element.current);

    return () => {
      if (element.current) observer.unobserve(element.current);
    };
  }, [element, callback, options]);
}

export default useIntersectionObserver;
