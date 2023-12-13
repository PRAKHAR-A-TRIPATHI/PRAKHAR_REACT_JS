import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../component/Context';
import { Button, Container, Div, Form, H1, P, Span } from '../style_component/Style';
import OtpInputs from '../component/OtpInputs';
import { useNavigate } from 'react-router-dom'
import { initialValues, validOtp } from '../service/data';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import MobileInput from '../component/MobileInput';
import { LoginSchema } from '../service/Validation';

function Register() {
    const { mobileNumber, setMobileNumber } = useContext(DataContext);
    const [otp, setOtp] = useState();
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema:LoginSchema,
        onSubmit: (values) => {
            if (show) {
                setShow(false);
                setMobileNumber(values.number)
            } else {
                if (otp) {
                    validOtp == otp ? toast.success('login sussefully') : toast.warning('not valid otp');
                } else {
                    toast.error("Please enter otp")
                }
            }

        }

    });
    useEffect(() => {
        if (!mobileNumber) {
            setShow(true);
        }
    }, [])
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Div>
                    <H1>Register</H1>
                </Div>
                {show ?
                    <MobileInput handleChange={handleChange} value={values.number} errors={errors} touched={touched}/>
                    :
                    <>
                        <Div>
                            <Span>
                                <P>Mobile Number</P>
                                <P color='gray'>{mobileNumber && mobileNumber}</P>
                            </Span>
                            <P color="blue" onClick={() => navigate("/")}>Change</P>
                        </Div>
                        <Div>
                            <P>Enter OTP to verify</P>
                        </Div>
                        <Div>
                            <OtpInputs setOtp={setOtp} />
                        </Div>

                    </>}
                <Button type='submit'>SUBMIT</Button>
            </Form>
        </Container>
    )
}

export default Register
