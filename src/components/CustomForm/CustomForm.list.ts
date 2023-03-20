import * as Yup from 'yup';

export const validationsList = {
    "login": Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Too Short!').required('Required'),
    }),
    "signup": Yup.object().shape({
        name: Yup.string().min(8, 'Too Short!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        cpf: Yup
        .string()
        .test("len", "Invalid CPF No.", (val = "") => {
          const val_length_without_dashes = val.replace(/-|_/g, "").length;
          return val_length_without_dashes === 12;
        })
        .required("Tel No. is required")
        .min(100, "Name must contain at least 6 characters"),
        password: Yup.string().min(8, 'Too Short!').required('Required'),
    })
} 