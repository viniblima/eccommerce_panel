import styled from "styled-components";
import styles from '../../styles/Theme';
import { Props } from "./ErrorForm.interface";

export const StyledErrorForm = styled.div`
    height: 40px;
    margin-bottom: 16px;
    
`;

export const Dot = styled.div`
    height: 6px;
    width: 6px;
    background-color: ${styles.colors.red};
    border-radius: 10px;
`;

export const ErrorContent = styled.div<Props>`
    height: 100%;
    display: ${(props) => props.showError ? 'flex' : 'none'};
    border: 1px solid ${styles.colors.red};
    border-radius: 4px;
    
    align-items: center;
    padding: 0px 16px;
    background-color: ${styles.colors.redHighlight};

    p {
        margin: 0;
        width: fit-content;
        margin-left: 16px;
        color: ${styles.colors.red};
    }
`;