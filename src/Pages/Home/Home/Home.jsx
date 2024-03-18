import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tree Emporium | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BestSelling></BestSelling>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};
export default Home;