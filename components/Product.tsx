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
            <>
                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                    <div >
                        <Skeleton height={350} width={300} />
                    </div>
                    <div >
                        <Skeleton height={350} width={300} />
                    </div>
                    <div >
                        <Skeleton height={350} width={300} />
                    </div>
                </div>



            </>
        )
    }

    // interface ICat{
    //     category:string
    // }

    // Filter Products by category
    const filterProduct = (category: any) => {
        const updateList = data.filter((f) => f.category === category)
        setFilter(updateList)
    }



    const ShowProducts = () => {
        return (
            <div>
                <div className=" buttons flex gap-2 justify-center ">
                    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>{`Men's Clothing`}</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>{`Women's Clothing`}</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="mt-12 flex-flex-col justify-center items-center text-center"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">

                    {filter.map((product, index) => (
                        <div key={index}>
                            <div className="card w-300 h-100 mb-4 flex flex-col justify-center items-center text-center p-5">
                                <Image src={product.image} alt={product.title} width={300} height={300} className="h-[300px]">
                                </Image>
                                <div className="card-body p-5">

                                    <h4 className="card-title">{product.title.substring(0, 12)}...</h4>
                                    <p className="card-text">{product.price}</p>
                                    <Link href="#" className="card-link">Buy Now</Link>
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
                <div className="flex justify-center items-center mt-10">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }

                </div>
            </Container>
        </div>
    )
}