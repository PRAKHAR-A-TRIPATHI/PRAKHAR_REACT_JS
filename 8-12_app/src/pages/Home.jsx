import React, { createRef, useRef, useState } from 'react'
import { Button, Container, Div, Form, H1, Input, Label, OtpInput, P, Span, Toggle } from '../style_component/Style'
import {  mobileNum, validOtp, validPassword } from '../service/data';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import OtpInputs from '../component/OtpInputs';

function Home() {
    const [error, setError] = useState(false);
    const [logginPage, setLogginPage] = useState(false)
    const [opration, setOpration] = useState(false);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [togglePass, setTogglePass] = useState(false)
    const { numbers } = useParams();
    const [number, setNumber] = useState(numbers);
    const navigate = useNavigate()

    const hadleChange = (e) => {
        if (/^\d{0,10}$/.test(e.target.value)) {
            setNumber(e.target.value);
            setError(false)
        } else {
            setError(true)
            setNumber(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number.trim() === "" || error || number.length < 10) {
            setError(true);
        } else {
            if (mobileNum === Number(number)) {
                toast.info('valid number');
                setLogginPage(true);
                navigate(`/${number}`)
            } else {
                navigate(`/register/${number}`)
                toast.info('invalid number');
            }
        }

    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (password.trim() || otp.trim()) {
            if (opration) {
                validOtp == otp ? toast.success('login sussefully') : toast.warning('not valid otp');
            } else {
                validPassword === password ? toast.success('login sussefully ') : toast.warning('valid number');
            }
        } else {
            toast.error("Please enter password")
        }
    }
    return (
        <>
            {!logginPage && <Container>
                <Form onSubmit={handleSubmit}>
                    <Div>
                        <H1>Welcome</H1>
                    </Div>
                    <Div>
                        <Label>Enter Mobile Number</Label>
                    </Div>
                    <Div>
                        <Input
                            type='text'
                            placeholder='Please Enter mobile Number'
                            value={number}
                            onChange={hadleChange}
                        />

                    </Div>
                    <Div>
                        {error && <P color="red">Please enter valid mobile number</P>}
                    </Div>
                    <Div>
                        <Button>NEXT</Button>
                    </Div>
                </Form>

            </Container>}
            {logginPage && <Container>
                <Form onSubmit={HandleSubmit}>
                    <Div>
                       {opration&& <H1>Login</H1>}
                    </Div>
                    <Div>
                        <Span>
                            <P>Mobile Number</P>
                            <P color='gray'>{numbers && numbers}</P>
                        </Span>
                        <P color="blue" onClick={() => setLogginPage(false)}>Change</P>
                    </Div>
                    <Div>
                        {opration ?
                            <P>Enter OTP to verify</P> :
                            <Label>Password</Label>}

                    </Div>
                    {opration ?
                        <Div>
                            <OtpInputs setOtp={setOtp} />
                        </Div> :
                        <Div >
                            <Input
                                type={togglePass ? 'text' : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                            />
                            <Toggle onClick={() => setTogglePass(!togglePass)}>{togglePass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</Toggle>
                        </Div>
                    }
                    <Div>
                        <P color='blue' onClick={() => setOpration(!opration)}>
                            {opration ? "Login Via Password" : "Or Login Via Otp"}
                        </P>
                    </Div>
                    <Button type='submit'>SUBMIT</Button>
                </Form>

            </Container>}
        </>
    )
}

export default Home
