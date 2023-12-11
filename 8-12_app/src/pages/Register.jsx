import React, { createRef, useRef, useState } from 'react'
import { Button, Container, Div, Form, H1, OtpInput, P, Span, Toggle } from '../style_component/Style'
import { useParams, useNavigate } from 'react-router-dom'
import { intialArray, validOtp, validPassword } from '../service/data';
import OtpInputs from '../component/OtpInputs';
import { toast } from 'react-toastify'


function Register() {
    const [otp, setOtp] = useState("");
    const { number } = useParams();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.trim()) {
            validOtp == otp ? toast.success("Register  Sussesfully") : toast.warning("not valid otp");
        } else {
            toast.error("Please enter otp")
        }
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Div>
                    <H1>Register</H1>
                </Div>
                <Div>
                    <Span>
                        <P>Mobile Number</P>
                        <P color='gray'>{number && number}</P>
                    </Span>
                    <P color="blue" onClick={() => navigate(`/${number}`)}>Change</P>
                </Div>

                <Div>
                    <P>Enter OTP to verify</P>
                </Div>
                <Div>
                    <OtpInputs setOtp={setOtp} />
                </Div>
                <Div>
                    <Button>NEXT</Button>
                </Div>
            </Form>

        </Container>
    )
}

export default Register
