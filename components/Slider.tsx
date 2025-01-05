
"use client"
import Image from "next/image";

export default function Slider() {
    return (
        <div className="mt-28 mb-28">

                {/* Carousel  */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    {/* Indicators/dots  */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

                    </div>

                    {/* The slideshow/carousel  */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image src="/images/8.jpg" alt="slider" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <Image src="/images/5.jpg" alt="slider" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <Image src="/images/6.jpg" alt="slider" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <Image src="/images/7.jpg" alt="slider" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                
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
