'use client'
import { BsChevronDoubleRight } from "react-icons/bs";
import {motion} from 'framer-motion';

export default function Hero() {
	

	return(
		<main className="h-[100vh] w-full bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_GAApdLyGJG')]
		bg-cover relative bg-center overflow-x-hidden">
			<div className="absolute bg-gradient-to-b from-transparent 
			to-gray-900 h-[200px] left-0 bottom-0 w-full z-0"/>

			<div className="fixed bottom-0 left-0 p-2 rounded-lg bg-black/80 z-50 border-[1px] border-gray-300">
				<h1 className="text-md text-white font-bold">
					Last Date To Register : 06/09/2024
				</h1>
			</div> 
			<div className="h-full z-50 w-full bg-black/40 flex flex-col ">
				<p className="lg:text-[50px] md:text-[30px] text-2xl mt-8 text-center text-white font-bold">
					K.L.N College Of Engineering
				</p>
				<div className="flex md:flex-row items-center md:mt-6 mt-0 justify-center md:gap-1 flex-col">
					<p className="lg:text-[20px] md:text-md md:mt-0 mt-4 text-center text-white font-bold">
						Department of  
					</p>
					<p className="lg:text-[20px] md:text-md text-center text-white font-bold" >
						Electrical and Electronics Engineering
					</p>
				</div>
				<p className="lg:text-[20px] mt-4 md:text-sm text-center text-white font-bold">
					IIPC, ISTE, IIC sponsered & IEEE Orgnaized
				</p>
				<div className="flex flex-col md:mt-[50px] mt-[110px]">
					<motion.h1
					initial={{scale:4,opacity:0}} 
					whileInView={{scale:1,opacity:1}}
					once={true}
					transition={{duration:0.7}}
					className="md:text-[80px] sm:text-[70px] text-[50px] 
					p-0 m-0 font-nova text-center uppercase text-white">
						Echelon 2024
					</motion.h1>
					<motion.p 
					initial={{opacity:0}} 
					whileInView={{opacity:1}}
					once={true}
					transition={{duration:3}}
					className="w-full relative md:text-[25px] text-[18px] p-0 m-0 text-center font-semibold text-white">
						State Level Technical Symposium
					</motion.p>
					<div className="flex z-50 justify-center mt-14" >
						<button onClick={()=>{
							document.getElementById('Tech-text').scrollIntoView({
								behavior:'smooth'
							})
						}} className="rounded-full bg-white text-black 
						p-2 px-5 flex items-center gap-2 transition-all duration-200 
						ease-in-out hover:gap-5 shadow-lg hover:shadow-blue-600">
							Register Now
							<BsChevronDoubleRight className="h-5 w-5"/>
						</button>
					</div>

				</div>
			</div>
		</main>
	)
}