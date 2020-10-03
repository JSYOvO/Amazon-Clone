import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider'
const tag = '[CheckoutProduct]';


function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue(); 

    const deleteFromBasket= () => {
        //dispatch the items into the data layer
        dispatch({
            type : 'DELETE_FROM_BASKET',
            item: {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating,
            }
        })
    }

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image}/>
            
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐️</p>
                        ))}
                </div>

                <button onClick={deleteFromBasket}>Remove From basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
