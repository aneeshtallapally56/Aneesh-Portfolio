import { useState, useEffect, useCallback } from "react";
import arrow from "../assets/purple_default.webp";
import pointer from "../assets/purple_pointer.webp";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);


  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX - 12, y: e.clientY - 12 });

    const targetElement = e.target;
    setIsPointer(
      targetElement.closest("[class*=cursor-pointer]") ||
      targetElement.matches("[class*=cursor-pointer]")
    );
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      className="fixed z-[999] w-14 h-14 pointer-events-none transition-transform duration-[0ms]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: "transform", 
      }}
    >
      <img
        src={isPointer ? pointer : arrow}
        alt="cursor"
        className="w-full h-full"
      />
    </div>
  );
}

export default CustomCursor;