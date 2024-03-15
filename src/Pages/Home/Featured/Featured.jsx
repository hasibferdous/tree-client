import React from 'react';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';

import featuredImage from '../../../assets/slide07.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="Check It Out" heading="Best Selling !"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-200 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img className='w-96 h-52' src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Cactus</p>
                    <p>A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some 1,750 known species of the order Caryophyllales. The word cactus derives, through Latin, from the Ancient Greek word κάκτος, a name originally used by Theophrastus for a spiny plant whose identity is now not certain</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;