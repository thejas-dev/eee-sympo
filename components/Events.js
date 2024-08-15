'use client'
import Link from 'next/link';

export default function Events() {

	return (
		<main className="min-h-[100vh] w-full pt-5 pb-10 bg-gray-900" >
			<h1 id="Tech-text" className="text-center mb-10 md:text-[40px] pt-5 text-white text-2xl">
				Technical Events
			</h1>

			<div className="flex items-center md:flex-row flex-col">
				<div className="md:w-[50%] w-full flex items-center justify-center">
					<h1 className="text-[40px] text-white font-bold">
						Project Expo
					</h1>
				</div>
				<div className="md:w-[50%] w-full p-10 flex items-center justify-center">
					<Link href="/projectexpo">
						<img src="https://img.freepik.com/free-vector/general-business-squared-flyer-template_23-2148994485.jpg"
						alt=""
						className="rounded-xl cursor-pointer hover:scale-[105%] transition-all duration-200 
						ease-in-out aspect-square w-[400px]"
						/>
					</Link>
				</div>
			</div>

			<div className="bg-gray-600 w-[80%] mx-auto h-[2px]"/>

			<div className="flex items-center md:mt-0 mt-5 md:flex-row flex-col-reverse">
				<div className="md:w-[50%] w-full p-10 flex items-center justify-center">
					<Link href="/projectexpo">
						<img src="https://img.freepik.com/free-vector/general-business-squared-flyer-template_23-2148994485.jpg"
						alt=""
						className="rounded-xl cursor-pointer hover:scale-[105%] transition-all 
						duration-200 ease-in-out aspect-square w-[400px]"
						/>
					</Link>
				</div>
				<div className="md:w-[50%] w-full flex items-center justify-center">
					<h1 className="text-[40px] text-white font-bold">
						Paper Presentation
					</h1>
				</div>
			</div>

			<div className="bg-gray-600 w-[80%] mx-auto h-[2px]"/>


		</main>
	)
}