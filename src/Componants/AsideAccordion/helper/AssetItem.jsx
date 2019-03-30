import React from 'react';
import './AssetItem.scss';

export default ({item}) => (
 <div className="col-md-3  col-sm-6 px-1 AssetItem-Container ">
 <div className="AssetItem"><img  alt="Assetimage" src={item.image}/></div>
 </div> 
);
 
