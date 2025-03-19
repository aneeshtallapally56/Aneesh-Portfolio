import { IoLocate, IoLocation } from "react-icons/io5"
import HeroText from "./HeroText"

function Hero1() {
    return (
        <div className=" md:mt-30 lg:mt-10 md:mx-8  md:px-3 mt-30 ">
            <div className="w-fit justify-between flex  items-center md:gap-3 gap-1  py-2 mb-2 rounded-xl">
                <IoLocation className="text-zinc-500 " />
            <h5 className="text-zinc-500 font-bold tracking-tighter uppercase md:text-sm text-xs shadow-lg   ">Warangal, India</h5>
            </div>
            <div className="   text-zinc-400 opacity-85 [text-shadow:_0px_0px_5px_rgb(255_255_255_/30%)] md:text-[5vw] text-[4.2vmax] leading-[1.2] tracking-tighter">
           
<HeroText />
            </div>
        </div>
    )
}

export default Hero1
