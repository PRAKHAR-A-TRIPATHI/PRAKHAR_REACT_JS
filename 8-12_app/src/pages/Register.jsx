import React, { createRef, useRef, useState } from 'react'
import { Button, Container, Div, Form, H1, Input, Label, OtpInput, P, Span, Toggle } from '../style_component/Style'
import { useParams, useNavigate } from 'react-router-dom'
import { intialArray, validOtp, validPassword } from '../service/data';


function Register() {
    const [otpArray, setOtpArray] = useState(intialArray);
    const inputRefs = useRef([...intialArray].map(() => createRef()));
    const [otp, setOtp] = useState("");
    const { number } = useParams();
    const navigate = useNavigate()
    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otpArray];
            newOtp[index] = value;

            setOtpArray(newOtp);
            setOtp(newOtp.join(''));
            console.log(newOtp.join(''))

            if (value !== '' && index < intialArray.length - 1) {
                inputRefs.current[index + 1].current.focus();
            }
        }

    };
    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otpArray[index] === '') {
            inputRefs.current[index - 1].current.focus();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( otp.trim()) {
                validOtp == otp ? alert("login Sussesfully") : alert("not valid password");
        } else {
            alert("Please enter password")
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
                    <P color="blue" onClick={() => navigate('/')}>Change</P>
                </Div>

                <Div>
                    <P>Enter OTP to verify</P>
                </Div>
                <Div>
                    {otpArray.map((value, index) => (
                        <OtpInput key={index}
                            ref={inputRefs.current[index]}
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </Div>
                <Div>
                    <Button>NEXT</Button>
                </Div>
            </Form>

        </Container>
    )
}

export default Register
