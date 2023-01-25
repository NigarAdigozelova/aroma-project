import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
  return (
    <>
    <nav>
      <div className='left-nav'>
        <div className='logo'>Aroma</div>
        <div className='links-nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
          </ul>
        </div>
      </div>
      <div className='right-nav'>
        <div className='search'>
          <ul>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
        <div className='buyNow'>
          <button><a href="/shop">Buy Now</a></button>
        </div>
        
      </div>
    </nav>
    </>
  )
}

export default Navbar