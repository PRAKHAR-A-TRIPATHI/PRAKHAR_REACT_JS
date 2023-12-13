import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Div, Form, H1, Input, Label, OtpInput, P, Span, Toggle } from '../style_component/Style'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { initialValues, mobileNum, validOtp, validPassword } from '../service/data';
import { LoginSchema } from '../service/Validation';
import OtpInputs from '../component/OtpInputs';
import { DataContext } from '../component/Context';
import { useNavigate, useParams } from 'react-router-dom'
import PasswordInput from '../component/PasswordInput';

function Login() {
    const [opration, setOpration] = useState(false);
    const { mobileNumber, setMobileNumber } = useContext(DataContext);
    const [otp, setOtp] = useState("");
    const [togglePass, setTogglePass] = useState(false);
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            if (values.password.trim() || otp.trim()) {
                if (opration) {
                    validOtp == otp ? toast.success('login sussefully') : toast.warning('not valid otp');
                } else {
                    validPassword === values.password ? toast.success('login sussefully ') : toast.warning('not valid Password');

                }
                action.resetForm()
            } else {
                toast.error("Please enter password")
            }
        }

    });
    
    useEffect(() => {
        if (!mobileNumber) {
            navigate('/');
        }
    }, [mobileNumber])
  
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Div>
                    <H1>Login</H1>
                </Div>
                <Div>
                    <Span>
                        <P>Mobile Number</P>
                        <P color='gray'>{mobileNumber && mobileNumber}</P>
                    </Span>
                    <P color="blue" onClick={() => navigate("/")}>Change</P>
                </Div>
                <Div>
                    {opration ?
                        <P>Enter OTP to verify</P> :
                        <Label>Password</Label>}

                </Div>
                {opration ?
                    <OtpInputs setOtp={setOtp} name="otp" onChange={handleChange(otp)} />
                    :
                    <PasswordInput values={values} handleChange={handleChange} />
                }
                <Div>
                    <P color='blue' onClick={() => setOpration(!opration)}>
                        {opration ? "Login Via Password" : "Or Login Via Otp"}
                    </P>
                </Div>
                <Button type='submit'>SUBMIT</Button>
            </Form>

        </Container>
    )
}

export default Login
