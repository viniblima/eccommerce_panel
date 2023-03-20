import { maskOptions } from "./CustomFormField.list";

export interface Props {
    type: TypeInput;
    name: string;
    placeholder: string;
    onChange(e: any): void;
    onBlur(e: any): void;
    value?: string | number | readonly string[] | undefined;
    mask?: MaskOption;
    maskChar?: string;
}

enum TypeInputOptions {
    'email',
    'text',
    'password',
};

export type TypeInput = keyof typeof TypeInputOptions;
export type MaskOption = keyof typeof maskOptions;