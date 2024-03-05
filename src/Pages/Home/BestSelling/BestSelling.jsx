import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTilte/SectionTitle';
import SellingItems from '../../Shared/SellingItems/SellingItems';

const BestSelling = () => {
    const [sell, setSell] = useState([]);
    useEffect( () =>{
        fetch('plants.json')
        .then(res => res.json())
        .then(data =>{
            const bestSelling = data.filter(item => item.category === 'popular');
            setSell(bestSelling)
        })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle
            heading={'Best Selling'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    sell.map(item=><SellingItems
                        key={item._id}
                        item={item}
                    ></SellingItems>)
                }
            </div>
        </section>
    );
};

export default BestSelling;