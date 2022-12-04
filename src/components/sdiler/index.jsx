import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner01 from '../../assets/images/assets1.jpg'
import banner02 from '../../assets/images/assets2.jpeg'
import banner03 from '../../assets/images/assets3.png'
const Slider = () => {
    return (
        <Carousel Infinite loop={true} autoPlay={true} interval={2000}>

            <div>
                <img src={banner01} />
            </div>
            <div>
                <img src={banner02} />
            </div>
            <div>
                <img src={banner03} />
            </div>
        </Carousel>
    );
}
export default Slider