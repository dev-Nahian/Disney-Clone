import React from "react";
import logo from "../../assets/Image/logo.png";
import Avatar from "../../assets/Image/Avatar.png"
import { HiHome } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { SiSteelseries } from "react-icons/si";




export const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">

                <div className="flex justify-between items-center py-6">
                    <div className="flex gap-x-[60px] items-center">
                        <div>
                            <img
                                className="h-[60px] w-[120px] object-cover cursor-pointer"
                                src={logo}
                                alt="not found"
                            />
                        </div>

                        <div className="flex gap-x-[30px] items-center">

                            <div className="flex items-center gap-x-[10px] cursor-pointer ease-linear hover:underline underline-offset-8">
                                <HiHome className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">Home</a>
                            </div>
                            <div className="flex items-center gap-x-[10px] cursor-pointer ease-linear hover:underline underline-offset-8">
                                <FaSearch className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">Search</a>
                            </div>
                            <div className="flex items-center gap-x-[10px] cursor-pointer ease-linear hover:underline underline-offset-8">
                                <FaPlus className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">Watchlist</a>
                            </div>
                            <div className="flex items-center gap-x-[10px] cursor-pointer ease-linear hover:underline underline-offset-8">
                                <IoStarSharp className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">originals</a>
                            </div>
                            <div className="flex items-center gap-x-[10px] cursor-pointer ease-linear hover:underline underline-offset-8">
                                <RiMovie2Fill className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">Movies</a>
                            </div>
                            <div className="flex items-center gap-x-[10px] cursor-pointer hover:underline underline-offset-8 transition-all">
                                <SiSteelseries className="text-white h-[30px] w-[30px]" />
                                <a className="text-white text-xl capitalize">series</a>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="h-[40px] w-[40px] rounded-full cursor-pointer">
                            <img className="h-full w-full object-cover rounded-full" src={Avatar} alt="not found" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
