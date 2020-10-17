import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                value={getBasketTotal(basket)}
                displayType={'text'}
                decimalScale={2}
                thousandSeparator={true}
                prefix={'$'}
                renderText={value => <>
                <p>
                        Subtotal ({basket.length} items): <strong>{ `${value}` }</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/>This order contains a gift!
                </small>
                </>} 
            />
            <button className='subtotal__button'>Proceed To Checkout</button>

        </div>
    )
}

export default Subtotal
