export interface IProduct {
    id: number | string;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    thumbnail: string;
    brand: string;
    category: string;
}

export interface ICartItem extends IProduct {
    quantity: number;
}

export interface ICartState {
    cartItems: ICartItem[];
    totalPrice: number;
    totalQuantity: number;
}

export interface IProductsState {
    currentProduct: IProduct | null;
    isLoading: boolean;
    category: string;
    items: IProduct[];
    error: string | null | any;
    search: string;
    sort: string
}