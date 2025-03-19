import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gp from "../assets/image.png"
import fm from "../assets/image copy.png"
import Hover from './Hover';
import { useState } from "react";
import { motion } from "motion/react"
import Hover2 from './Hover2';
import Test from './Test';

gsap.registerPlugin(ScrollTrigger);

function WhyChooseMe() {
    const parent = useRef(null);
    const container = useRef(null);
    const [hovered1, setHovered1] = useState(""); 
    const [hovered2, setHovered2] = useState("");

    useLenis((lenis) => {
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return value !== undefined ? lenis.scrollTo(value) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            }
        });

        lenis.on('scroll', ScrollTrigger.update);
    });

    useEffect(() => {
        let ctx = gsap.matchMedia();

        ctx.add("(min-width: 768px)", () => {
            gsap.fromTo(
                container.current,
                { opacity: 0, y: 600 },
                {
                    opacity: 1,
                    y: 10,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: parent.current,
                        start: "top top", 
                        end:"bottom 20%",
                        toggleActions: "play none none reverse", 
                       pin: true,
                       scrub:2
                      },
                }
            );
        });
       

        return () => ctx.revert();
    }, []);

    return (
        <ReactLenis root options={{ duration: 0.8, smooth: true }}>
            <div ref={parent} className="lg:h-screen relative w-full  text-white flex flex-wrap  items-start justify-between  mt-20 md:mx-6  md:px-3">

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-full p-4">
                    <div className="text-[5vmax] whitespace-nowrap leading-none font-bold tracking-tighter">
                        Why Choose Me?
                    </div>
                    <div className='   flex gap-4 mt-4 justify-around w-full items-center'>
                    <div
            className="md:w-32 md:h-32 w-15 h-15 "
            
          >
           <motion.div 
           className='relative '
           onHoverStart={() => setHovered1("GSAP")}
           onHoverEnd={() => setHovered1("")}>

            <img src={gp} alt="GSAP"  />
            <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered1 ? 1 : 0, y: hovered1 ? 0 : 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-20"
        >
          {hovered1 && <Hover text={hovered1} />}
        </motion.div>
           </motion.div>
           
          </div>

                       
          <motion.div
            className="md:w-20 md:h-20 w-15 h-15 "
          
          >
         <motion.div
         className='relative'
         onHoverStart={() => setHovered2("Framer Motion")}
         onHoverEnd={() => setHovered2("")}>
         
         <img src={fm} alt="Framer Motion" />
         <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered2 ? 1 : 0, y: hovered2 ? 0 : 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-20"
        >
          {hovered2 && <Hover2 text={hovered2} />}
        </motion.div>
         </motion.div>
           
          </motion.div>
         
          
                    </div>
                  
                </div>

                {/* Right Column */}
                <div ref={container} className="w-full md:w-1/2 flex flex-col md:justify-around  h-full p-4">
                   <div className='mb-4'>
                    <h2 className='md:text-2xl lg:text-3xl text-xl tracking-tight text-zinc-400 font-semibold'>Specialization in Animation and Interactions.</h2>
                    <p  className='text-zinc-500 mt-3 md:text-base text-sm font-semibold tracking-tighter capitalize'>I specialize in creating interactive and scroll-based animations using GSAP, Framer Motion, and other advanced tools, delivering dynamic and engaging experiences.</p>
                   </div>
                   <div className='mb-4'>
                    <h2 className='md:text-2xl lg:text-3xl text-xl tracking-tight text-zinc-400 font-semibold' >Up To Date with Design and Development Trends</h2>
                    <p className='text-zinc-500 mt-3 md:text-base text-sm font-semibold tracking-tighter capitalize '>I’m passionate about staying up-to-date with the latest development trends, which helps me stay ahead in adopting modern design practices.

</p>
                   </div>
                   <div className='mb-4'>
                    <h2 className='md:text-2xl lg:text-3xl text-xl tracking-tight text-zinc-400 font-semibold' >Diverse technical expertise spanning front-end and back-end development seamlessly.</h2>
                    <p className='text-zinc-500 mt-3 md:text-base text-sm font-semibold tracking-tighter capitalize' >Full Stack Developer skilled in React, Node.js, and MongoDB, building scalable applications with seamless user experiences, optimized performance, security, and maintainable code.</p>
                   </div>
                </div>
            </div>
        </ReactLenis>
    );
}

export default WhyChooseMe;