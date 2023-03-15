import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext(null);

const ProductsDispatcher = createContext(null);

export function ProductsContextProvider({ children }) {
    const [products, dispatch] = useReducer(productsReducer, []);

    return (
        <ProductContext.Provider value={products}>
            <ProductsDispatcher.Provider value={dispatch}>
                {children}
            </ProductsDispatcher.Provider>
        </ProductContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductContext);
}

export function useProductsDispatcher() {
    return useContext(ProductsDispatcher);
}

function productsReducer(products, action) {
    switch (action.type) {
        case "added":
            return [...products,
                 {
                    id: products.length + 1,
                    product: action.product,
                    quantity: action.count,
                    price: action.price,
                    image: action.image
                }];
        case "removed":
            return products.filter((product) => product.id !== action.id);
        default:
            throw new Error("Invalid action type")
    }
}