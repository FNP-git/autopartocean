import { useEffect } from 'react';

const useTypeAnimation = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const originalText = el.innerText;
            el.innerText = '';
            el.classList.add('typing');

            originalText.split('').forEach((char, i) => {
              setTimeout(() => {
                el.innerText += char;
              }, i * 60); // speed of typing
            });

            observer.unobserve(el); // run once
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [selector]);
};

export default useTypeAnimation;
