import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';
import { motion } from "motion/react"

function Footer({activeTab, setActiveTab}) {
    const now  = new Date();
    const year = now.getFullYear();
    return (
       <footer className=" w-full tracking-tight capitalize text-zinc-400 font-semibold pt-8 pb-24 border-t border-zinc-700 px-[5vw]">
        <div className="w-fit flex flex-wrap md:gap-24 gap-12 ">
            <div  >
            <h2 className="uppercase text-zinc-500 text-xs font-bold ">Navigation</h2>
            <ul className="mt-4 flex flex-col gap-3">
            <li><Link to="/" className="block hover:text-zinc-300 transition-all tracking-tight ease-out duration-500 capitalize w-fit cursor-pointer">Home</Link></li>
<li><Link to="/projects" onClick={()=>setActiveTab("Projects")} className="block hover:text-zinc-300 transition-all tracking-tight ease-out duration-500 capitalize w-fit cursor-pointer" >Projects</Link></li>
<li><Link to="/about" onClick={()=>setActiveTab("About")} className="block hover:text-zinc-300 transition-all tracking-tight ease-out duration-500 capitalize w-fit cursor-pointer">About</Link></li>
                </ul>
            </div>
            <div>
            <h2 className="uppercase text-zinc-500 text-xs font-bold ">Contacts</h2>
            <ul className="mt-4 flex flex-col gap-1"> 
                <li><a href='https://www.linkedin.com/in/aneeshtallapally56' target='_blank' className="hover:text-zinc-200 flex w-auto justify-between items-center transition-all tracking-tight ease-out duration-500 cursor-pointer ">LinkedIn<MdArrowOutward  className="ml-2 text-xl"/></a></li>
                <li><a href='https://github.com/aneeshtallapally56'target='_blank' className="hover:text-zinc-200 w-auto  justify-between items-center flex transition-all tracking-tight ease-out duration-500 cursor-pointer">Github<MdArrowOutward  className="ml-2 text-xl"/></a></li>
                <li><a href='mailto:thallapallyaneesh7864@gmail.com'target='_blank'className="hover:text-zinc-200 w-auto  justify-between items-center  flex transition-all tracking-tight ease-out duration-500 cursor-pointer">Email<MdArrowOutward  className="ml-2 text-xl"/></a></li>
                <li><a href='https://www.linkedin.com/in/aneeshtallapally56'target='_blank'className="hover:text-zinc-200 w-auto  justify-between items-center  flex transition-all tracking-tight ease-out duration-500">Resume<MdArrowOutward  className="ml-2 text-xl"/></a></li>
                </ul>
            </div>
            
        </div>
        <div className='mt-12 w-full flex flex-wrap justify-between md:gap-6 gap-10'>
            <div>
            <p className='text-zinc-500 font-semibold pb-2'>
©  {year}. <span className='text-zinc-400'>Aneesh T</span>   All right reserved.
</p>
<p class="text-zinc-700  font-semibold">Crafted with <span class="text-zinc-600">React JS</span> and <span class="text-zinc-600">Tailwind CSS</span>.</p>
            </div>
            <div className='flex gap-4 items-center '>
                <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className='bg-gradient-to-br from-[#c445ff] to-[#ab04ff] w-3 h-3 rounded-full shadow-[0_0_10px_#ab04ff]'></motion.div>
                <div class="capitalize text-zinc-500">Available for work</div>
            </div>

          </div>
       </footer>
    )
}

export default Footer
