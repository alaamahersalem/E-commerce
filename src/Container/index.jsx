import React from 'react';

import AsideAccordion from '../Componants/AsideAccordion';
import Tabs from '../Componants/Tabs';
import Carosule from '../Componants/Carosul';
import VideoList from '../Componants/VideoList';
import Header from '../Componants/Header'
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const Container = () => (
   <div>
    <div className="row px-0">
    <Header/>
    </div>
    <div className="row">
    <div className="col-md-9 col-sm-12 pr-0">
    <div className="left-side">
    <div className="left-side--container"> 
       <Tabs/>
       <VideoList/>
       <Carosule/>
       </div>
    </div>
    </div>
       <div className="col-md-3 col-sm-12 right-side pr-0 pl-0">
       <AsideAccordion/>
       </div>
   </div>
   </div>
);
 
export default Container;