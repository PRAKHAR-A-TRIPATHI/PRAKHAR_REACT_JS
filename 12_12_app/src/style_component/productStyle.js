import styled from 'styled-components';

export const TableContainer = styled.div`
font-family: 'Arial', sans-serif;
background-color: #f4f4f4;
width:100vw
`;

export const TableHeading = styled.h2`
    text-align: center;
    color: #333;
    padding-top:10px
  `
export const TableHeadDiv = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
  `
export const Table = styled.table`
border-collapse: collapse;
width: 90%;
margin: 20px auto;
background-color: #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `
export const Container = styled.div`
font-family: 'Arial', sans-serif;
display:flex;
flex-direction: column;
width: 100vw;
  `
export const CheakBoxForm = styled.form`
font-family: 'Arial', sans-serif;
width: 100vw;
  `
export const TableHead = styled.thead`
padding:1px
  `
export const Tr = styled.tr`
  padding: 1px;
  &:hover {
    background-color: lightblue;
  }
`;
export const HeadTr = styled.tr`
  padding: 1px;
`;
export const Th = styled.th`
border: 1px solid #ddd;
padding: 12px;
text-align: left;
  `
export const Td = styled.th`
border: 1px solid #ddd;
padding: 12px;
text-align: left;
  `
export const TabelBody = styled.tbody`
background-color: #f2f2f2;
  `
export const InputBox = styled.div`
padding:1px;
width:50%;
  `
export const Errors = styled.p`
padding:1px;
text:bold;
color:red;
  `
export const InputDiv = styled.div`
display:flex;
justify-content:space-between;
padding:10px;
  `
export const InputLabel = styled.label`
display:flex;
justify-content:space-between;
padding:1px;
  `
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
`
export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
`
export const Options = styled.option`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
`
export const CheakBoxDiv = styled.div`
width:100%;
 padding:5px;
 display:flex;
 flex-wrap:wrap;
`
export const ButtonDiv = styled.div`
 width:100%;
 display:flex;
 justify-content:end;
`
export const Div = styled.div`
 padding:5px;
 width:50%;
`
export const H2 = styled.h2`
 padding:5px;
 margin:2px;
`
export const Meassage = styled.h2`
 padding:5px;
 margin:2px;
 text-align:center;
`
export const CheakBoxLabel = styled.label`
 padding:5px;
 margin:2px;
`
export const ChekBoxInput = styled.input`
padding:5px;
margin:2px;
`
export const AddUserButton = styled.button`
display: inline-block;
padding: 10px 8px;
font-size: 15px;
margin:2px;
font-weight: bold;
text-align: center;
text-decoration: none;
background-color: blue;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;
&hover :{
    background-color: #45a049;
}
  `
export const CancelButton = styled.button`
display: inline-block;
padding: 10px 8px;
font-size: 15px;
margin:2px;
font-weight: bold;
text-align: center;
text-decoration: none;
background-color: red;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;
&hover :{
    background-color: #45a049;
}
  `
export const DeleteButton = styled.button`
display: inline-block;
padding: 10px 8px;
font-size: 15px;
margin:2px;
font-weight: bold;
text-align: center;
text-decoration: none;
background-color: red;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;
&hover :{
    background-color: #45a049;
}
  `
