
// import { IProduct } from "@/redux/type";

// import Product from "@/components/Products"

// // Action Types
// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// // Action Creators
// export const addToCart = (product: IProduct) => ({
//     type: ADD_TO_CART,
//     payload: product,
// });

// export const removeFromCart = (productId: number) => ({
//     type: REMOVE_FROM_CART,
//     payload: productId,
// });

// // Interfaces for action types
// export interface AddToCartAction {
//     type: typeof ADD_TO_CART;
//     payload: IProduct;
// }

// export interface RemoveFromCartAction {
//     type: typeof REMOVE_FROM_CART;
//     payload: number;
// }

// Export action types for reducers
// export type CartActionTypes = AddToCartAction | RemoveFromCartAction;




export const addItem = (Product: any) =>{
    return{
        type: "ADDITEM",
        payload: Product
    }
}

export const delitem = (Product : any) =>{
    return{
        type: "DELITEM",
        payload: Product
    }
}