import React from "react";
import Link from "next/link";

const Footer = () =>{
    return(
        // create a footer fixed in bottom
        <footer id="footer" className="w-full text-gray-800 text-sm bg-blue-100 fixed bottom-0 ">
            <div className="container d-md-flex py-4">

            <div className="me-md-auto ml-10 text-md-start">
                <div className="copyright">
                &copy; Copyright <strong><span>CEHRSR</span></strong>. All Rights Reserved
                </div>
                
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0 bg-#1977cc ">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;