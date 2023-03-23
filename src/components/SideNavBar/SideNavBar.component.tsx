import { FunctionComponent } from "react";
import { ContainerLogo, ContainerRoutes, ContainerSignOut, StyledLink, StyledLinkContainer, StyledNav } from "./SideNav.styles";

const SideNavBar: FunctionComponent = () => {
    return(
        <StyledNav>

            <ContainerLogo/>
            <ContainerRoutes>
                <StyledLinkContainer>
                    <StyledLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</StyledLink>
                </StyledLinkContainer>
                
                <StyledLinkContainer>
                    <StyledLink to="/products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Products</StyledLink>
                </StyledLinkContainer>
                
                <StyledLinkContainer>
                    <StyledLink to="/offers" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Offers</StyledLink>
                </StyledLinkContainer>
                <StyledLinkContainer>
                    <StyledLink to="/users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Users</StyledLink>
                </StyledLinkContainer>
            </ContainerRoutes>
            <ContainerSignOut/>
        </StyledNav>
    );
}

export default SideNavBar;