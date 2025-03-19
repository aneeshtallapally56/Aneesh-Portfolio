import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ loading, setLoading }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loading) {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        setCount(counter);
        if (counter === 100) {
          clearInterval(interval);
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const text = "Hi, I am Aneesh";
  const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 20 } },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="h-full w-full fixed top-0 left-0 z-[9999] bg-[#3B0664] flex flex-col items-center justify-center"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh", transition: { duration: 0.5, ease: "easeInOut" } }}
          style={{ willChange: "transform, opacity" }} 
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white flex"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "mr-2" : ""}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 text-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.div
            className="absolute text-4xl md:text-6xl lg:text-7xl font-medium bottom-20 right-10 text-zinc-300 opacity-50 font-[satoshi] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} 
          >
            {count}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;