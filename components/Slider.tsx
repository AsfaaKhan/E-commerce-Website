"use client"
// import Link from "next/link";
import Image from "next/image";
import { Jersey_15 } from "next/font/google"

const Font = Jersey_15({
    subsets: ["latin"],
    weight: ['400']
})


export default function Slider() {
    return (
        <div className="mt-28 ">

            {/* Carousel  */}
            <div id="demo" className="carousel slide h-screen" data-bs-ride="carousel">

                {/* Indicators/dots  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>

                {/* The slideshow/carousel  */}
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <Image src="/images/6.jpg" alt="Los Angeles" width={500} height={300} className="d-block w-100" />
                        <div className=" carousel-caption flex flex-col  justify-start text-center items-start  text-black ">
                            <h3 className={`${Font.className} text-8xl `}>Glame Grove </h3>
                            <p>The Fasion Vista </p>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <Image src="/images/7.jpg" alt="Los Angeles" width={500} height={300} className="d-block w-100" />
                        <div className=" carousel-caption flex flex-col  justify-start text-center items-start  text-black ">
                            <h3 className={`${Font.className} text-8xl `}>Glame Grove </h3>
                            <p>The Fasion Vista </p>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <Image src="/images/8.jpg" alt="Los Angeles" width={500} height={300} className="d-block w-100" />
                        <div className=" carousel-caption flex flex-col  justify-start text-center items-start  text-black ">
                            <h3 className={`${Font.className} text-8xl `}>Glame Grove </h3>
                            <p>The Fasion Vista </p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Image src="/images/5.jpg" alt="Los Angeles" width={500} height={300} className="d-block w-100" />
                        <div className=" carousel-caption flex flex-col  justify-start text-center items-start  text-black ">
                            <h3 className={`${Font.className} text-8xl `}>Glame Grove </h3>
                            <p>The Fasion Vista </p>
                        </div>
                    </div>
                </div>

                {/* Left and right controls/icons  */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}