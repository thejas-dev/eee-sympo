'use client'

import {useState,useEffect} from 'react';
import Image from "next/image";
import Hero from '../components/Hero';
import Events from '../components/Events';
import Footer from '../components/Footer';

export default function Home() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{setLoading(false)},[])

  return (
    <main className="min-h-screen">
        {
          loading &&
          <div className="fixed top-0 bottom-0 right-0 bg-black/70 z-[60] left-0 
          h-full w-full flex pt-[80%] justify-center">
            {/* From Uiverse.io by mobinkakei */} 
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
          </div>
        }
        {/*<img src="Header.jpg" alt=""
                className="w-[60%] mx-auto"
                />*/}
        <Hero />
        <Events />
        <Footer />

    </main>
  );
}
