import { useEffect } from "react";

function FixTawkPosition() {
  useEffect(() => {
    const fix = () => {
      const wrapper = document.querySelector('div[id^="tawk_"]');
      if (wrapper) {
        wrapper.style.position = "fixed";
        wrapper.style.bottom = "0px";
        wrapper.style.right = "0px";
        wrapper.style.left = "auto";
        wrapper.style.zIndex = "2147483647";
      }
    };

    // Run fix repeatedly for first 10s
    const interval = setInterval(fix, 1000);
    setTimeout(() => clearInterval(interval), 10000);

    // Run once immediately too
    fix();

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FixTawkPosition;
