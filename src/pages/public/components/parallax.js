import React, { useEffect, useState } from 'react';

export const ParallaxElement = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${offsetY * 0.9}px)`,
        zIndex: "-1",
        height: '200px', // Adjust as needed
        background: 'url(/image/logo512.png) no-repeat right center/cover', // Background image or any content
      }}
      className="parallax-element"
    >
      {/* You can add any additional content here */}
    </div>
  );
};
