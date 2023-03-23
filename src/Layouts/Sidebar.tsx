import React from "react";
import Image from "next/image";
import Home from "../assets/pngfind.com-white-house-logo-png-5898244.png";
import About from "../assets/pngfind.com-white-light-png-26199.png";
import portfolio from "../assets/pngfind.com-portfolio-png-6509980.png";
import blog from "../assets/pngfind.com-blog-icon-png-2064753.png";
import Contact from "../assets/kisspng-social-media-email-marketing-customer-mail-white-5b238b0a6d54b4.3228176215290560104478.png";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className=" right-0 top-2 pr-6 pt-16  fixed md:flex-col flex-row md:flex hidden">
      <div className="h-[60px] w-[60px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-5 flex items-center justify-center ">
        <Link href="/">
          <Image alt="Homeicon" src={Home} className="h-[20px] w-[25px]  " />
        </Link>
      </div>

      <div className="h-[60px] w-[60px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-5 flex items-center justify-center ">
        <Link href="/about">
          <Image
            alt="aboutIcon"
            className="h-[20px] w-[25px] m "
            src={About}
          />
        </Link>
      </div>
      <div className="h-[60px] w-[60px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-5 flex items-center justify-center ">
        <span className="mdi mdihome-outline ">
          {" "}
          <a href="{{route('portfolio')}}">
            <Image
              alt='portfolioIcon'
              className="h-[20px] w-[25px]  "
              src={portfolio}
            />
          </a>
        </span>
      </div>
      <div className="h-[60px] w-[60px] bg-[#25292c] hover:bg-[#a89a18] rounded-full mb-5 flex items-center justify-center ">
        <a href="{{route('blog')}}">
          <Image
            alt='blogIcon'
            className="h-[20px] w-[25px]  "
            src={blog}
          />
        </a>
      </div>
      <div className="h-[60px] w-[60px] bg-[#25292c] hover:bg-[#a89a18] rounded-full flex items-center justify-center ">
        <a href="{{route('contact')}}">
          <Image
            alt='contacticon'
            className="h-[30px] w-[30px] ml "
          src={Contact}
          />
        </a>
      </div>
    </nav>
  );
}
