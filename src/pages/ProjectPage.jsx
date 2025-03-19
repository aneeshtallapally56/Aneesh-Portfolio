import Projects from "../components/Projects";
import { motion } from "framer-motion";

function ProjectPage() {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 600, damping: 25 } },
    };

    return (
        <div className="w-full py-24 md:px-10">

            <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                animate="show"
            >
                <motion.h2
                    variants={textVariants}
                    className="text-4xl md:text-5xl font-semibold tracking-tight font-[Italic] text-zinc-200 glow md:px-15 mt-10"
                >
                    Projects
                </motion.h2>
            </motion.div>

            <Projects />
        </div>
    );
}

export default ProjectPage;