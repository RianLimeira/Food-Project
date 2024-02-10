import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

// verifica se já foi adicionado ou incrementar
export function add(products: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = products.find(({ id }) => newProduct.id === id)

    if (existingProduct) {
        return products.map((products) => products.id === existingProduct.id
            ? { ...products, quantity: products.quantity + 1 }
            : products)
    }

    return [...products, { ...newProduct, quantity: 1 }]
}

export function remove(products: ProductCartProps[], productRemoveId: string) {
    const updatedProducts = products.map((product) =>
        product.id === productRemoveId ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0
        } : product
    )

    return updatedProducts.filter((product) => product.quantity > 0)
}