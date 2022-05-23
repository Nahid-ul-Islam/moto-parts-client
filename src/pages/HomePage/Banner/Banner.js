import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/Banner_Image/img1.jpg';
import img2 from '../../../images/Banner_Image/img2.jpg';
import img3 from '../../../images/Banner_Image/img3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false}>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img3} />
                </div>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[230px] md:h-full object-cover' src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;