import React from "react";
import logo from "../assets/img/logo.png";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse justify-between bg-black text-brightColor px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            
            <div className="mx-auto my-6 text-center md:hidden">
              Copyright &copy; 2022, All Right Reserved
            </div>

            <div>
              <img src={logo} className="h-8" alt="" />
            </div>

            <div className="flex justify-center space-x-4">

              <a href="#">
                <BsFacebook className="cursor-pointer" size={25} />
              </a>

              <a href="#">
                <RiTwitterXFill className="cursor-pointer" size={25} />
              </a>

              <a href="#">
                <BsInstagram className="cursor-pointer" size={25} />
              </a>

              <a href="#">
              <BsGithub className="cursor-pointer" size={25} />
              </a>

            </div>

          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-brightRed">Home</a>
              <a href="#" className="hover:text-brightRed">About</a>
              <a href="#" className="hover:text-brightRed">Menu</a>
              <a href="#" className="hover:text-brightRed">Reviews</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-brightRed">Careers</a>
              <a href="#" className="hover:text-brightRed">Community</a>
              <a href="#" className="hover:text-brightRed">Privacy Policy</a>
            </div>

          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />
                <button className="px-6 py-2 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
              </div>
            </form>
            <div className="hidden md:block">
              Copyright &copy; 2024, All Right Reserved
              
            </div>
            
          </div>

        </div>
  );
};

export default Footer;	
