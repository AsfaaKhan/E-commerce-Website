"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TbShoppingBagCheck } from "react-icons/tb"; import { TbShoppingBag } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { CgLogIn } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5"; import { FaOpencart } from "react-icons/fa6";

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(!navbar)
    }
    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-blue-500 w-full z-10 top-0 fixed p-[20px] ">
                <div className=" mx-auto flex justify-between items-center  h-8">
                    {/* LOGO */}
                    <div className="text-black  text-2xl flex  justify-center items-center gap-2" >
                        <Image
                            src="/images/2.jpg"
                            width={50}
                            height={50}
                            alt="navbar image"
                        >
                        </Image>
                        <h1>
                            GlamGrove
                        </h1>
                    </div>
                    {/* NAVBAR ITEMS */}
                    <div className="hidden md:flex justify-end gap-10 text-xl" >
                        <Link href="/" className=" hover:text-white hover:underline text-black flex gap-2"><FaHome size={20} />Home</Link>
                        <Link href="/aboutPage" className="hover:text-white hover:underline text-black flex gap-2"><FaBookReader size={20} />About</Link>
                        <Link href="/shopPage" className=" hover:text-white hover:underline text-black flex gap-2" >< GiShoppingBag size={20} />Shop</Link>
                        <Link href="/contactPage" className="hover:text-white hover:underline text-black flex gap-2"><RiContactsFill size={20} /> Contact</Link>
                    </div>

                    {/* HAMBURGER NAVBAR */}
                    <div className="md:hidden p-4 flex flex-col justify-center text-center text-black items-center gap-3" onClick={handleNavbar} >
                        {navbar ? <TbShoppingBagCheck size={40} /> : <TbShoppingBag size={40} />}
                    </div>

                    {/* Buttons */}

                    <div className=" flex  gap-3  ">
                        <Link href={"/"} className="text-black hover:text-white ">
                            <div className="flex gap-1 justify-center items-center text-center">
                                <CgLogIn size={15} />
                                Login
                            </div>
                        </Link>

                        <Link href={"/"} className="text-black hover:text-white ">
                            <div className="flex gap-1 justify-center items-center text-center">
                                <IoPersonAddSharp size={10} />Resgister
                            </div>

                        </Link>

                        <Link href={"/"} className="text-black hover:text-white ">
                            <div className="flex gap-1 justify-center items-center text-center">
                                <FaOpencart size={15} />
                                Cart(0)
                            </div>
                        </Link>
                    </div>
                </div>

                {navbar && (
                    <div className="md:hidden mt-4 bg-transparent p-4 flex flex-col justify-center items-center gap-4 text-center text-xl text-black" >
                        <Link href="/"
                            className="hover:text-black  text-white hover:underline flex gap-2" onClick={handleNavbar}><FaHome size={20} />Home</Link>
                        <Link href="/aboutPage" className="hover:text-black text-white
                         hover:underline flex gap-2" onClick={handleNavbar}><FaBookReader size={20} />About</Link>
                        <Link href="/shopPage" className="hover:text-black   text-white hover:underline flex gap-2" onClick={handleNavbar}>< GiShoppingBag size={20} />Shop</Link>
                        <Link href="/contactPage" className="hover:text-black  text-white  hover:underline flex gap-2" onClick={handleNavbar}><RiContactsFill size={20} />Contact</Link>
                    </div>
                )}
            </nav>
        </>

    );
}

