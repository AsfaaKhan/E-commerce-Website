// redux/types.ts
export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
    quantity?: number;
}
