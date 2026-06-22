import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      className="scroll-progress" 
      style={{ 
        width: `${progress}%`, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        height: '3px', 
        background: 'linear-gradient(90deg, #FF4D9D, #E8B4B8)', 
        zIndex: 9999,
        transition: 'width 0.1s ease'
      }} 
    />
  );
}
