import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestSelling></BestSelling>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};
export default Home;