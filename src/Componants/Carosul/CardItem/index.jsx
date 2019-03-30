
import React from 'react';
import './style.scss'

export default ({item}) => (
    <div className="cardItem"> 
    <div className="cardItem--body">
     <i className={`favourite  ${item.isFavourite ?"fas fa-heart":'far fa-heart' }`}></i>
     <span className="lbl" > 
         <span className="discount">{item.lbl}</span>
         {
             item.canShop? 
             <span className="canShop">
              <span className="canShop-plus">+</span>
               <span className={`${item.canShop ?"fas fa-store":'' }`}/>
             </span>
             : null
         }    
    </span>
     <img alt='img'  src={item.imageURl}/> 
     </div>
    </div>

);
