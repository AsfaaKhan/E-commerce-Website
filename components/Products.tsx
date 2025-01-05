"use client"

import React, { useEffect, useState } from "react"
import Container from "./Container"
import Image from "next/image"
import Link from "next/link"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProduct {
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

export default function Product() {
    const [data, setData] = useState<IProduct[]>([])
    const [filter, setFilter] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const componentMounted = true;

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            if (componentMounted) {
                setData(products);
                setFilter(products);
                setLoading(false);
            }   // console.log(filter);

        }

        getProducts();

    }, [])

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

    // Filter Products by category
    const filterProduct = (category: string) => {
        const updateList = data.filter((f) => f.category === category)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <div>
                <div className=" justify-center items-center buttons grid grid-cols-3 sm:grid-cols-5 gap-2 mt-10">
                    <button className="btn text-black btn-outline-warning" onClick={() => setFilter(data)}>All</button>
                    <button className="btn text-black btn-outline-warning" onClick={() => filterProduct("men's clothing")}>{`Men's Clothing`}</button>
                    <button className="btn  text-black btn-outline-warning" onClick={() => filterProduct("women's clothing")}>{`Women's Clothing`}</button>
                    <button className="btn  text-black btn-outline-warning" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn  text-black btn-outline-warning" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="mt-12 flex flex-col justify-center items-center text-center"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                    {filter.map((product, index) => (
                        <div key={index}>
                            <div className="card w-300 h-100 mb-4 flex flex-col justify-center items-center text-center p-5 hover:scale-105 transition-transform ease-out duration-700">
                                <Image src={product.image} alt={product.title} width={300} height={300} className="h-[300px]">
                                </Image>
                                <div className="card-body p-5">
                                    <h1 className="lead uppercase">
                                        {product.category}
                                    </h1>
                                    <h4 className="card-title fw-bold text-xl">{product.title.substring(0, 12)}</h4>
                                    <p className="card-text fw-bold text-2xl">
                                        ${product.price}</p>
                                    <p className="line-clamp-2 ">{product.description}...</p>
                                    <Link href={`/product/${product.id}`} className="card-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div>
            <Container>
                <div className=" justify-center items-center mt-24 md:mt-28 ">

                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-yellow-400 hover:text-secondary text-center ">
                        {` "New Season, New Glamorous You"`}
                    </p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl   lg:text-8xl text-yellow-400 hover:text-secondary uppercase text-center items-center" style={{ letterSpacing: 6 }}>Shop Our Latest Products</h1>


                    {
                        loading ? <Loading /> : <ShowProducts />
                    }

                </div>
            </Container>
        </div>
    )
}