import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="px-16">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;