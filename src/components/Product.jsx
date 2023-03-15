import {useState} from 'react'


import "./product.css"
import Thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import Image1 from "../images/image-product-1.jpg"
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import Image2 from "../images/image-product-2.jpg"
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import Image3 from "../images/image-product-3.jpg"
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg"
import Image4 from "../images/image-product-4.jpg"
import Plus from "../images/icon-plus.svg"
import Minus from "../images/icon-minus.svg"
import Cart from "../images/icon-cart.svg"
import { useProductsDispatcher } from '../contexts/ProductsContexts'


export default function Product({ cartCount, setCartCount }) {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [imageNum, setImageNum] = useState(1)

    const dispatch = useProductsDispatcher();

    function handleAddToCart() {
        dispatch({
            type: "added",
            product: "Fall Limited Edition Sneakers",
            count: count,
            price: 125 * count,
            image: Thumbnail3
        })
        setCartCount(cartCount + count)
        setCount(0)
    }


    let thumbnails = [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4];
    let selectedIamge;
    if (imageNum === 1) {
        selectedIamge = Image1;
    } else if (imageNum === 2) {
        selectedIamge = Image2;
    } else if (imageNum === 3) {
        selectedIamge = Image3;
    } else if (imageNum === 4) {
        selectedIamge = Image4;
    }

    function addProduct() {
        setCount(count + 1)
    }

    function removeProduct() {
        if (cartCount > 0) {
            setCount(count - 1)
        }
    }

  return (
    <div className="product-container">
        <div className="product-image">
            <img className='main-image' src={selectedIamge} alt="Product" />
            <div className="thumbnails">
                <img src={Thumbnail1} alt="Thumbnail" onClick={() => setImageNum(1)} />
                <img src={Thumbnail2} alt="Thumbnail" onClick={() => setImageNum(2)} />
                <img src={Thumbnail3} alt="Thumbnail" onClick={() => setImageNum(3)} />
                <img src={Thumbnail4} alt="Thumbnail" onClick={() => setImageNum(4)} />
            </div>
        </div>
        <div className="product-info-container">
            <div className="product-info">
                <p className='company-name'>SNEAKER COMPANY</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className='product-info-text'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outter sole, they'll withstand everything the weather can offer.</p>
                <div className="product-price">
                    <div className="product-now-price">
                        <span className='price'>$125.00</span>
                        <span className="discount">50%</span>
                    </div>
                    <span className="product-prev-price">$250.00</span>
                </div>
                <div className="product-cart">
                    <div className="add-and-remove">
                        <img src={Minus} alt="Minus" onClick={removeProduct} />
                        <span>{count}</span>
                        <img src={Plus} alt="Plus" onClick={addProduct} />
                    </div>
                    <button onClick={handleAddToCart}>
                        <img src={Cart} alt="Cart icon" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    )
}