import * as Yup from "yup";
import { CheakBoxDiv } from "../style_component/productStyle";

export const LoginSchema = Yup.object({
    number :  Yup.string()
    .test(
        "is-numeric",
        "Phone number can only contain numbers",
        (value) => /^\d+$/.test(value)
    )
    .matches(/^[0-9]{10}$/, {
        message: "Phone number must be exactly 10 digits",
        excludeEmptyString: true,
    })
    .required("Phone number is required"),
});
export const PassSchema = Yup.object({
    password : Yup.string().required("password  is required"),
});


export const cheaboxValidate = Yup.object({
    name : Yup.string().required("Role is required"),
    status : Yup.string().required("Status is required"),
})