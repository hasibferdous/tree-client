import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import CategoreyImg from '../../../assets/3.jpg';

const Categories = () => {
    return (
        <div>
            <Helmet>
                <title>Tree Emporium | Categories</title>
            </Helmet>
            <Cover img={CategoreyImg} title='Categories'></Cover>
            <h1>Categories</h1>
        </div>
    );
};
export default Categories;