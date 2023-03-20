import { FunctionComponent } from "react";
import { Props } from "./CustomForm.interface";
import { Props as FieldProps } from "../CustomFormField";
import { StyledCustomForm, Subtitle, Title } from "./CustomForm.styles";
import { Formik, Form, FormikValues } from 'formik';
import { CustomFormField } from "../CustomFormField";
import { Button } from "../Button";

const CustomForm: FunctionComponent<Props> = (props: Props) => {

    return (
    <StyledCustomForm>
        <Title>{props.title}</Title>
        <Subtitle>{props.substitle}</Subtitle>
        <Formik
            validationSchema={props.validationSchema}
            validateOnMount
            initialValues={props.initialValues}
            onSubmit={(values) => {
                console.log(values);
                return
            }}
        >
            {
                (   
                    formikProps: FormikValues) => {
                        return(
                            <Form onSubmit={formikProps.onSubmit}>
                                {
                                    props.fields.map((element: FieldProps, index: number) => (
                                        
                                        <CustomFormField 
                                            key={element.placeholder}
                                            onChange={formikProps.handleChange}
                                            onBlur={formikProps.handleBlur}
                                            value={formikProps.values[element.name]}
                                            name={element.name}
                                            type={element.type}
                                            placeholder={element.placeholder}
                                            mask={element.mask}
                                        />
                                    ))
                                }
                                <Button variation="rounded" text={props.textButtonSubmit} type={props.typeButton} onClick={()=> {
                                    formikProps.validateForm();
                                    console.log(formikProps);
                                    if(!formikProps.isValid) {
                                        formikProps.setErrors();
                                    } else {
                                        formikProps.submitForm();
                                    }
                                }}/>
                            </Form>
                        );
                }
            }
        </Formik>
    </StyledCustomForm>
)};

CustomForm.defaultProps = {
    fields: []
}

export default CustomForm;