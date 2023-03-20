import { Props as FieldProps } from "../CustomFormField";
import * as Yup from 'yup';

export interface Props {
    fields: FieldProps[];
    title: string;
    substitle: string;
    initialValues: object;
    onSubmit(): void;
    validationSchema: Yup.ObjectSchema<any>;
    textButtonSubmit: string;
    typeButton: "button" | "submit" | "reset";
}