import React, { useState } from 'react'
import Heading from './Heading'
import OtpInputs from './OtpInput';
import { toast } from 'react-toastify';
import PasswordInput from './PasswordInput';
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom'
import { instialValue, validOtp, validPassword } from '../services/data';
import { Container, FlexDiv, HeadingTag, LogginDiv, LogginForm, SubmitButton, Text, ToggleButton } from '../style_component/Style'

function LoginComp({ setShow }) {
    const [opration, setOpration] = useState(false);
    const [togglePass, setTogglePass] = useState(false);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
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
                validOtp == Number(otp) ?navigate('/user') : setErrors({ otp: 'invalid Otp' });
            } else {
                validPassword === values.password ? navigate('/user') : setErrors({ password: 'invalid Password' });
            }
        }
    });
    return (
        <Container>
            <LogginDiv>
                {opration && <HeadingTag>Login</HeadingTag>}
                <Heading setShow={setShow} />
                <LogginForm onSubmit={handleSubmit}>
                    {opration ?
                        <OtpInputs setOtp={setOtp} errors={errors} />
                        :
                        <PasswordInput values={values} handleChange={handleChange} togglePass={togglePass} setTogglePass={setTogglePass} errors={errors} touched={touched} />
                    }
                    <SubmitButton type='submit'>SUBMIT</SubmitButton>
                </LogginForm>
                <FlexDiv>
                    <ToggleButton color='blue' onClick={() => setOpration(!opration)}>
                        {opration ? "Login Via Password" : "Or Login Via Otp"}
                    </ToggleButton >
                </FlexDiv>
            </LogginDiv>
        </Container>
    )
}

export default LoginComp
