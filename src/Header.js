import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
// import logo from './logo.jpg'

function Header() {

    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)

    return (
      <nav className='header'>
        {/* Logo here */}
        <Link className='header__textLogo' to='/'>
          {/* <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo' alt='' /> */}
          {/* <img src={logo} className='header__logo' alt='' /> */}
          <p>Manuviour</p>
        </Link>
        {/* Search Field */}
        <div className='header__search'>
          <input type='text' className='header__searchInput' />
          <SearchIcon className='header__searchIcon' />
        </div>

        {/* 3 Links */}
        <div className='header__nav'>
          {/* 1st Link */}
          <Link to='/login' className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Hello Meer</span>
              <span className='header__optionLineTwo'>Sign In</span>
            </div>
          </Link>

          {/* 2nd Link */}
          <Link to='/' className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          {/* 3rd Link */}
          <Link to='/' className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
            </div>
          </Link>

          {/* 4th Link */}
          <Link to='/checkout' className='header__link'>
            <div className='header__optionBasket'>
              <ShoppingBasketIcon />
              <span className='header__optionLineOne header__basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
