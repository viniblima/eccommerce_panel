import { Props as FormProps } from '../CustomForm';

export interface Props {
    loginForm: FormProps;
    signUpForm: FormProps;
}

export interface ContainerProps extends Props{
    // tab: Tab;
    // handleClickFirst: () => void;
    // handleClickSecond: () => void;
}

enum TabOptions {
    'left',
    'right'
};

export type Tab = keyof typeof TabOptions;