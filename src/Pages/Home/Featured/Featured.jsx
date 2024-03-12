import React from 'react';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';

import featuredImage from '../../../assets/slide01.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle subHeading="Check It Out" heading="Best Selling !"></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>

                </div>
            </div>

        </div>
    );
};

export default Featured;