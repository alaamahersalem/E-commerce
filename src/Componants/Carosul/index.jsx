import React from 'react';
import {CarosulItems} from '../../Container/config'
import AliceCarousel from 'react-alice-carousel';
import CardItem from './CardItem';

import "react-alice-carousel/lib/alice-carousel.css";
import './style.scss';

export default class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    responsive: { 1024: { items:4  } },
    galleryItems: this.galleryItems(),
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  galleryItems() {
    return CarosulItems.map((item,i) => <CardItem key={i} item={item}/> )
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
        <div className="gallery">
        <div className="gallery-title">
        <div className="trapezium"><span>You May Also Like</span></div>
        </div>
        <i onClick={() => this.slidePrev()} className="fas fa-chevron-left"></i>

        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
         <i onClick={() => this.slideNext()} className="fas fa-chevron-right"></i>
        </div>
     
    )
  }
}

