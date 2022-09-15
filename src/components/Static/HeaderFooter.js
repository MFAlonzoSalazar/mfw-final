import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AppBackground } from "../StyledComponents";
export default function HeaderFooter(props) {
    return (
        <AppBackground>
            <Header />
            <Outlet />
            <Footer />
        </AppBackground>
    );
}