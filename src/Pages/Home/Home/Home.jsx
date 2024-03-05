import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestSelling></BestSelling>
        </div>
    );
};
export default Home;