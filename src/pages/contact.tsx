import Main from "portfolio/Layouts/Main";
import MobSidebar from "portfolio/Layouts/MobSidebar";
import Sidebar from "portfolio/Layouts/Sidebar";
import React from "react";
import { RiTimerFill } from 'react-icons/ri';

export default function contact() {
  return (
    <>
      <Main />
      <div className="absolute top-0 z-1 h-[vh] w-[100vw]">
        <div className="overflow-y-auto h-[100vh]">
            <div className="relative">
                <h1 className="font-extrabold text-center pt-10 md:pt-24 text-5xl md:text-8xl text-[#25292c]">
                    CONTACT
                </h1>

                <h1
                    className="absolute left-4 top-1 md:top-7 font-extrabold pt-10 md:pt-20 text-4xl md:text-7xl text-white right-5 text-center">
                    CONTACT<span className="text-[#a89a18]"> ME</span>
                </h1>
            </div>

           
            <div className=" lg:w-[80%] mx-auto  text-center">
                <div className="md:px-40 px-4 py-8 md:space-y-3">
                    <div className=" text-white font-bold text-lg">
                        <div><img src="" /></div>
                        <div className="">
                            <h1>Location : <span> Lagos, Nigeria. </span></h1>
                        </div>
                    </div>

                    <div className=" text-white text-center align-center font-bold text-lg">
                        <div><img src="" /></div>
                        <div className="">
                            <h1>Mobile Number: +(234) 8130337697</h1>
                        </div>
                    </div>

                </div>
            </div>

      

           

           

            <div className=" lg:w-[80%] mx-auto py-10 md:px-40 px-20 space-x-2 flex flex-row">
                <div
                    className="h-[50px] w-[50px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-8 flex items-center justify-center">
                    <a href="#">
                        <img className="h-[30px] w-[30px]" src="./assets/pngfind.com-logo-de-facebook-png-2276513.png" />
                    </a>
                </div>
                <div
                    className="h-[50px] w-[50px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-8 flex items-center justify-center">
                    <span className="mdi mdihome-outline">
                        <a href="#"><img className="h-[20px] w-[30px]"
                                src="./assets/pngfind.com-logo-twitter-png-transparente-4542609.png" /></a></span>
                </div>
                <div
                    className="h-[50px] w-[50px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-8 flex items-center justify-center">
                    <a href="#"><img className="h-[30px] w-[30px]" src="./assets/github-6-32.png" /></a>
                </div>
                <div
                    className="h-[50px] w-[50px] bg-[#25292c] hover:bg-[#a89a18] rounded-full flex items-center justify-center">
                    <a href="#"><img className="h-[30px] w-[30px]"
                            src="./assets/white-play-button-transparent-18-removebg-preview.png" /></a>
                </div>
            </div>

           
            <form action="" className="lg:w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row mb-5 px-20 md:px-40 md:space-x-8">
                    <div className="mb-5 w-full">
                        <input type="text" id="name" name="name" placeholder="YOUR NAME "
                            className="border border-[#25292c] shadow-lg p-3 w-full rounded-full bg-[#25292c] mb-4 text-sm md:text-md font-semibold pl-5" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="text" id="name" name="name" placeholder="YOUR EMAIL "
                            className="border border-[#25292c] shadow-lg p-3 w-full rounded-full bg-[#25292c] mb-4 text-sm md:text-md font-semibold pl-5" />
                    </div>
                </div>
                <div className="mb-5 px-20 md:px-40">
                    <input type="text" id="name" name="name" placeholder="ENTER SUBJECT "
                        className="border border-[#25292c] shadow-lg p-3 w-full rounded-full bg-[#25292c] mb-4 text-sm md:text-md font-semibold pl-5" />
                </div>
               
                <div className="mb-5 px-20 md:px-40">
                    <textarea placeholder="Enter Message"
                        className="border border-[#25292c] shadow-lg p-3 w-full rounded-full bg-[#25292c] mb-4 text-sm md:text-md font-semibold pl-5"></textarea>
                </div>

                <div className="md:mb-10 px-20 flex items-center justify-center w-[100%] pt-8 md:px-40 mb-24">
                    <button
                        className="px-6 py-2 w-full md:px-8 md:py-2 bg-transparent border-solid border-2 border-[#a89a18] rounded-full drop-shadow-lg text-sm md:text-xl text-white duration-300 hover:bg-[#a89a18] hover:text-white">
                        Send
                    </button>
                </div>
            </form>
            <Sidebar />
        </div>
        <MobSidebar/>
    </div>
    </>
  );
}
