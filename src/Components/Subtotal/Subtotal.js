import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from '../../StateProvider';
import {getBasketTotal} from '../../reducer.js';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue(); 

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={
                    basket?.reduce(function(prev, value){
                        console.log(prev + value.price);
                        return prev + value.price;
                    }, 0)
                }
                // value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Procees to Checkout</button>
        </div>
    )
}

export default Subtotal ;
