import React from 'react';
import Subtotal from '../Subtotal/Subtotal.js';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.js';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
const tag = "[Checkout]";
function Checkout() {

    const [{basket}, dispatch] = useStateValue(); 

    return (
        <div className= "checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shoppong Basket
                    </h2>

                    {basket?.map(element => (
                        <CheckoutProduct
                            id= {element.id}
                            title= {element.title}
                            image= {element.image}
                            price= {element.price}
                            rating= {element.rating}
                        />
                    ))}
                </div>
            </div>
            
            <div className="checkout__right">
                    <Subtotal/>
            </div>
        </div>
        
    )
}

export default Checkout;

