import "./cart.css";
import DeleteIcon from "../images/icon-delete.svg";
import {useProducts, useProductsDispatcher} from '../contexts/ProductsContexts'

export default function Cart({ setCartCount }) {
    const products = useProducts();
    const dispatch = useProductsDispatcher();

    function handleDeleteProduct(id) {
        dispatch({ type: "removed", id: id })
        setCartCount(prev => prev - 1)
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <p>Cart</p>
            </div>
            {products.length === 0 ?
                <div className="cart-empty">
                    <p>Your cart is empty</p>
                </div>
                :
                <div className="cart-items">
                    {console.log(products)}
                    {products.map((product) => {
                        return (<div className="cart-item">
                            <div className="cart-item-image">
                                <img src={product.image} alt="product" />
                            </div>
                            <div className="cart-item-info">
                                <p className="cart-item-name">{product.product}</p>
                                <p className="cart-item-price">${product.price}</p>
                            </div>
                            <div onClick={() => handleDeleteProduct(product.id)}>
                                <img src={DeleteIcon} alt="Delete Icon" />
                            </div>
                        </div>
                        )
                    })}
                </div>}
        </div>
    )
}