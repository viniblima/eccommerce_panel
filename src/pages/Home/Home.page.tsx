import { FunctionComponent } from "react";
import { StyledHomePage } from "./Home.styles";
import { Link, Outlet } from 'react-router-dom';
import { SideNavBar } from "../../components/SideNavBar";
import { ContainerTab } from "../../components";

const HomePage: FunctionComponent = () => (
    <StyledHomePage>
        <SideNavBar/>
        <ContainerTab>
            <Outlet />
        </ContainerTab>
        
    </StyledHomePage>
);

export default HomePage;