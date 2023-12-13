import React, { useState } from 'react'
import Heading from './Heading'
import OtpInputs from './OtpInput';
import { toast } from 'react-toastify';
import PasswordInput from './PasswordInput';
import { useFormik } from 'formik';
import { instialValue, validOtp, validPassword } from '../services/data';
import { Container, FlexDiv, HeadingTag, LogginForm, SubmitButton, Text, ToggleButton } from '../style_component/Style'

function LoginComp({ setShow }) {
    const [opration, setOpration] = useState(false);
    const [togglePass, setTogglePass] = useState(false);
    const [otp, setOtp] = useState("");
    const validate = values => {
        const errors = {};
        if (opration) {
            if (!otp) {
                errors.otp = 'Required';
            } else if (otp.length != 6) {
                errors.otp = '6 length required';
            }
        } else {
            if (!values.password) {
                errors.password = 'Required';
            }
        }
        return errors;
    };
    const { values, handleChange, handleSubmit, errors, touched, setErrors } = useFormik({
        initialValues: instialValue,
        validate,
        onSubmit: (values, action) => {
            if (opration) {
                validOtp == Number(otp) ? toast.success('login sussefully') : setErrors({ otp: 'invalid Otp' });
            } else {
                validPassword === values.password ? toast.success('login sussefully ') : setErrors({ password: 'invalid Password' });
            }
        }
    });
    return (
        <Container>
            <LogginForm onSubmit={handleSubmit}>
                {opration && <HeadingTag>Login</HeadingTag>}
                <Heading setShow={setShow} />
                {opration ?
                    <OtpInputs setOtp={setOtp} errors={errors} />
                    :
                    <PasswordInput values={values} handleChange={handleChange} togglePass={togglePass} setTogglePass={setTogglePass} errors={errors} touched={touched} />
                }
                <FlexDiv>
                    <ToggleButton color='blue' onClick={() => setOpration(!opration)}>
                        {opration ? "Login Via Password" : "Or Login Via Otp"}
                    </ToggleButton >
                </FlexDiv>
                <SubmitButton type='submit'>SUBMIT</SubmitButton>
            </LogginForm>
        </Container>
    )
}

export default LoginComp
