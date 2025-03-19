import { motion } from "motion/react";
import { MdArrowOutward } from "react-icons/md";

function DropDown({ clicked }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={
        clicked ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }
      }
      transition={{ duration: 0.3 }}
      className="text-base flex flex-col px-6 py-3 bg-gradient-to-tl from-[#070707] via-[#171717] border border-zinc-600 z-[9999] rounded-3xl"
    >
      <a
href='https://www.linkedin.com/in/aneeshtallapally56' target='_blank'
        className="whitespace-nowrap flex gap-2 justify-between text-zinc-400 py-2 border-b border-zinc-700 hover:text-zinc-50 font-semibold items-center"
      >
        LinkedIn <MdArrowOutward className="text-xl" />
      </a>
      <a
href='https://github.com/aneeshtallapally56'target='_blank'
        className="whitespace-nowrap flex gap-2 justify-between text-zinc-400 py-2 border-b border-zinc-700 hover:text-zinc-50 font-semibold"
      >
        GitHub <MdArrowOutward className="text-xl" />
      </a>
      <a
href='mailto:thallapallyaneesh7864@gmail.com'target='_blank'
        className="whitespace-nowrap flex gap-2 justify-between text-zinc-400 py-2 border-b border-zinc-700 hover:text-zinc-50 font-semibold"
      >
        Email <MdArrowOutward className="text-xl" />
      </a>
    </motion.div>
  );
}

export default DropDown;