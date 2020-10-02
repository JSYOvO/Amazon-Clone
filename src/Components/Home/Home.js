import React from 'react';
import Product from '../Product/Product.js';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"/>
            </div>
            <div className="home__row">
                <Product
                    id="23124"
                    title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
                    price={429.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id="37212"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Silver (4th Generation)"
                    price={1449.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX342_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="24532"
                    title="New Apple MacBook Pro (13-inch, 16GB RAM, 1TB SSD Storage, Magic Keyboard) - Space Gray"
                    price={1999.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bElkQQ7LL._AC_SL1500_.jpg"
                    rating={5}
                />
                <Product
                    id="45645"
                    title="Apple iPhone 11, 64GB, Unlocked - Purple (Renewed)"
                    price={644.97}
                    image="https://images-na.ssl-images-amazon.com/images/I/61DanysfE8L._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id="49583"
                    title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 512GB SSD Storage)"
                    price={1869.92}
                    image="https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
            <Product
                    id="94837"
                    title="Apple iPod Touch (256GB) - Blue (Latest Model)"
                    price={379.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81o3axAhAnL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home;
