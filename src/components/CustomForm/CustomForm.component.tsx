import { FunctionComponent } from "react";
import { Props } from "./CustomForm.interface";
import { Props as FieldProps } from "../CustomFormField";
import { LocalButton, StyledCustomForm, Subtitle, Title } from "./CustomForm.styles";
import { Formik, Form, FormikValues } from 'formik';
import { CustomFormField } from "../CustomFormField";
import { ErrorForm } from "../ErrorForm";

const CustomForm: FunctionComponent<Props> = (props: Props) => {

    return (
    <StyledCustomForm>
        <Title>{props.title}</Title>
        {/* <Subtitle>{props.loading ? "Teste1" : "Teste2"}</Subtitle> */}
        
        <Formik
            validationSchema={props.validationSchema}
            validateOnMount
            initialValues={props.initialValues}
            onSubmit={(values: object) => {
                console.log("submit")
                props.onSubmit(values);
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
                                <ErrorForm showError={props.showError} error={props.error}/>
                                <LocalButton variation="full" text={props.textButtonSubmit} background type={props.typeButton} onClick={()=> {
                                    formikProps.validateForm();
                                    console.log(formikProps)
                                    if(!formikProps.isValid) {
                                        console.log("caiu aqui1")
                                        formikProps.setErrors(formikProps.errors);
                                    } else {
                                        console.log("caiu aqui2")
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