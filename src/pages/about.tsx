import Main from "portfolio/Layouts/Main";
import MobSidebar from "portfolio/Layouts/MobSidebar";
import Sidebar from "portfolio/Layouts/Sidebar";
import React from "react";
import { RiTimerFill } from 'react-icons/ri';

export default function about() {
  return (
    <>
      <Main />
      <div className=" absolute top-0  h-[vh] w-[100vw] ">
        <div className="overflow-y-auto h-[100vh]">
          <div className="relative ">
            <h1
              className="font-extrabold text-center pt-10 md:pt-20 text-5xl md:text-8xl
                text-[#25292c] "
            >
              MY STATS
            </h1>

            <h1 className="absolute left-4 top-1 md:top-3 font-extrabold pt-10 md:pt-20 text-4xl  md:text-7xl text-white right-5 text-center ">
              ABOUT <span className="text-[#a89a18]"> ME</span>
            </h1>
          </div>

          <Sidebar />
          <div className="flex flex-col lg:flex-row  items-center  md:justify-evenly md:pt-10  lg:px-12 px-4 py-10 ">
            <div className="text-white md:w-[80%] lg:w-[30%]   text-center md:text-justify md:space-y-12">
              <h1 className="text-2xl md:text-3xl font-bold  md:mt-20 mb-2 ">
                INFORMATION{" "}
              </h1>
              <p className="text-lg text-justify md:text-2xl mb-3 pt-4 px-2">
                I am a full stack developer, with a broad range of expertise in a variety
                of front end and back end languages, responsive frameworks,
                databases, and best coding techniques.
              </p>
              <p className="text-lg px-2  ">
                Becoming the best web
                developer I possibly can and giving back everything I know and am
                capable of to the technology sector are my only goals.
              </p>
              <div className=" md:py-2 py-4 px-2 ">
                <button className="px-8 py-2 bg-transparent  border-solid border-2 border-[#a89a18] rounded-full drop-shadow-lg text-xl text-white duration-300 hover:bg-[#a89a18] hover:text-white">
                  Download CV
                </button>
              </div>
            </div>

            <div className="w-[100%] md:w-[80%] lg:w-[50%]   grid grid-cols-2  gap-6">
              <div className="w-full  border-[#5d6972] hover:border-[#a89a18]  border-solid border border-6 mb-6 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg ">
                <h1 className="text-[#a89a18] text-5xl md:text-7xl font-extrabold text-center pt-8">
                  30+
                </h1>
                <div className="flex col items-center justify-center mt-0 pt-0 space-x-4">
                  <p className="text-white text-lg font-extrabold  pt-6">
                    <hr className="w-[40px] border-solid text-[#25292c]  border-2 border-[#5d6972]" />
                    <span className="text-white text-2xl text font-medium mt-8 ">
                      Projects{" "}
                      <span className="">
                        <br />
                        Completed{" "}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="   border-[#5d6972] hover:border-[#a89a18] shadow-lg border-solid border border-3 mb-6 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                <h1 className="text-[#a89a18] text-5xl md:text-7xl font-extrabold text-center pt-8">
                  8+
                </h1>
                <div className="flex col items-center justify-center mt-0 pt-0 space-x-2">
                  <p className="text-white text-lg font-extrabold  pt-6">
                    <hr className="w-[40px] border-solid text-[#25292c] ml-4 border-2 border-[#5d6972]" />
                    <span className="text-white text-2xl text font-medium mt-8 pl-">
                      Years Of <br />
                      <span className="">Experience </span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="   border-[#5d6972] hover:border-[#a89a18] shadow-lg border-solid border border-3 mb-6 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                <h1 className="text-[#a89a18] text-5xl md:text-7xl font-extrabold text-center pt-8">
                  10+
                </h1>
                <div className="flex col items-center justify-center mt-0 pt-0 space-x-4">
                  <p className="text-white text-lg font-extrabold  pt-6">
                    <hr className="w-[40px] border-solid text-[#25292c] ml-4 border-2 border-[#5d6972]" />
                    <span className="text-white text-2xl text font-medium mt-8 pl-">
                      {" "}
                      Happy{" "}
                      <span className="ml-4">
                        <br />
                        Clients{" "}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="   border-[#5d6972] hover:border-[#a89a18] shadow-lg border-solid border border-3 mb-6 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                <h1 className="text-[#a89a18] text-5xl md:text-7xl font-extrabold text-center pt-8">
                  20+
                </h1>
                <div className="flex col items-center justify-center mt-0 pt-0 space-x-4">
                  <p className="text-white text-lg font-extrabold  pt-6">
                    <hr className="w-[40px] border-solid text-[#25292c] ml-4 border-2 border-[#5d6972]" />
                    <span className="text-white text-2xl text font-medium mt-8 pl-">
                      {" "}
                      Clients <br />
                      <span className="">Review </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-5 md:py-10">
            <hr className="md:w-[40%] w-[60%] border-solid text-[#25292c]  border-[#5d6972] text-center" />
          </div>

          <h1 className="text-center md:py-8 py-4 text-white font-extrabold text-2xl">
            MY SKILLS
          </h1>

          <div className=" md:w-[100%] xl:w-[90%] gap-6 mx-auto overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:justify-evenly justify-center items-center  md:px-20 px-4">

            <div className="w-[100%]">
              <h1 className="text-white font-semibold text-lg pt-10">HTML 5</h1>
              <div className=" flex flex-row py-2 w-full">
                <h1 className="text-white">80%</h1>
                <div className="md:h-[10px] h-[5px] w-[80%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px] w-[20%] bg-[#25292c] mt-2"></div>
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">
                JAVASCRIPT
              </h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">75%</h1>
                <div className="md:h-[10px]   h-[5px] w-[85%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[25%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">
                NodeJs
              </h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">85%</h1>
                <div className="md:h-[10px]   h-[5px] w-[85%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[25%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">
                ExpressJs
              </h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">85%</h1>
                <div className="md:h-[10px]   h-[5px] w-[85%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[25%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">PHP</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">60%</h1>
                <div className="md:h-[10px]   h-[5px] w-[60%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[40%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">Laravel</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">70%</h1>
                <div className="md:h-[10px]   h-[5px] w-[70%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[30%] bg-[#25292c] mt-2"></div>
              </div>
            </div>



            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">CSS</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">90%</h1>
                <div className="md:h-[10px]   h-[5px] w-[90%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[10%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">Tailwind Css</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">90%</h1>
                <div className="md:h-[10px]   h-[5px] w-[90%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[10%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">Bootstrap</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">90%</h1>
                <div className="md:h-[10px]   h-[5px] w-[90%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[10%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-[100%]">
              <h1 className="text-white font-semibold text-lg pt-10">
                TypeScript
              </h1>
              <div className=" flex flex-row py-2 w-full">
                <h1 className="text-white">80%</h1>
                <div className="md:h-[10px] h-[5px] w-[80%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px] w-[20%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-[100%]">
              <h1 className="text-white font-semibold text-lg pt-10">
                React
              </h1>
              <div className=" flex flex-row py-2 w-full">
                <h1 className="text-white">80%</h1>
                <div className="md:h-[10px] h-[5px] w-[80%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px] w-[20%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-[100%]">
              <h1 className="text-white font-semibold text-lg pt-10">
                NextJs
              </h1>
              <div className=" flex flex-row py-2 w-full">
                <h1 className="text-white">80%</h1>
                <div className="md:h-[10px] h-[5px] w-[80%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px] w-[20%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
            <div className="w-[100%]">
              <h1 className="text-white font-semibold text-lg pt-10">
                React Native
              </h1>
              <div className=" flex flex-row py-2 w-full">
                <h1 className="text-white">80%</h1>
                <div className="md:h-[10px] h-[5px] w-[80%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px] w-[20%] bg-[#25292c] mt-2"></div>
              </div>
            </div>



            <div className="w-full">
              <h1 className="text-white font-semibold text-lg pt-5">Python</h1>
              <div className=" flex flex-row py-2">
                <h1 className="text-white">65%</h1>
                <div className="md:h-[10px]   h-[5px] w-[90%] bg-[#a89a18] mt-2 ml-4"></div>
                <div className="md:h-[10px] h-[5px]  w-[10%] bg-[#25292c] mt-2"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-5 md:my-20">
            <hr className="w-[40%] border-solid text-[#25292c]  border-[#5d6972] text-center" />
          </div>

          <h1 className="text-white py-4 text-center font-semibold text-lg md:text-2xl">
            MY TIMELINE
          </h1>
          <div className="px-4 md:w-[90%] mx-auto md:py-10 grid grid-cols-1  md:grid-cols-2 flex-col md:justify-center   items-center">

            <div className="ml-0 flex my-10">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2022 - 2023
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  Gilah Global Limited, Lagos
                  <span className="text-slate-500 "> — Fullstack Engineer</span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>
            <div className="ml-0 flex my-10">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2020 - 2022
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  Calmerc Global Limited, Lagos {""}
                  <span className="text-slate-500 ">  — Fullstack Engineer</span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>
            <div className="ml-0 flex -10">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2019 - 2021
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  Fitrend

                  <span className="text-slate-500 "> - Chief Technology Officer </span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>




            <div className="ml-0 flex ">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2018 - 2019
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  Office of Research and Development Government Office Lokoja

                  <span className="text-slate-500 "> – IT Consultant</span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>
            <div className="ml-0 flex pt-10 mb-10">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2018 - PRESENT
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  FullStack Developer{" "}
                  <span className="text-slate-500 "> - FREELANCE</span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>
            <div className="ml-0 flex mt-10 pb-24 md:pb-0 ">
              <div className=" flex flex-col  ">
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#a89a18]">
                  <RiTimerFill color="white" size={30} />
                </div>

              </div>
              <div className=" flex flex-col ">
                <div className=" ml-6  h-[25px] w-[120px] bg-[#25292c] rounded-full">
                  <p className="text-slate-500 text-sm font-normal ml-2.5 mt-0.5 ">
                    2013 - PRESENT
                  </p>
                </div>
                <h1 className="text-white font-semibold text-lg pt-4 ml-6">
                  WEB DEVELOPER{" "}
                  <span className="text-slate-500 "> - FREELANCE</span>
                </h1>
                <h1 className="text-slate-500 font-semibold text-sm md:text-lg pt-2 ml-6">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Illum aperiam est vel!
                </h1>
              </div>
            </div>

          </div>
        </div>
        <MobSidebar />
      </div>
    </>
  );
}
