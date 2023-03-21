import styled from 'styled-components';
import styles from '../../styles/Theme';
import { Props } from './Button.interface';


export const StyledButton = styled.button<Props>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    display: inline-block;
    vertical-align: middle;
    text-align: ${(props) => props.variation === 'large' || props.variation === 'full' ? 'center' : 'inherit'};
    cursor: pointer;
    border: unset;
    min-width: ${(props) => props.variation === 'large' ? '440px' : 'inherit'};
    width: ${(props) => props.variation === 'full' ? '100%' : 'inherit'};
    padding: ${(props) => props.background ? '15px 21px' : '0px'};
    font-weight: 500;
    letter-spacing: -0.02em;
    border-radius: 4px;
    font-size: 18px;
    color: ${(props) => props.background ? styles.colors.white : styles.colors.primary};
    background: ${(props) => props.background ? styles.colors.primary : styles.colors.white};
    transition: background-color 0.2s ease 0s;

    :hover {
        background-color: ${(props) => props.background ? styles.colors.secondary : styles.colors.white};
    }

    :focus {
        background-color: ${(props) => props.background ? styles.colors.secondary : styles.colors.white};
    }

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 17px;
        span svg {
            width: 12px;
        }
    }
`;