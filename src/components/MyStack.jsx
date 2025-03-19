import next from '../assets/nextjs.65b8690e (1).svg'

function MyStack() {
    return (

    <div className=" mt-20 md:mx-8  md:px-3">
 <h2 className=" text-4xl md:text-5xl font-semibold tracking-tight font-[Italic] text-zinc-200 glow  ">My Stack</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  items-center gap-10 justify-center mt-12 place-items-center">
        <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-r from-cyan-300 to-cyan-500 p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white drop-shadow-[-5px_5px_1px_#101010] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">React</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">JavaScript Library</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-r from-slate-100 to-slate-300 p-2 rounded-xl flex items-center">
            <img src={next} alt="" />
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">Next Js</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">React Framework</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-r from-sky-400 to-sky-500 p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white drop-shadow-[-5px_5px_1px_#101010] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">Tailwind CSS</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">CSS FrameWork</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-r from-green-600 to-green-700  p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-white drop-shadow-[-5px_5px_1px_#101010] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">Node Js</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">JavaScript Runtime</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-r from-slate-100 to-slate-300 p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-black drop-shadow-[-5px_5px_1px_#909090] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">Express</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">NodeJs Framework</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-t from-green-600 to-green-700 p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-white drop-shadow-[-5px_5px_1px_#101010] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">MongoDB</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">NOSQL Database</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-t from-red-700 to-red-500 p-2 rounded-xl flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white drop-shadow-[-5px_5px_1px_#101010] font-bold text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="160" cy="96" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="160" cy="416" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368V144"></path><circle cx="352" cy="160" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 208c0 128-192 48-192 160"></path></svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">Git</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">Version Control</p>

            </div>
           </div>
           <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-t from-sky-50 to-sky-200 p-2 rounded-xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48">
<path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path>
</svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">C++</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">Programming Language</p>

            </div>
           </div>
           {/* <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-t from-yellow-400 to-yellow-500 p-2 rounded-xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
</svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">JavaScript</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">ScriptingLanguage</p>

            </div>
           </div> */}
            <div className="md:w-[310px] w-[300px] h-[90px]  hover:scale-105 transition-all ease-out duration-300 hover:drop-shadow-[0_0px_1px_#303030]  flex p-2 gap-4 text-zinc-300 justify-between overflow-hidden icon origin-center border border-t-zinc-800 border-x-zinc-800 border-b-zinc-700 shadow-[0_-10px_25px_#070707] items-center bg-gradient-to-b to-[#070707] from-[#151515] rounded-2xl">
            <div className="flex gap-6 items-center">

            <div className="w-15 h-15 bg-gradient-to-t from-yellow-400 to-yellow-500 p-2 rounded-xl flex items-center">
           
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
</svg>
            </div>
            <h3 className="text-zinc-300 md:text-base text-sm font-semibold font-[Satoshi]">JavaScript</h3>
            </div>
            <div className="flex gap-6">
               
                <p className="text-zinc-500 md:text-sm text-[12px] font-[Satoshi] px-2 bg-[#242424] whitespace-nowrap rounded">Script Language</p>

            </div>
           </div>

    </div>
    
</div>
    )
}

export default MyStack
