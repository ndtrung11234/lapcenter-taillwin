import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/laptop.png"
const Navbar = () => {
    return (
        <div className="flex justify-between bg-green-600 px-10 py-2 min-w-[525px]">
            <img src={logo} alt="" className="w-10 h-10 cursor-pointer " />
            <div className="flex">
                <Link to="/" className="ml-4 mt-2 font-medium text-white hover:text-purple-500 "> 
                TRANG CHỦ
                </Link>
                <Link to="intro" className="ml-4 mt-2 font-medium text-white hover:text-purple-500 " > 
                GIỚI THIỆU
                </Link>
                <Link to="contact" className="ml-4 mt-2 font font-medium text-white hover:text-purple-500 "> 
                LIÊN HỆ
                </Link>
            </div>
        </div>
    )
}
export default Navbar