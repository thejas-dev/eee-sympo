
import { MdOutlineCalendarMonth, MdOutlineLocalPhone, 
	MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";

export default function Footer() {

	return(
		<main className="w-full bg-gray-900 pb-[100px]" >
			<div className="flex items-center gap-5 text-yellow-500 justify-center">
				<MdOutlineCalendarMonth className="lg:h-14 md:h-10 h-8 lg:w-14 md:w-10 w-8"/>
				<h1 className="font-mono lg:text-[50px] md:text-[30px] text-2xl">
					20-9-2024 (Friday)
				</h1>
			</div>

			<h1 className="py-2 lg:text-[50px] md:text-[30px] text-2xl font-bold md:mt-10 
			mt-8 text-white text-center">
				KLN College Of Engineering
			</h1>
			<a target="_default" href="https://maps.app.goo.gl/notyognpdcCgxGLr8">
				<p className="py-2 lg:text-[25px] md:text-[20px] text-md font-semibold md:mt-3 text-white cursor-pointer text-center flex items-center
				hover:text-blue-500 transition-all duration-200 ease-in-out justify-center gap-2">
					47c, Pottapalayam, Tamil Nadu - 630612.
				</p>
			</a>
			<div className="flex md:flex-row justify-center md:gap-5 mt-5 flex-col">
				<p className="py-2 lg:text-[25px] md:text-[20px] text-md font-semibold text-white text-center flex items-center 
				justify-center gap-2">
					<MdOutlineLocationOn className="h-6 w-6"/>
					PG Conference Hall
				</p>
				<p className="py-2 lg:text-[25px] md:text-[20px] text-md font-semibold text-white text-center flex items-center 
				justify-center gap-2">
					<MdOutlineEmail className="h-6 w-6"/>
					echelon@klnce.edu
				</p>
				<p className="py-2 lg:text-[25px] md:text-[20px] text-md font-semibold text-white text-center flex items-center 
				justify-center gap-2">
					<MdOutlineLocalPhone className="h-6 w-6"/>
					+91 8825677855
				</p>

			</div>
			<div className="px-5">
				<button className="px-10 mt-10 bg-red-500 mx-auto py-2 
				rounded-lg flex items-center md:w-[40%] hover:scale-[110%] 
				transition-all duration-200 ease-in-out w-full text-white text-[20px] justify-center">
					Register Now
				</button>	

			</div>

		</main>
	)
}