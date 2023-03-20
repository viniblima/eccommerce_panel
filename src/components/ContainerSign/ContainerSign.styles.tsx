import styled from "styled-components";
import styles from '../../styles/Theme';
import { ContainerProps, Props } from "./ContainerSign.interface";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabProps } from "react-tabs";

export const StyledTab = styled(Tab)<TabProps>`
    width: 50%;
    display: inline-block;
    background-color: ${styles.colors.primary};
    cursor: pointer;
    color: ${styles.colors.white};
    text-align: center;

`;

export const StyledTabList = styled(TabList)`
    margin: 0;
    padding: 5px;
    background-color: ${styles.colors.primary};

    .react-tabs__tab--selected {
        background-color: ${styles.colors.white};
        color: ${styles.colors.black};
        
    }
`;

export const StyledContainerSign = styled.div<Props>`
    background-color: ${styles.colors.white};
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;

    @keyframes show {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%, 100% {
            opacity: 1;
            z-index 5;
        }
    }

    @media (max-width: 768px) {
        height: 100%;
        border-radius: unset;
    }
`;

export const StyledSignUpContainer = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSignInContainer = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;


export const TitlePanel = styled.h1`
    font-weight: bold;
    margin: 0;
`;

export const SubtitlePanel = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`;