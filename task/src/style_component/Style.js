import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
`;
export const H1 = styled.h1`
 padding: 5px 0px;
`;
export const Span = styled.span`
padding: 5px 0px;
`;
export const Div = styled.div`
 padding: 5px;
 display: inline-flex;
 justify-content: space-between;
 width: 100%;
`;
export const PasswordInputDiv = styled.div`
 padding: 5px;
 width: 100%;
 position: relative;
`;
export const P = styled.p`
 padding: 5px 0px;
 font-weight: bold;
 color: ${(({ color }) => color)};
 
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
export const Form = styled.form`
background-color:white;
border: 1px solid #ddd;
padding: 20px;
width: 400px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
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
export const Input = styled.input`
width: 100%;
padding: 10px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 10px;
position: relative;
`;
export const Label = styled.label`
display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;
export const Toggle = styled.span`
display: block;
 position: absolute;
  right: 5%;
  top: 30%;
`;