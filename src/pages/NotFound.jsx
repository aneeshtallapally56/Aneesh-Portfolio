import { Link } from "react-router"

function NotFound() {
    return (
        <div className="relative w-full h-screen bg-zinc-950 overflow-hidden">
            <div className="px-[4.5vw]">
                <div className="w-full h-screen flex flex-col md:gap-12 gap-4 justify-center items-center">
                <h1 class="text-zinc-500 md:text-5xl text-xl text-center font-semibold tracking-tighter ">Looks Like You have reached the wrong place !</h1>
                <div className="flex md:gap-12 gap-4 items-center">
                    <div className=" text-zinc-200 bg-gradient-to-br relative overflow-hidden from-[#bf35ff] to-[#5C00AD] font-semibold py-3 px-4 whitespace-nowrap ml-1 rounded-full w-fit">
                        <Link to="/">
                        Back to home</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
