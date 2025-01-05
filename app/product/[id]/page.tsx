"use client"
import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { addItem } from "@/redux/actions";


interface ISingleProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }

}


interface ProductDetailsProps {
    params: {
        id: string;
    };
}

export default function Product({ params }: ProductDetailsProps) {
    const { id } = params
    const [product, setProduct] = useState<ISingleProduct | null>(null);
    const [loading, setLoading] = useState(true)
     
   


    // const dispatch = useDispatch();
    // const handleAddToCart = () => {
    //     if (product) {
    //         dispatch(addItem({
    //             id: product.id,
    //             title: product.title,
    //             price: product.price,
    //             image: product.image,
    //             quantity: 0
    //         }));
    //     }
    // };
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await response.json();
            setProduct(product);
            setLoading(false)


        }
        fetchProduct()
    }, [id])


    const Loading = () => {
        return (
            <div className="flex flex-col md:flex-row gap-10 mt-15 sm:mt-20 md:mt-28 mb-20">
                <div className=" col-md-6 gap-20 ">
                    <Skeleton height={400} width={300}></Skeleton>
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300}></Skeleton>
                    <Skeleton height={75} ></Skeleton>
                    <Skeleton height={25} width={150}></Skeleton>
                    <Skeleton height={50}></Skeleton>
                    <Skeleton height={150}></Skeleton>
                    <Skeleton height={50} width={100}></Skeleton>

                </div>
            </div>
        )
    }


    // Show Product Detail
    const ShowProduct = ({ product }: { product: ISingleProduct }) => {
        return (
            <Container>
                <div className=" mt-10 flex flex-col gap-10 md:flex-row justify-center items-center">

                    {/* Image */}
                    <div className="col-md-6">
                        <Image src={product.image} alt={product.title} width={400} height={300}>

                        </Image>
                    </div>

                    {/* Content */}
                    <div className="col-md-6 flex flex-col  justify-center gap-2 ">

                        {/* Category */}
                        <div>
                            <h1 className="text-3xl font-bold uppercase">{product.category}</h1>
                        </div>

                        {/* Title */}
                        <div>
                            <p className="text-gray-600 display-5">{product.title}</p>
                        </div>

                        {/*Rating  */}
                        <div className="flex items-center  ">
                            <p className="text-xl font-semibold mt-4 flex  text-center gap-1 " >
                                Rating: {product.rating && product.rating.rate}  <IoIosStar size={15} className="text-warning" /></p>
                        </div>

                        {/* Price */}
                        <div>
                            <h3 className="fw-bold text-xl display-6 my-4 ">
                                Price: ${product.price}
                            </h3>
                        </div>

                        {/* Discrption */}
                        <div className="lead">
                            {product.description}
                        </div>

                        {/* Cart Buttons */}
                        <div className=" flex ">
                            <button className=" text-dark fw-bold btn btn-outline-warning font-bold shadow-md  text-[48px] px-4 py-2">
                                Add To Cart
                            </button>
                            <button className="fw-bold ms-2 text-dark btn btn-outline-warning font-bold shadow-md px-4 py-2 ">
                                Go To Cart
                            </button>
                        </div>

                    </div>

                </div>
            </Container>
        )
    }

    return (

        <div>
            <Container>
                <div className="flex justify-center items-center mt-15 sm:mt-20 md:mt-28 mb-20">
                    {
                        loading ? <Loading /> : product ? <ShowProduct product={product} /> : <p>Product Not Found</p>
                    }

                </div>
            </Container>
        </div>
    )
}


