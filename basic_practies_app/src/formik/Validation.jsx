import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Name is required"),
    email: Yup.string().email().required("email is required "),
    passwords:Yup.string().min(6).required("pleasr enter Your  password"),
    ConfirmPasswords:Yup.string().required().oneOf([Yup.ref("passwords"),null],"password must match"),
});