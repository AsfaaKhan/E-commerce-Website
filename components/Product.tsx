"use client"

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Container from "@/components/Container";
import Skeleton from "react-loading-skeleton";


export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await response.json();
            setProduct(product);
            setLoading(false)
            setLoading(false);
            // console.log(filter);

        }
        getProduct()
    }, [])



    // Set Loading
    const Loading = () => {
        return (
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <Skeleton height={350} width={300} className="w-full" />
                    </div>
                ))}
            </div>

        )
    }


    // Show Product Detail
    const ShowProduct = () => {
        return (
            <div>

            </div>
        )
    }

    return (

        <div>
            <Container>
                <div className="flex justify-center items-center mt-15 sm:mt-20 md:mt-28 ">
                    {
                        loading ? <Loading /> : <ShowProduct />
                    }

                </div>
            </Container>
        </div>
    )
}