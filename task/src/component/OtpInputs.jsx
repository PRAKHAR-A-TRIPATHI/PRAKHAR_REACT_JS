import React, { createRef, useRef, useState } from 'react'
import { intialArray } from '../service/data';
import { Div, OtpInput } from '../style_component/Style';

function OtpInputs({ setOtp }) {
    const [otpArray, setOtpArray] = useState(intialArray);
    const inputRefs = useRef([...intialArray].map(() => createRef()));
    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newOtp = [...otpArray];
            newOtp[index] = value;

            setOtpArray(newOtp);
            setOtp(newOtp.join(''));
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
    return (
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
    )
}

export default OtpInputs
