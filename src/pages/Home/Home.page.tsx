import { FunctionComponent } from "react";
import { StyledHomePage } from "./Home.styles";
import { Link } from 'react-router-dom';

const HomePage: FunctionComponent = () => (
    <StyledHomePage>
        Home
        <Link to="login">Login</Link>
        <Link to="/login">Login Barra</Link>
    </StyledHomePage>
);

export default HomePage;