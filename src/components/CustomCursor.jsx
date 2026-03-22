import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only init cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    };

    const handleHover = () => {
      gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(99, 102, 241, 0.2)', borderColor: 'rgba(99, 102, 241, 0.5)', duration: 0.3 });
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
    };

    const handleHoverLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    const updateHoverStates = () => {
       document.querySelectorAll('a, button, input, textarea, .hover-target').forEach((el) => {
         el.addEventListener('mouseenter', handleHover);
         el.addEventListener('mouseleave', handleHoverLeave);
       });
    };
    
    updateHoverStates();
    const observer = new MutationObserver(updateHoverStates);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, input, textarea, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9998] transition-colors hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
    </>
  );
}
