import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef(null);
  useEffect(() => {
    
    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor.current, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);
  return (
    <div
      ref={cursor}
      className=" z-50 cursor fixed top-0 left-0 w-[15px] h-[15px] bg-white rounded-full pointer-events-none select-none"
    ></div>
  );
}
