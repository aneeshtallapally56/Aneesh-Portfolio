import { motion } from "framer-motion";
import pizza from "../assets/f-r-p-c.png";
import worldwise from '../assets/worldwisess.png';
import blog from '../assets/aneesh.blog-ss.png';
import ComingSoon from "./ComingSoon";
import { MdArrowOutward } from "react-icons/md";

const projects = [
   {
     id: 1,
     name: "Fast React Pizza Co.",
     img: pizza,
     bg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
     borderColor: "#EAB305", 
     techs: ["UI/UX", "React Js", "Redux"],
     date: "November 2024",
     description: "A sleek and responsive pizza delivery website built with React, featuring a seamless Cart and Order Search!",
     link:"https://fast-react-pizza-co-eta.vercel.app/"
   },
   {
     id: 2,
     name: "WorldWise",
     img: worldwise,
     bg: "bg-gradient-to-r from-[#00C46A] to-[#056a3a]",
     borderColor: "#00C46A",
     techs: ["UI/UX", "React Js", "Redux"],
     date: "December 2024",
     description: "A React-based travel tracker to log cities, record experiences, and relive your journeys.",
     link:"https://worldwise-gilt.vercel.app/"
   },
   {
     id: 3,
     name: "Aneesh.Blog",
     img: blog,
     bg: "bg-gradient-to-r from-[#7c65f4] to-[#6246E9]",
     borderColor: "#7c65f4",
     techs: [ "React Js", "Redux","Node Js","MongoDB"],
     date: "December 2024",
     description: "A full-stack blog reading website with user accounts, commenting, and an admin dashboard for content management.",
     link:"https://aneesh-blog.vercel"
   },
  
 ];
 
 function Projects() {
   return (
     <div className="flex flex-col justify-center mt-5 lg:mt-10 md:mx-8 md:px-3">
       <div className="grid grid-cols-1  gap-x-[10vw] gap-y-[3vw] md:grid-cols-2">
         {projects.map((project, index) => (
           <motion.div
             key={project.id}
             layoutId={project.id}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             transition={{ duration: 0.4, delay: index * 0.15 }}
             className="mt-4"
           >
             <div className={`${project.bg} w-full md:h-[24vw] h-[200px] rounded-3xl relative overflow-hidden flex justify-center items-end`}>
               <motion.img
                 src={project.img}
                 alt={project.name}
                 className="absolute lg:-bottom-14 bottom-0 w-[80%]"
                 initial={{ y: 0 }}
                 whileHover={{ y: -30 }}
                 transition={{ duration: 0.4, ease: "easeInOut" }}
               />
             </div>
             <div className="mt-4">
              <div className="flex justify-between items-center">
              
               <h3 className="bg-gradient-to-b from-zinc-300 to-zinc-300/95 text-transparent bg-clip-text text-xl md:text-2xl leading-none font-semibold mb-2">
                 {project.name}
               </h3>
               <motion.a 
               initial={{ scale: 1 }}
               whileHover={{scale:1.2}}
               transition={{ duration: 0.4, ease: "easeInOut" }}
                href={project.link} target="_blank" rel="noopener noreferrer"
                className=" text-white ml-2 text-4xl cursor-pointer mr-3 "><MdArrowOutward /></motion.a>
              </div>
               <div className="flex gap-2 flex-wrap w-[85%] mt-4">
                 {project.techs.map((tech, i) => (
                   <div
                     key={i}
                     className="rounded-md w-fit py-2 px-4 text-zinc-300 leading-none md:text-sm text-[12px] capitalize"
                     style={{ border: `1px solid ${project.borderColor}`, backgroundColor: `${project.borderColor}30` }} // ✅ Use inline styles
                   >
                     {tech}
                   </div>
                 ))}
                 <p className="w-[95%] py-4 text-zinc-500 leading-none text-base tracking-tight capitalize">
                   <span className="text-zinc-300/90 font-semibold">{project.date} - </span>{project.description}
                 </p>
               </div>
             </div>
           </motion.div>
         ))}
         <div className="  mt-5 bg-gradient-to-br from-[#6000B5] to-[#370067] w-full md:h-[24vw] h-[200px] rounded-3xl relative overflow-hidden flex justify-center items-center">
         <h1 className="md:text-4xl text-2xl  text-zinc-400 glow font-semibold text-center  font-[italic]"><ComingSoon /> </h1>
         
         </div>
       </div>
     </div>
   );
 }
 
 export default Projects;

