import React from 'react';

const SellingItems = ({item}) => {
    const {name, imageUrl, price, description} = item;

    return (
        <div className='flex space-x-2 mx-24'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] h-[90px]" src={imageUrl} alt=""/>
            <div className='flex space-x-2'>
                <div>
                    <h3 className='uppercase'>{name}</h3>
                    <p className='w-72'>{description.slice(0,120)}...see more</p>
                </div>
                <p className='text-red-700'>৳{price}</p>
            </div>
            
        </div>
    );
};

export default SellingItems;