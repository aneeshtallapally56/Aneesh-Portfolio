import { motion } from "motion/react"

function HeroText() {
  const text = "A MERN Stack Developer who's Good at interactions and animations.";

  
 
    


  return (
    <motion.div  className= "  flex flex-wrap justify-start text-zinc-400 font-semibold opacity-85 [text-shadow:_0px_0px_5px_rgb(255_255_255_/30%)] md:text-[5vw] text-3xl leading-[1.08]  tracking-tighter">
      
      {text.split(" ").map((word,index)=>(

        <motion.span className={` inline-block cursor-default ${
          word === "MERN" || word === "Developer" || word==="Stack"||word==="interactions"||word==="animations." ? "text-zinc-200" : ""
        } ${word==="MERN"||word==="Developer"||word==="Stack"?"[text-shadow:_0px_0px_15px_rgb(255_255_255_/_60%)] glow ":""}`} key={index}  initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 650,
          damping: 25,
         
          delay: index * 0.03,
        }}
        
        >
          {
        word.split("").map((char,index)=>(
          <motion.span className="inline-block" key={index} whileHover={{
           y:-10,
           transition:{
             duration:0.3
           },
           ease:"easeOut"
          }} >{char}</motion.span>
        ))
      }
      <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
      
    </motion.div>
  )
}

export default HeroText
