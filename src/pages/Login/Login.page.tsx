import { FunctionComponent } from "react";
// import { ContainerSign } from "../../components";
// import { validationsList } from "../../components/CustomForm";
import { StyledLoginPage } from "./Login.styles";
import { validationsList, ContainerSign, } from "../../components";
import { Props as CustomFormProps } from "../../components/CustomForm";
// import { Props as FormProps } from '../../components/CustomForm';


const LoginPage: FunctionComponent = () => {
    const signUpForm: CustomFormProps = {
        fields: [
            {
                placeholder: 'Nome',
                name: 'name',
                onChange: () => {},
                onBlur: () => {},

                type: "text"
            },
            {
                placeholder: 'CPF',
                name: 'cpf',
                onChange: () => {},
                onBlur: () => {},
                type: "text",
                mask: 'cpf'
            },
            {
                placeholder: 'Email',
                name: 'email',
                onChange: () => {},
                onBlur: () => {},
                type: 'email'
            },
            {
                placeholder: 'Senha',
                name: 'password',
                onChange: () => {},
                onBlur: () => {},
                type: 'text'
            },
        ],
        title: 'Sign Up Form',
        textButtonSubmit: "Criar",
        typeButton: "button",
        substitle: 'subtitle sign up Form',
        validationSchema: validationsList['signup'],
        initialValues: {
        },
        onSubmit: () => {

        },
        loading: false,
        showError: false,
        error: "",
    };
    
    const loginForm: CustomFormProps = {
        
        fields: [
            {
                placeholder: 'Email',
                name: 'email',
                onChange: () => {},
                onBlur: () => {},
                type: 'email'
            },
            {
                placeholder: 'Senha',
                name: 'password',
                onChange: () => {},
                onBlur: () => {},
                type: 'password'
            },
        ],
        textButtonSubmit: "Logar",
        typeButton: "button",
        title: 'Login Form',
        substitle: 'subtitle Login Form',
        validationSchema: validationsList['login'],
        initialValues: {

        },
        onSubmit: () => {

        },
        loading: false,
        showError: false,
        error: "",
    };
    
    return(
        <StyledLoginPage>
            <ContainerSign 
                loginForm={loginForm}
                signUpForm={signUpForm}
            />
        </StyledLoginPage>
    );
};

export default LoginPage;