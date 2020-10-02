import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header__option">
                    <span className="header__opeionLineOne">Hello Yoo</span>
                    <span className="header__opeionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__opeionLineOne">Returns</span>
                    <span className="header__opeionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__opeionLineOne">Your</span>
                    <span className="header__opeionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__opeionLineTwo header__basketCount">0</span>

                </div>
            </div>
        </div>
    )
}

export default Header
