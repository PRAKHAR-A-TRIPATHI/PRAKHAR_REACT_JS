import React, { createRef, useRef, useState } from 'react'
import { Button, Container, Div, Form, H1, Input, Label, OtpInput, P, Span, Toggle } from '../style_component/Style'
import { intialArray, mobileNum, validOtp, validPassword } from '../service/data';
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
    const [number, setNumber] = useState("");
    const [error, setError] = useState(false);
    const [logginPage, setLogginPage] = useState(false)
    const [otpArray, setOtpArray] = useState(intialArray);
    const [opration, setOpration] = useState(false);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [togglePass, setTogglePass] = useState(false)
    const inputRefs = useRef([...intialArray].map(() => createRef()));
    const { numbers } = useParams();
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
        if (number.trim() === "" || error) {
            setError(true);
        } else {
            if (mobileNum === Number(number)) {
                setLogginPage(true);
                navigate(`/${number}`)
            } else {
                navigate(`/register/${number}`)
            }
}

    }


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

const HandleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() || otp.trim()) {
        if (opration) {
            validOtp == otp ? alert("login Sussesfully") : alert("not valid otp");
        } else {
            validPassword === password ? alert("login Sussesfully") : alert("not valid password");
        }
    } else {
        alert("Please enter password")
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
                    <H1>Login</H1>
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
                        {otpArray.map((value, index) => (
                            <OtpInput key={index}
                                ref={inputRefs.current[index]}
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                            />
                        ))}
                    </Div> :
                    <Div >
                        <Input
                            type={togglePass ? 'text' : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                        />
                        <Toggle onClick={() => setTogglePass(!togglePass)}>{togglePass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</Toggle>
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
