import * as Yup from "yup";

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


