import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <img className='home__iamge' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
            <div className='home__row'>
                <Product
                id={1}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={130.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81IQvh43G8L._UL1500_.jpg"
                />
                <Product
                id={2}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={103.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            </div>
            <div className='home__row'>
                <Product
                id={3}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={12.56}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg"
                />
                <Product
                id={4}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={13.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/718B6zl%2Bb6L._AC_SX679_.jpg"
                />
                 <Product
                id={5}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={53.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71%2BhwPZiawL._AC_SY741_.jpg"
            />
            </div>
            <div className='home__row'>
                <Product
                id={6}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={68.07}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81ZlYyOWBuL._AC_SX679_.jpg"
                />
                <Product
                id={7}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={39.56}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61WQSvgxsHL._AC_SL1500_.jpg"
            />
            </div>
            <div className='home__row'>
                <Product
                id={8}
                title="The Testaments: The Sequel to The Handmaid's Tale"
                price={16.00}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41tQlCX2HbL._SX327_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
