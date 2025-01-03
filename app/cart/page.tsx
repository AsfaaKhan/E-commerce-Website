"use client"

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers/";
import { delitem, addItem } from "@/redux/actions";
import Image from "next/image";

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.handleAddToCart);
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(delitem(id));
    };

    const handleAdd = (product: any) => {
        dispatch(addItem({ ...product, quantity: 1 }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            {/* Product Image */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        Price: ${item.price} | Quantity: {item.quantity}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                                >
                                    Remove
                                </button>
                                <button
                                    onClick={() => handleAdd(item)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Add More
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="mt-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
                        <button className="px-6 py-3 bg-green-500 text-white rounded-md">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
