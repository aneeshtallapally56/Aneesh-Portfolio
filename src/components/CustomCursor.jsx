import { useState, useEffect } from "react";
import arrow from "../assets/purple_default.webp";
import pointer from "../assets/purple_pointer.webp";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX-12, y: e.clientY-12 });


      const targetElement = e.target;
      setIsPointer(
        targetElement.closest("[class*=cursor-pointer]") || 
        targetElement.matches("[class*=cursor-pointer]")
      );
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div
      className="fixed z-[999] w-14 h-14 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img src={isPointer ? pointer : arrow} alt="cursor" />
    </div>
  );
}

export default CustomCursor;