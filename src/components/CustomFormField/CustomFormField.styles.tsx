import styled from "styled-components";
import styles from '../../styles/Theme';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from "react-text-mask";

export const StyledCustomFormFields = styled.div``;

export const StyledMaskedInput = styled(MaskedInput)`
    background-color: ${styles.colors.grayLight};
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const StyledInput = styled(Field)`
    background-color: ${styles.colors.grayLight};
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const StyledErrorMessage = styled(ErrorMessage)``;

