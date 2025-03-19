function Hover({text}) {
    return (
        <div className=" -bottom-22 left-5 absolute pointer-events-none text-base  px-4 py-2 rounded-lg bg-purple-900 border border-purple-700  tracking-tighter font-bold">
            <div className="absolute w-[20px] h-full left-1/2 border border-purple-700  bg-purple-900 rounded top-[-8px] origin-top-left rotate-45"></div>
            <span className="relative w-full h-full z-[999999999] bg-purple-900 text-purple-100 font-normal tracking-tight whitespace-nowrap text-base">{text}</span>
            <div class="absolute left-0 top-0 z-[999999] w-full h-full bg-purple-900 rounded-lg"></div>
        </div>

    )
}

export default Hover
