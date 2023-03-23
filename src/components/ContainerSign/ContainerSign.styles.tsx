import styled from "styled-components";
import styles from '../../styles/Theme';
import { ContainerProps, Props } from "./ContainerSign.interface";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabProps } from "react-tabs";

export const StyledTab = styled(Tab)<TabProps>`
    width: 50%;
    display: relative;
    display: inline-block;
    background-color: ${styles.colors.secondary};
    cursor: pointer;
    color: ${styles.colors.white};
    text-align: center;
    
    height: 42px;

`;

export const StyledBorderRight = styled.div`
    width: 42px;
    height: 42px;
    background-color: ${styles.colors.white};
    position: absolute;
    left: 50%;
    top: 0px;
`;

export const StyledBorderInsideLeft = styled.div`
    width: 42px;
    height: 42px;
    background-color: ${styles.colors.secondary};
    border-bottom-right-radius: 21px;
`;

export const StyledBorderInsideRight = styled.div`
    width: 42px;
    height: 42px;
    background-color: ${styles.colors.secondary};
    border-bottom-left-radius: 21px;
`;

export const TitleTab = styled.div`
    margin: 0;
    height: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        font-weight: bold;
    }
`;

export const StyledBorderLeft = styled.div`
    width: 42px;
    height: 42px;
    background-color: ${styles.colors.white};
    position: absolute;
    right: 50%;
    top: 0px;
`;

export const StyledTabList = styled(TabList)`
    margin: 0;
    width: 100%;
    background-color: ${styles.colors.secondary};
    padding: 0;
    height: 42px;

    .react-tabs__tab--selected {
        background-color: ${styles.colors.secondary};
        color: ${styles.colors.black};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .tab0_selected {
        background-color: ${styles.colors.white};
        color: ${styles.colors.black};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 5;

        .tab0border_selected {
            display: none;
        }
    }

    .tab1_selected {
        background-color: ${styles.colors.white};
        color: ${styles.colors.black};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 5;
        
        .tab1border_selected {
            display: none;
        }
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
    min-height: 500px;

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
        width: 100%;
    }
`;

export const StyledSignUpContainer = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 480px;
    margin: auto;

    @media (max-width: 768px) {
        width: 360px;
    }
`;

export const StyledSignInContainer = styled.div<ContainerProps>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 480px;
    margin: auto;

    @media (max-width: 768px) {
        width: 360px;
    }
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