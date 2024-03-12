import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestSelling></BestSelling>
            <Featured></Featured>
        </div>
    );
};
export default Home;