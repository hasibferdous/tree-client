import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

const Categories = () => {
    return (
        <div>
            <Helmet>
                <title>Tree Emporium | Categories</title>
            </Helmet>
            <Cover></Cover>
            <h1>Categories</h1>
        </div>
    );
};
export default Categories;