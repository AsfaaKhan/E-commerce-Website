"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { CgLogIn } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";


export default function Header() {

    const [navbar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(!navbar)
    }

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-slate-50 w-full z-10 top-0 fixed p-[20px]  ">
                <div className=" mx-auto flex justify-between items-center  h-8">
                    {/* LOGO */}
                    <div className=" hover:text-yellow-400  text-2xl flex  justify-center items-center gap-2 cursor-pointer" >
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
                        <Link href="/" className="  hover:underline text-slate-900   hover:text-primary  flex gap-2"><FaHome size={20} />Home</Link>
                        <Link href="/aboutPage" className=" hover:underline text-slate-900   hover:text-primary flex gap-2"><FaBookReader size={20} />About</Link>
                        <Link href="/shopPage" className=" hover:underline text-slate-900    hover:text-primary flex gap-2" >< GiShoppingBag size={20} />Shop</Link>
                        <Link href="/contactPage" className=" hover:underline  text-slate-900  hover:text-primary  flex gap-2"><RiContactsFill size={20} /> Contact</Link>
                    </div>

                    {/* HAMBURGER NAVBAR */}
                    <div className="md:hidden p-4 flex flex-col justify-center text-center text-yellow-400 items-center gap-3 cursor-pointer hover:text-secondary" onClick={handleNavbar}  >
                        {navbar ? <TbShoppingBagCheck size={40} /> : <TbShoppingBag size={40} />}
                    </div>
                    {/* Buttons */}

                    <div className=" flex  gap-3  ">
                        <Link href={"/"} className="text-black hover:text-white hidden md:flex">
                            <div className="flex gap-1 justify-center items-center text-center text-slate-950 hover:text-primary">
                                <CgLogIn size={15} />
                                Login
                            </div>
                        </Link>

                        <Link href={"/"} className="text-black hover:text-white hidden md:flex">
                            <div className="flex gap-1 justify-center items-center text-center text-slate-950 hover:text-primary">
                                <IoPersonAddSharp size={10} />Resgister
                            </div>

                        </Link>

                        <Link href={"/cartPage"} className="text-black hover:text-white d">
                            <div className=" flex gap-1 justify-center items-center text-center text-slate-950 hover:text-primary">
                                <FaOpencart size={15} />
                                Cart(0)
                            </div>
                        </Link>
                    </div>
                </div>

                {navbar && (
                    <div className="md:hidden mt-4 bg-transparent p-4 flex flex-col justify-center items-center gap-4 text-center text-xl " >
                        <Link href="/"
                            className="    hover:underline flex gap-2 text-slate-900  hover:text-primary" onClick={handleNavbar}><FaHome size={20} />Home</Link>
                        <Link href="/aboutPage" className=" 
                         hover:underline flex gap-2  text-slate-900 hover:text-primary" onClick={handleNavbar}><FaBookReader size={20} />About</Link>
                        <Link href="/shopPage" className="  text-slate-900 hover:text-primary  hover:underline flex gap-2" onClick={handleNavbar}>< GiShoppingBag size={20} />Shop</Link>
                        <Link href="/contactPage" className=" text-slate-900  hover:text-primary  hover:underline flex gap-2" onClick={handleNavbar}><RiContactsFill size={20} />Contact</Link>
                        <Link href={"/"} className="text-slate-950 hover:text-primary  ">
                            <div className="flex gap-1 justify-center items-center text-center">
                                <CgLogIn size={15} />
                                Login
                            </div>
                        </Link>

                        <Link href={"/"} className="text-slate-950 hover:text-primary">
                            <div className="flex gap-1 justify-center items-center text-center">
                                <IoPersonAddSharp size={10} />Resgister
                            </div>

                        </Link>

                    </div>
                )}
            </nav>
        </>

    );
}

