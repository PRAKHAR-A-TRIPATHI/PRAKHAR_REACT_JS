import React, { useContext, useState } from 'react'
import { AddUserButton, ButtonDiv, CancelButton, CheakBoxDiv, CheakBoxForm, CheakBoxLabel, ChekBoxInput, Container, DeleteButton, Div, Errors, H2, Input, InputBox, InputDiv, InputLabel, Options, Select } from '../style_component/productStyle'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { dummyUser } from '../services/data';
import { cheaboxValidate } from '../services/validation';
import { Data } from '../services/ContextApi';

function CommonInput({ id }) {
    const { userData, setUserData } = useContext(Data);
    const user = id ? userData.find((obj) => obj.id == id) : dummyUser;
    const navigate = useNavigate();
    const { values, setValues, handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema: cheaboxValidate,
        initialValues: {
            id: user.id || Math.floor(Math.random() * 1000),
            name: user.name,
            status: user.status,
            permissions: user.permissions,
        },
        onSubmit: (values) => {
            const existingUserIndex = userData.findIndex((u) => u.id === values.id);
            if (existingUserIndex !== -1) {
                const updatedUserData = [...userData];
                updatedUserData[existingUserIndex] = values;
                setUserData(updatedUserData);
            } else {
                setUserData((pre) => [...pre, values]);
            }

            navigate("/user");
        },
    });
    const handleCheckboxChange = (category, action) => {
        setValues((prevValues) => ({
            ...prevValues,
            permissions: {
                ...prevValues.permissions,
                [category]: {
                    ...prevValues.permissions[category],
                    [action]: !prevValues.permissions[category][action],
                },
            },
        }));
    };
    const handleSelectAll = (category) => {
        const allChecked = Object.values(values.permissions[category]).every((value) => value === true);
        const updatedPermissions = Object.keys(values.permissions[category]).reduce(
            (acc, action) => {
                acc[action] = !allChecked;
                return acc;
            }, {});
        setValues((prevValues) => ({
            ...prevValues,
            permissions: {
                ...prevValues.permissions,
                [category]: updatedPermissions,
            },
        }));
    };
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            const updatedUserData = userData.filter((user) => user.id != id);
            setUserData(updatedUserData);
            navigate("/user");
        }
    };
    return (
        <Container>
            <CheakBoxForm onSubmit={handleSubmit}>
                <InputDiv>
                    <InputBox>
                        <InputLabel>Role</InputLabel>
                        <Input name="name"
                            value={values.name}
                            onChange={handleChange} />
                        <Errors>{errors.name && touched.name && errors.name}</Errors>
                    </InputBox>
                    <InputBox>
                        <InputLabel>Status</InputLabel>
                        <Select name="status"
                            value={values.status}
                            onChange={handleChange} >
                            <Options value="">Please Select</Options>
                            <Options>Active</Options>
                            <Options>Deactive</Options>
                        </Select>
                        <Errors>{errors.status && touched.status && errors.status}</Errors>
                    </InputBox>
                </InputDiv>
                <CheakBoxDiv>
                    {Object.entries(values.permissions).map(([type, actions]) => (
                        <Div key={type}>
                            <H2>
                                <ChekBoxInput
                                    type="checkbox"
                                    checked={Object.values(actions).every((value) => value === true)}
                                    onChange={() => handleSelectAll(type)}
                                />{type}
                            </H2>
                            {Object.entries(actions).map(([action, value]) => (
                                <CheakBoxLabel key={action}>
                                    <ChekBoxInput
                                        type="checkbox"
                                        checked={value}
                                        name={`permission.${type}.${action}`}
                                        onChange={() => handleCheckboxChange(type, action)}
                                    />
                                    {action}
                                </CheakBoxLabel>
                            ))}
                        </Div>
                    ))}
                </CheakBoxDiv>
                <ButtonDiv>
                    <AddUserButton type="submit">{id ? "Update" : "Submit"}</AddUserButton>
                </ButtonDiv>
            </CheakBoxForm>
            <ButtonDiv>
                <Link to="/user">
                    <CancelButton>Cancel</CancelButton>
                </Link>
                {id && <DeleteButton onClick={handleDelete}>Delete</DeleteButton>}
            </ButtonDiv>
        </Container>

    )
}

export default CommonInput
