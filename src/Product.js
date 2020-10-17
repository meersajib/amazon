import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom'



function Product({ id, title, price, rating, image }) {
    
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
            <div className='product'>
            <Link to={`/product/${id}`}>
            <div className='procut__info'>
                    <p>{title}</p>
                    <div className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <div className='product__rating'>
                        {
                            Array(rating)
                            .fill()
                            .map((_) => <StarIcon />)  
                        }
                    </div>
                </div>
            </Link>
                <Link to={`/product/${id}`}>
                <img src={image} alt='' />
                </Link>
                <button onClick={addToBasket}>Add To Basket</button>
            </div>
    )
}

export default Product
