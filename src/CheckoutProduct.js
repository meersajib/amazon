import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
        console.log(id)
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt='' /> 
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => <StarIcon />)  
                    }
                </div>
                <button onClick={removeFromBasket} className='checkoutProduct__button'>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
