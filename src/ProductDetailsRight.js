import React from 'react'
import './ProductDetails.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';



function ProductDetailsRight({ id, title, price, rating, image }) {
    
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div>
        <div className='productDetails__info'>
            <p>{title}</p>
            <div className='productDetails__price'>
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className='productDetails__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) => <StarIcon />)  
                }
                </div>
                <button onClick={addToBasket} className='productDetails__button'>Add To Basket</button>
        </div>
        </div>
    )
}

export default ProductDetailsRight
