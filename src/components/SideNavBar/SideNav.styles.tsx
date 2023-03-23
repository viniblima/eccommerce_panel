import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from '../../styles/Theme';

export const StyledNav = styled.nav`
    width: 300px;
    background-color: ${styles.colors.backgroundGray};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .active {
        background-color: ${styles.colors.secondary};
        color: ${styles.colors.white};
    }

    .inactive {
        color: ${styles.colors.primary};
    }
`;

export const ContainerLogo = styled.div`
    height: 100px;
    width: 100%;
    background-color: red;
`;

export const ContainerRoutes = styled.div`
    min-height: 100px;

    height: 100%;
`;

export const ContainerSignOut = styled.div`
    height: 100px;
    width: 100%;
    background-color: blue;
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    margin-bottom: 8px;
    padding: 16px;
    border-radius: 16px;
    font-weight: bold;
`;

export const StyledLinkContainer = styled.div`
    border-radius: 16px
`;