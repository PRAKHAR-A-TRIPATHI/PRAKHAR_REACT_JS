import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
`;

export const WelcomeForm = styled.form`
background-color:white;
border: 1px solid #ddd;
padding: 20px;
width: 400px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
 padding: 5px 0px;
`;
export const HeadingTag = styled.h1`
 padding: 5px 0px;
`;

export const MoblieDiv = styled.div`
 padding: 5px;
 width: 100%;
`;
export const Mobilespan = styled.span`
padding: 5px 0px;
`;
export const InputLabel = styled.label`
display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;
export const Input = styled.input`
width: 100%;
padding: 10px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 10px;
position: relative;
`;
export const FlexDiv = styled.div`
 padding: 5px;
 display: inline-flex;
 justify-content: space-between;
 width: 100%;
`;
export const Text = styled.p`
 padding: 5px 0px;
 font-weight: bold;
 color: ${(({ color }) => color)};
 
`;
export const Changebutton = styled.button`
border:none;
background-color:white;
 padding: 5px 0px;
 font-weight: bold;
 color: ${(({ color }) => color)};
 
`;

export const MobileErrors = styled.p`
 padding: 5px 0px;
 font-weight: bold;
 color: ${(({ color }) => color)};
 
`;
export const Errors = styled.p`
 padding: 5px 0px;
 font-weight: bold;
 color: red;
 
`;
export const SubmitButton = styled.button`
background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin:5px;
  margin-top: 10px;
  width: 100%;
`;
export const LogginDiv = styled.div`
background-color:white;
border: 1px solid #ddd;
padding: 20px;
width: 400px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const LogginForm = styled.form`
background-color:white;
border-radius: 8px;
`;
export const OtpInput = styled.input`
width: 40px;
height: 40px;
font-size: 18px;
text-align: center;
margin: 0 5px;
border: 1px solid #ccc;
border-radius: 4px;
outline: none;

&:focus{
  border: 1px solid blue;
}
 
`;
export const PasswordInputDiv = styled.div`
 padding: 5px;
 width: 100%;
 position: relative;
`;
export const Toggle = styled.span`
display: block;
 position: absolute;
  right: 5%;
  top: 30%;
`;
export const ToggleButton = styled.button`
cursor: context-menu;
border:none;
background-color:white;
 padding: 5px 0px;
 font-weight: bold;
 color: ${(({ color }) => color)};
 
`;
export const RegisterDiv = styled.div`
background-color:white;
border: 1px solid #ddd;
padding: 20px;
width: 400px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const RegisterForm = styled.form`
background-color:white;
border-radius: 8px;

`;