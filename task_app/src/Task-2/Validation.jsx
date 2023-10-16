import * as Yup from "yup";
import dayjs from "dayjs";

const eighteenPlus = (date) => {
    const birthdate = dayjs(date);
    const currentDate = dayjs();
    const age = currentDate.diff(birthdate, 'years');

    return age >= 18;
};
export const signUpSchema = Yup.object({
    Number: Yup.number()
        .test(
            "is-ten-digits",
            "Number must be exactly 10 digits",
            (value) => String(value).length === 10
        )
        .required("Number must be 10 digits"),
    Name: Yup.string().min(2).required("Name is required "),
    Password: Yup.string()
        .min(6)
        .required("Please enter your password")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one letter, one symbol, and one number"
        ),
    ConfirmPasswords: Yup.string().required().oneOf([Yup.ref("Password"), null], "password must match"),
    Date: Yup.date().required("Date of birth is required").test( "You must be 18 years or older", eighteenPlus),
});