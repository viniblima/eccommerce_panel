import { FunctionComponent } from "react";
import { Props } from "./ErrorForm.interface";
import { ErrorContent, StyledErrorForm, Dot } from "./ErrorForm.styles";

const ErrorForm: FunctionComponent<Props> = (props: Props) => {
    return(
        <StyledErrorForm>
            <ErrorContent {...props}><Dot /><p>{props.error}</p></ErrorContent>
        </StyledErrorForm>
    );
}

export default ErrorForm;