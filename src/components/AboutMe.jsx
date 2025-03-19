import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import luffy4 from "../assets/luffy4.png";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };


  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div ref={ref} className="mt-10 md:mx-6 md:px-3 md:h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 650, damping: 25 }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-200 glow mb-6"
      >
        About me
      </motion.h2>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-zinc-500 flex flex-col items-center justify-center mt-2"
      >
        <div className="w-full mx-auto flex flex-col-reverse md:flex-row xl:gap-24 justify-between lg:items-start">

          <motion.div variants={childVariants} className="md:w-1/2 w-full text-left md:py-16 pr-3 mt-8 md:mt-0">
            <h2 className="text-zinc-50 text-3xl font-semibold mb-6">Hi👋🏻, I’m Aneesh,</h2>
            <div className="text-zinc-500 lg:text-xl text-lg mb-4 font-semibold">
              <motion.p variants={childVariants} className="lg:text-xl text-lg mb-4">
                I like building <span className="text-zinc-300">interactive websites that keep users engaged.</span>
              </motion.p>
              <motion.p variants={childVariants} className="lg:text-xl text-lg mb-4">
                Currently pursuing my <span className="text-zinc-300">B.Tech in MME at NIT Warangal (3rd year).</span>
              </motion.p>
              <motion.p variants={childVariants} className="lg:text-xl text-lg mb-4">
                Passionate about building web applications with <span className="text-zinc-50">MERN stack</span> and{" "}
                <span className="text-zinc-50">React JS</span>.
              </motion.p>
              <motion.p variants={childVariants} className="lg:text-2xl text-lg mb-4 mt-10 capitalize text-zinc-400 font-bold">
                Looking for a Frontend/Full Stack Developer?
              </motion.p>
              <div className="flex items-center gap-8">
                <motion.a
                  variants={childVariants}
href='mailto:thallapallyaneesh7864@gmail.com'target='_blank'
                  className="bg-gradient-to-br font-semibold w-fit text-lg mt-2 text-center inline-block whitespace-nowrap from-[#bf35ff] to-[#5C00AD] text-zinc-50 py-3 px-6 rounded-full hover:opacity-85"
                >
                  Hire Me
                </motion.a>
                <motion.a variants={childVariants} href="" className="text-purple-400 px-8 py-3 text-lg relative">
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>


          <motion.div variants={childVariants} className="relative md:w-[500px] h-full md:pt-0 pt-12 border border-white flex justify-center items-center">
            <div className="relative w-full h-auto overflow-hidden">
              <div className="w-full h-auto">
                <img src={luffy4} alt="Luffy" className="w-full h-[300px] object-contain md:h-[400px] lg:h-[550px] " />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;