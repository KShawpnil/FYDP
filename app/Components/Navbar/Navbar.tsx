import React from "react";
import Image from "next/image";
import Link from "next/link";

import projectLogo from "C:/Users/Hp/Desktop/nextjs/app/Assets/logo CEHRSR.png";

const Navbar = () => {
  return (
    <div>
      <header id="header" className="relative-top px-20 py-3 shadow-lg justify-between">
        <div className="flex items-center spacec-x-2 ml-10">
          <Image src={projectLogo} alt="projectLogo" id="projectLogo" height={60} width={50} />
          <h1 className="logo me-auto"><Link href="index.html" className="text-blue-600 no-underline text-3xl">CEHRSR</Link></h1>


          <nav className="space-x-6 ml-auto mr-10">
            <ul className="flex space-x-20 mt-6">
              <li><Link href='#banner' className="nav-link scrollto active hover:text-blue-500">Home</Link></li>
              <li><Link href='#services' className="nav-link scrollto  hover:text-blue-500">Our Services</Link></li>
              <li><Link href="#faq" className="nav-link scrollto  hover:text-blue-500">FAQ</Link></li>
              <li><Link href="#contactUs" className="nav-link scrollto  hover:text-blue-500">Contact Us</Link></li>


            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-regular py-2 px-4 rounded-full">Login / Registration</button>

        </div>
      </header>
    </div>
  );
};

export default Navbar;