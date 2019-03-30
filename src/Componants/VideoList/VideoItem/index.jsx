import React from 'react';
import './styles.scss';

export default ({item})=>{  
    return (
      <div className=" col-md-6 col-sm-12 VideoContainer">
      <div className="videoItem ">
      <div className="row ml-0 mr-0">
      <div className="col-6 videoItem-Image pl-0 pr-0">
      <div className="img" style ={ { backgroundImage: "url("+item.imageURl+")" } }>
        
      </div>
      {/* <img src={item.imageURl}/> */}
      <div className="videoItem-Icon">
      <i className="fas fa-play"></i>
      </div>
      
      </div>
      <div className="col-6 videoItem-Txt ">
      <div className="videoItem-Txt-title">{item.title}</div>
      <div>{item.txt}</div>
      </div>
      </div>
      </div>
      </div>
    )
  
}




