import { FunctionComponent, useMemo } from "react";
import { Props } from "./CustomFormField.interface";
import { maskOptions } from "./CustomFormField.list";
import InputMask from "react-input-mask";
import { StyledCustomFormFields, StyledErrorMessage, StyledInput } from "./CustomFormField.styles";

const CustomFormField: FunctionComponent<Props> = (props: Props) => {
    const maskValue = useMemo(() => maskOptions[props.mask!], [props.mask]);
    
    return (
        <StyledCustomFormFields>
            {
                maskValue
                ? <InputMask 
                    mask={maskValue}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    value={props.value || ""}
                    
                    >
                        <StyledInput type={props.type} name={props.name} placeholder={props.placeholder} />
                    </InputMask>
                :   <StyledInput type={props.type} name={props.name} value={props.value || ""} onChange={props.onChange} placeholder={props.placeholder}/>    
            }
            <StyledErrorMessage name={props.name} component="div" />
        </StyledCustomFormFields>
    );
};

export default CustomFormField;