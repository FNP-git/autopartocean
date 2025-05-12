import { useEffect } from 'react';

const useScrollAnimate = (selectorList = []) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selectorList.join(', '));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selectorList]);
};

export default useScrollAnimate;
