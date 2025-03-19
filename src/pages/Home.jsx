import { useEffect, useState } from "react"
import AboutMe from "../components/AboutMe"
import Hero1 from "../components/Hero1"
import LightDiv from "../components/LightDiv"
import MyStack from "../components/MyStack"
import NavBar from "../components/NavBar"
import Projects from "../components/Projects"
import { AnimatePresence, domAnimation, LazyMotion } from "motion/react"
import WhyChooseMe from "../components/WhyChooseMe"

function Home({loading , activeTab , setActiveTab}) {
 
    return (
<LazyMotion features={domAnimation}>
        {!loading&& <div>
            <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
<LightDiv /> 
            <Hero1 />
            <h2 className="  text-zinc-400 glow md:text-3xl lg:text-4xl text-2xl  font-bold  font-[italic] leading-none tracking-tighter mt-20 md:mx-8  md:px-3  ">Selected Projects</h2>
           <AnimatePresence mode="wait">

            <Projects />
           </AnimatePresence>
            

            <MyStack />


            <WhyChooseMe />

           

            <AboutMe />

          
            
        </div>}

</LazyMotion>
    )
}

export default Home
