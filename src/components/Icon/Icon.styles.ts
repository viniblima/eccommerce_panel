import styled from "styled-components";
import { Props } from "./Icon.interface";

export const SourceIcon = styled.div<Props>`
    display: inline-block;
    vertical-align: middle;
    pointer-events: none;
    font-size: inherit;
    margin: 0 6px;
    width: ${(props) => props.width}px;

    > svg {
        display: block;
        margin: 0 auto;
    }
`;