import { MdArrowOutward, MdFastForward } from "react-icons/md"
import ChangingText from "./ChangingText"
import { Link } from "react-router"
import { motion } from "motion/react"
import { useState } from "react"
import DropDown from "./DropDown"
function Hover({text}) {
    return (
        <div className=" -bottom-24 -left-5.5 absolute pointer-events-none text-base  px-4 py-2 rounded-lg bg-purple-900 border border-purple-700  tracking-tighter font-bold">
            <div className="absolute w-[20px] h-full left-1/2 border border-purple-700  bg-purple-900 rounded top-[-8px] origin-top-left rotate-45"></div>
            <span className="relative w-full h-full z-[999999999] bg-purple-900 text-purple-100 font-normal tracking-tight whitespace-nowrap text-base">{text}</span>
            <div class="absolute left-0 top-0 z-[999999] w-full h-full bg-purple-900 rounded-lg"></div>
        </div>

    )
}




function NavBar({activeTab, setActiveTab}) {
    const [hovered, setHovered] = useState("");
    const [clicked, setClicked] = useState(false);
    return (
        <div className=" z-10 lg:flex text-zinc-300 justify-between  hidden py-[3vh] relative w-full px-20 font-semibold text-xl " >
           <Link to="/about" onClick={()=>setActiveTab("About")} className="flex gap-3 font-[650] text-zinc-400 items-center justify-center tracking-tight  " >
           <span className="cursor-pointer">Aneesh T</span>
               
               <div className="bg-purple-800 w-1 h-1 rounded-full"></div>
        <ChangingText />
           </Link>
           <div className=" rounded-full flex gap-4 items-center font-semibold   px-6 py-3">
           <motion.a
  onHoverStart={() => setHovered("Links")}
  onHoverEnd={() => setHovered("")}
 onClick={() => setClicked(!clicked)}
  target="_blank"
  rel="noopener noreferrer"
  className="mr-4 text-2xl  z-50 relative  pointer-events-auto inline-flex items-center justify-center w-fit"
>
@
<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: clicked ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full -left-20 mt-2" // 
          >
            <DropDown clicked={clicked} />
          </motion.div>
</motion.a>
                  <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hovered && !clicked ? 1 : 0, 
            y: hovered && !clicked ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-20"
        >
          {hovered && <Hover text={hovered} />}
        </motion.div>

              
               <div className=" hover:bg-zinc-900 transition-all ease-in-out duration-300">
               <a href="#" className=" text-zinc-400 text-base  flex gap-2  ">Resume<MdArrowOutward  className="text-2xl"/></a>
               </div>
              
           </div>
        </div>
    )
}

export default NavBar
