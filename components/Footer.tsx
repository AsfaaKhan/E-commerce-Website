import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="bg-slate-100 w-full h-auto  lg:h-[440px] justify-center items-center  gap-[87px] text-black   ">
            {/* 1st Row  */}
            <div className="container ">
                <div className=" flex justify-center items-center flex-col gap-3  sm:flex-row sm:justify-between md:flex-row md:justify-between pt-10 pb-10 2xl:m-4 ">
                    <div className="text-[24px] text-warning hover:text-secondary ">
                        <h3>Glame Grove</h3>
                    </div>
                    <div className="flex gap-[20px] text-skyblue">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
                    </div>

                </div>
            </div>

            {/* 2nd Row */}
            <div className="container grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 justify-center items-center gap-5 pt-[50px] pb-[50px] ">

                {/* 1st column */}

                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-2xl fw-bold text-black ">Company Info</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">About Us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none ">Carrier</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">We are hiring</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Blog</Link>

                </div>

                {/* 2nd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className=" text-black fw-bold text-2xl">Legal</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">About Us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Carrier</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">We are hiring</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Blog</Link>

                </div>

                {/* 3rd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-2xl fw-bold text-black">Features</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Business Marketing</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">User Analytic</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Live Chat</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Unlimited Support</Link>
                </div>

                {/* 4th column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-2xl fw-bold text-black">Resources</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">IOS & Android</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Watch a Demo</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">Customers</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-black text-decoration-none">API</Link>

                </div>

                {/* 5th Column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className=" text-black fw-bold text-2xl ">Get In Touch</h1>
                    <div className=" flex flex-col gap-2  ">
                        <input type="email" placeholder="Your Email" className="bg-[#E6E6E6]   h-[58px] text-center " />
                        <button className="bg-warning text-white h-[58px] border-[1px] rounded-[5px] ">Subscribe
                        </button>
                        </div>
                    <Link href={"/"} className=" text-sm leading-[24px] text-warning">Lore imp sum dolor Amit</Link>

                </div>


            </div>
        </div>
    )
}