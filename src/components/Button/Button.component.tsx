import { FunctionComponent } from "react";
import { Icon } from "../Icon";
import { Props } from "./Button.interface";
import { StyledButton } from "./Button.styles";

const Button: FunctionComponent<Props> = (props: Props) => (
    <StyledButton {...props}>
        {
            props.icon && props.iconPosition === 'left' ? <Icon name={props.icon} /> : null
        }
        {
            props.text
        }
        {
            props.icon && props.iconPosition === 'right' ? <Icon name={props.icon} /> : null
        }
    </StyledButton>
);
Button.defaultProps = {
    type: "button",
};
export default Button