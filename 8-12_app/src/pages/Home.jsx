import React, { useState } from 'react'
import { Button, Container, Div, Form, H1, Input, Label, P } from '../style_component/Style'
import { mobileNum } from '../service/data';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [number, setNumber] = useState("");
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const hadleChange = (e) => {
        if(/^\d{0,10}$/.test(e.target.value)){
            setNumber(e.target.value);
            setError(false)
        }else{
            setError(true)
            setNumber(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number.trim() === "" || error) {
            setError(true);
        } else {
            mobileNum === Number(number) ? navigate(`/login/${number}`) : navigate(`/register/${number}`)
        }

    }
    return (
        <Container>
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

        </Container>
    )
}

export default Home
