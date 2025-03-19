import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

const words = ["Developer", "Problem-solver", "Tech Enthusiast"];
function ChangingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); 

        return () => clearInterval(interval); 
    }, []);

    return (

        

            <span className=" relative top-[-12px]  text-[16px] text-zinc-500 inline-block  whitespace-nowrap ">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4,ease: "easeInOut" }}
                        className="absolute"
                        >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        
        
    )
}

export default ChangingText
