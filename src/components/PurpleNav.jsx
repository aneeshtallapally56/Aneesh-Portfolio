import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";

const tabs = [
    {
        name: "Home",
        icon: <IoHomeOutline />,
        to: "/"
    },
    {
        name: "Projects",
        icon: <MdOutlineDesktopWindows />,
        to: "/projects"
    },
    {
        name: "About",
        icon: <CiUser />,
        to: "/about"
    }
];

function PurpleNav({activeTab, setActiveTab}) {
  
  console.log(activeTab);

  return (
    <div className="cursor-pointer shadow-[0_0_20px_#101010] text-purple-300 bg-purple-900/20 inline-flex justify-center items-center px-1 fixed border border-purple-700/50 backdrop-blur-sm rounded-full top-[3vh] left-1/2 -translate-x-1/2 z-50">
      <ul className="flex relative text-white font-semibold py-1">
        {tabs.map((tab) => (
          <Link to={tab.to} key={tab.name}>
            <li
              onClick={() => {
                setActiveTab(tab.name);
              }}
              className={`z-10 relative text-xl text-white flex items-center gap-2 mr-2 rounded-full md:px-6 px-4 py-4`}
            >
              {tab.icon}
              {activeTab === tab.name && (
                <motion.div
                  layoutId="purple-pill"
                  className="bg-purple-700/30 absolute -z-1 inset-0 rounded-full"
                />
              )}
              <div className="lg:block hidden text-sm">{tab.name}</div>
            </li>
          </Link>
        ))}
        <li  className="bg-gradient-to-br relative overflow-hidden from-[#bf35ff] to-[#5C00AD] font-semibold py-3 px-4 whitespace-nowrap ml-1 rounded-full w-fit">
        <a href="mailto:thallapallyaneesh7864@gmail.com" className="text-white">
    Contact Me
  </a>
          <motion.div
            className="absolute top-0 left-[-100%] w-6 h-[150%] bg-white blur-md rotate-12"
            animate={{ left: "120%" }}
            transition={{ duration: 2.5,repeatDelay: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default PurpleNav;