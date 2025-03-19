import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const dotsArray = ["", ".", "..", "..."];
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => dotsArray[(dotsArray.indexOf(prev) + 1) % dotsArray.length]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="lg:text-4xl text-2xl font-bold  text-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Coming Soon<span>{dots}</span>
    </motion.div>
  );
}