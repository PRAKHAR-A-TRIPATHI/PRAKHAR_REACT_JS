import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../services/contextApi';
import AddRole from './AddRole';
import CommonInput from './CommonInput';

function UpdateRole() {
    const { id } = useParams();

    return (
        <CommonInput id={id} />
    )
}

export default UpdateRole
