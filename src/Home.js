import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg" alt="" />

            <div className="home__row">
                <Product title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xoX7tP-GEDB48omQQSEf3CHe5FowfmuIXA&usqp=CAU" rating={5} />
                <Product title='OnePlus 10 Pro | 5G Android Smartphone | 6.7” QHD+ Display | 12GB+256GB | U.S. Unlocked | Triple Camera co-Developed with Hasselblad | Volcanic Black' price={850} image="https://m.media-amazon.com/images/I/81qOD8EZTjL.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={4}/>
            </div>

            <div className="home__row">
                <Product title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price={109.95} image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rating={4} />
                <Product title="Mens Casual Premium Slim Fit T-Shirts " price={22.3} image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" rating={4} />
                <Product title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" price={695} image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" rating={5}/>
            </div>
            
            <div className="home__row">
                <Product title="WD 2TB Elements Portable External Hard Drive - USB 3.0 " price={64} image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" rating={5} />
                <Product title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s" price={109} image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" rating={4} />
            </div>
        </div>
    </div>
  )
}

export default Home