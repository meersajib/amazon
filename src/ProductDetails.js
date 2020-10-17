import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import './ProductDetails.css';
import ProductDetailsRight from './ProductDetailsRight';
import ProductDetailsBottom from './ProductDetailsBottom';

function ProductDetails({ list }) {
  let { id } = useParams();
  return (
    <>
      {list
        .filter((item) => item.id === id)
        .map((filterItem) => (
          <div>
            <div className='productDetails'>
              <div className='productDetails__left'>
                <ProductCarousel key={filterItem.id} image={filterItem.image} />
              </div>
              <div className='productDetails__right'>
                <ProductDetailsRight
                  id={filterItem.id}
                  title={filterItem.title}
                  image={filterItem.image}
                  price={filterItem.price}
                  rating={filterItem.rating}
                />
              </div>
            </div>
            <ProductDetailsBottom
              description={filterItem.description}
              review={filterItem.review}
            />
          </div>
        ))}
    </>
  );
}

export default ProductDetails;
