import React from 'react';
import {CardLists} from '../../Container/config';
import VideoItem from './VideoItem/index';
import './styles.scss';

export default ()=>{
        return(<div className='row videos-container'> 
              {CardLists.map((item,index)=> <VideoItem key={index} item={item}/>)}
        </div>)
}

