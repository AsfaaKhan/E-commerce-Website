import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Slider from "@/components/Slider";
export default function About() {
    return (

        <div>
            <div className="bg-white">

                <div className="container mt-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start ">

                    {/* Text */}
                    <div className="flex flex-col   pt-28 pb-28  sm:w-[509px] gap-[35px] p-[60px] ">

                        <div className="font-bold text-2xl text-black" style={{ letterSpacing: "0.1px" }}><h1>ABOUT GLAME GROVE</h1></div>
                        <div className="font-bold  text-warning text-xl leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>ABOUT US</h1></div>

                        <div className=" text-[10px] leading-[30px] sm:w-[341px] text-gray-400" style={{ letterSpacing: "0.2px" }}> <h1> Your one-stop destination for all your shopping needs! We are dedicated to providing you with a seamless and enjoyable shopping experience by offering a wide range of high-quality products at competitive prices.</h1></div>

                        <div>
                            <button>
                            Get Quote Now
                            </button>
                        </div>

                    </div>

                    {/* Image */}
                    <div className="mt-20">
                        <Slider/>
                    </div>

                </div>


            </div>

            <div className="pt-6 pb-6 ">
                <div className=" container flex flex-col items-center justify-between md:flex-row gap-[60px]">
                    <div className="flex  w-[280px] flex-col gap-[24px]">
                        <p className="text-[#E74040] text-normal text-sm leading-[20px] " style={{ letterSpacing: "0.2px" }}>Problems trying</p>
                        <h3 className="text-darkBlue text-bold text-2xl " style={{ letterSpacing: "0.1px" }}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                    </div>
                    <div>
                        <p className="text-gray w-[350px] text-normal text-sm " style={{ letterSpacing: "0.2px" }}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>

                </div>
            </div>

            <div>
                <div className="container pt-20 pb-20 gap-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   items-center  ">

                    <div className=" flex flex-col gap-2  text-center justify-center  ">
                        <h3 className=" font-bold text-[58px] leading-[80px] text-darkBlue " style={{ letterSpacing: "0.2" }}>15K</h3>
                        <p className="font-bold text-base text-gray " style={{ letterSpacing: "0.1" }}>Happy Customers</p>
                    </div>

                    <div className=" flex flex-col gap-2 justify-center text-center ">
                        <h3 className=" font-bold text-[58px] leading-[80px] text-darkBlue " style={{ letterSpacing: "0.2" }}>150K</h3>
                        <p className="font-bold text-base text-gray " style={{ letterSpacing: "0.1" }}>Monthly Visitors</p>
                    </div>

                    <div className=" flex flex-col gap-2 text-center item-center ">
                        <h3 className=" font-bold text-[58px] leading-[80px] text-darkBlue " style={{ letterSpacing: "0.2" }}>15</h3>
                        <p className="font-bold text-base text-gray " style={{ letterSpacing: "0.1" }}>Countries  Worldwide</p>
                    </div>

                    <div className=" flex flex-col gap-2 text-center item-center ">
                        <h3 className=" font-bold text-[58px] leading-[80px] text-darkBlue " style={{ letterSpacing: "0.2" }}>100+</h3>
                        <p className="font-bold text-base text-gray " style={{ letterSpacing: "0.1" }}>Top Partners</p>
                    </div>
                </div>
            </div>


            {/* Our Team */}
            <div className="container pt-[112px] pb-[112px] gap-[112px]">

                {/* Heading */}
                <div className="flex flex-col justify-center items-center text-center gap-[10px]">
                    <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Meet Our Team</h3>
                    <p className="font-normal text-sm  text-gray" style={{ "letterSpacing": "0.2px" }}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>

                </div>

                <div className="conariner mt-[40px] mb-[40px] grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <div className="flex flex-col  items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/images/9.jpg"}
                                alt="product "
                                width={200}
                                height={200}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Username</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >Profession</h5>
                            </div>

                            <div className="pt-[5px]  text-skyblue pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <FaFacebook size={24}/>
                                <FaInstagram size={24}/>
                                <CiTwitter size={24}/>

                            </div>


                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/images/10.jpg"}
                                alt="product "
                                width={200}
                                height={200}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Username</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >Profession</h5>
                            </div>

                            <div className="pt-[5px]  text-skyblue pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <FaFacebook size={24}/>
                                <FaInstagram size={24}/>
                                <CiTwitter size={24}/>

                            </div>


                        </div>
                    </div>
                    </div>
                    
                    <div>
                        <div className="flex flex-col  items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/images/11.jpg"}
                                alt="product "
                                width={200}
                                height={200}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Username</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >Profession</h5>
                            </div>

                            <div className="pt-[5px]  text-skyblue pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <FaFacebook size={24}/>
                                <FaInstagram size={24}/>
                                <CiTwitter size={24}/>

                            </div>


                        </div>
                    </div>
                    </div>
                </div>
            </div>

           
                    
           
            {/* End */}
            <div className="bg-[url('/images/5.jpg')] bg-cover bg-no-repeat bg-center h-[500px] text-white">

                <div className=" flex flex-col  lg:flex-row lg:justify-between lg:text-start lg:items-start ">

                    {/* Text */}
                    <div className=" container flex flex-col   pt-28 pb-28  sm:w-[509px] gap-[35px] p-[60px] ">

                        <div className="font-bold text-base " style={{ letterSpacing: "0.1px" }}><h1>WORK WITH US</h1></div>
                        <div className="font-bold  text-[58px] leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>Now Let’s grow Yours</h1></div>

                        <div className="font-normal text-xl leading-[30px] sm:w-[341px] " style={{ letterSpacing: "0.2px" }}> <h1>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h1></div>

                        <div>
                            <button>
                            Get Quote Now
                            </button>
                        </div>

                    </div>

                    {/* Image */}
                    <div className="hidden lg:flex">
                        
                    </div>

                </div>


            </div>

        </div>
    )
}