import * as Yup from "yup"

export const myaccountValidation = Yup.object().shape({
    email: Yup.string().email().optional(),
    first_name: Yup.string().optional(),
    middle_name: Yup.string().optional(),
    last_name: Yup.string().optional(),
    password: Yup.string().optional(),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords does not match').optional(),

})