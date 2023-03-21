import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContainerSign from "./ContainerSign.component";
import { Props } from "./ContainerSign.interface";
import { validationsList } from "../CustomForm/CustomForm.list";

export default {
    title: "Components/ContainerSign",
    component: ContainerSign,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: 'ContainerSign.component.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./ContainerSign.component'),
                    languague: 'tsx'
                },
                {
                    fileName: 'ContainerSign.interface.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./ContainerSign.interface'),
                    languague: 'tsx'
                },
                {
                    fileName: 'ContainerSign.styles.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./ContainerSign.styles'),
                    languague: 'tsx'
                },
            ]
        }
    },
    argTypes: {
        signUpForm: {
            control: false,
        },
        loginForm: {
            control: false,
        },
    }

} as ComponentMeta<typeof ContainerSign>;

const Template: ComponentStory<typeof ContainerSign> = (props: Props) => {
    return <ContainerSign {...props} />
}

export const Default = Template.bind({});
Default.args = {
    loginForm: {
        fields: [
            {
                placeholder: 'Email',
                name: 'email',
                onChange: () => {},
                onBlur: () => {},
                type: "email"
            },
            {
                placeholder: 'Senha',
                name: 'password',
                onChange: () => {},
                onBlur: () => {},
                type: "password"
            },
        ],
        textButtonSubmit: "Criar",
        title: 'Login Form',
        typeButton: "submit",
        substitle: 'subtitle login Form',
        validationSchema: validationsList['login'],
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: () => {

        }
    },
    signUpForm: {
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
                type: "email"
            },
            {
                placeholder: 'Senha',
                name: 'password',
                onChange: () => {},
                onBlur: () => {},
                type: "password"
            },
        ],
        textButtonSubmit: "Logar",
        typeButton: "submit",
        title: 'Sign Up Form',
        substitle: 'subtitle SignUp Form',
        validationSchema: validationsList['signup'],
        initialValues: {
            name: '',
            email: '',
            password: '',
            cpf: '',
        },
        onSubmit: () => {

        }
    }
}