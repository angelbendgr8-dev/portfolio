import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'portfolio/styles/Home.module.css'
import Pics from '../assets/MBP_3864-removebg-preview.png'
import Sidebar from 'portfolio/Layouts/Sidebar'
import MobSidebar from 'portfolio/Layouts/MobSidebar'
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Main from 'portfolio/Layouts/Main'
import { TypeAnimation } from 'react-type-animation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <div className='bg-red-200'>

        <div className=" flex-row max-w-[100%] overflow-x-hidden  h-[50%] md:[100%]  md:flex hidden ">


          <div className="flex md:flex-row flex-col justify-evenly items-center ">
            <div
              className="bg-[#1f1e1e] w-[35%] h-[90%] mx-auto pt-4 absolute md:left-10 left-20 top-96 md:top-10 md:bottom-0 rounded-xl px ">
              <Image alt='pics' className="w-full h-full " src={Pics} />

            </div>
            <div
              className="absolute top-20 md:top-44 md:left-0 left-0 -right-5 md:-right-96 flex items-center flex-col text-white space-y-6 ">
              <h1 className="md:text-5xl text-2xl font-extrabold mb-3 leading-4 ">

                Hi, {"I'm"} <span className="text-[#a89a18] "><br />Ogunmakinju Olanrewaju.</span> <br />A
                <TypeAnimation
                    sequence={[
                      ' Web', // Types 'One'
                      2000, // Waits 1s
                      ' Mobile', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      ' Frontend', // Types 'Three' without deleting 'Two'
                      2000, // Waits 2s
                      ' Backend', // Types 'Three' without deleting 'Two'
                      2000,
                      () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                      }
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={2}
                    deletionSpeed={5}
                    repeat={Infinity}
                    className='inline md:text-5xl text-2xl font-extrabold mb-3 leading-4'
                    
                  /> 
                  Developer.
              </h1>
              <div className=" md:mb-0 mb-4">
                <a href='https://docs.google.com/document/d/1t9PogkEckEhx8Vw4lgY6b981Al-r8s8iRXf1sT1oHqA/edit?usp=sharing' target='__blank'
                  className="px-8 py-2 bg-transparent border border-solid border-2 border-[#a89a18] rounded-full drop-shadow-lg text-xl text-white duration-300 hover:bg-[#a89a18] hover:text-white ">
                  Download CV
                </a>
              </div>

            </div>

            <div className=" ">

            </div>
          </div>

        </div>
        <Sidebar />
      </div>




      <div className="    md:hidden flex  absolute top-0 z-1  mt-10">

        <div className=" flex justify-center    h-[100vh] w-[100vw] ">

          <div className="overflow-y-auto  ">

            <div className="flex flex-col space-y-4 text-center   pt-0  mt-5 text-white justify-around items-center ">
              <h1 className=" text-2xl font-extrabold mb-0 ">

                Hi, {"I'm"} <span className="text-[#a89a18] "><br />Ogunmakinju Olanrewaju.</span> <br /> A
                <p className="element"> 
                <TypeAnimation
                              sequence={[
                                'Web', // Types 'One'
                                2000, // Waits 1s
                                'Mobile', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Frontend', // Types 'Three' without deleting 'Two'
                                2000, // Waits 2s
                                'Backend', // Types 'Three' without deleting 'Two'
                                2000,
                                () => {
                                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                              ]}
                              wrapper="span"
                              cursor={true}
                              speed={2}
                              deletionSpeed={5}
                              repeat={Infinity}
                              className='inline md:text-5xl text-2xl font-extrabold mb-3 leading-4'
                              
                            />
                            </p>
                Developer.
              </h1>


              <div className=" flex flex-col items-center justify-center ">
                <button
                  className="px-10 my-6  py-4 bg-transparent border border-solid border-2 border-[#a89a18] rounded-full drop-shadow-lg text-lgg text-white duration-300 hover:bg-[#a89a18] hover:text-white ">
                  Download CV
                </button>

                <div className="bg-[#1f1e1e] w-[90%] mx-auto rounded-xl  ">
                  <Image alt='pics' className="w-full h-full" src={Pics} />

                </div>



              </div>


              <MobSidebar />
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
