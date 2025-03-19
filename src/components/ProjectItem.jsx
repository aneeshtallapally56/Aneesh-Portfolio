import { MdArrowOutward } from "react-icons/md"


function ProjectItem() {
    return (
        < div className="mt-4">
        <div className="bg-linear-to-br from-[#37A68F ] to-[#01452B] w-full md:h-[24vw] h-[200px] rounded-3xl overflow-hidden "></div>
        <div className="mt-4">
          <h3 className="bg-gradient-to-b [text-shadow:_0px_0px_15px_rgb(255_255_255_/_15%)] from-zinc-300 to-zinc-300/95 text-transparent bg-clip-text text-xl md:text-2xl leading-none font-[Satoshi] tracking-tight capitalize font-semibold mb-2">Hello</h3>
          <div
          className="flex gap-2 flex-wrap w-[85%]">
              <div className="bg-[#01452B4d] border border-[#01452B]  rounded-md w-fit py-2 px-4 text-zinc-300 leading-none md:text-sm text-[12px] font-[Satoshi]  capitalize">UI/UX</div>
              <div className="bg-[#01452B4d] border border-[#01452B]  rounded-md w-fit py-2 px-4 text-zinc-300 leading-none md:text-sm text-[12px] font-[Satoshi]  capitalize">UI/UX</div>
              <div className="bg-[#01452B4d] border border-[#01452B]  rounded-md w-fit py-2 px-4 text-zinc-300 leading-none md:text-sm text-[12px] font-[Satoshi]  capitalize">UI/UX</div>
              <div className="bg-[#01452B4d] border border-[#01452B]  rounded-md w-fit py-2 px-4 text-zinc-300 leading-none md:text-sm text-[12px] font-[Satoshi]  capitalize">UI/UX</div>
              <p class="bg-gradient-to-b w-[95%] py-4 text-zinc-500 leading-none text-base font-[Satoshi] tracking-tight capitalize"><span class="text-zinc-300/90 font-semibold">october 2024 </span>provides roadmaps and resources for different job roles along with Ai Resume  provides roadmaps and resources  .</p>
          </div>
          
        </div>
        </div>
    )
}

export default ProjectItem
