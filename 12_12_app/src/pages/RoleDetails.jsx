import React, { useContext } from 'react'
import { AddUserButton, H2, Meassage, TabelBody, Table, TableContainer, TableHead, TableHeadDiv, TableHeading, Td, Th, Tr } from '../style_component/productStyle'
import { Link, useNavigate } from 'react-router-dom'
import { Data } from '../services/ContextApi'


function Users() {
  const { userData } = useContext(Data)
  const navigate = useNavigate()
  return (

    <TableContainer>
      <TableHeadDiv>
        <TableHeading>Users Role</TableHeading>
        <Link to="/role">
          <AddUserButton >Create  New Role</AddUserButton>
        </Link>
      </TableHeadDiv>
      {
        !userData.length ?
          <Meassage>No record Found</Meassage> :
          <Table>
            <TableHead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Status</Th>
              </Tr>
            </TableHead>
            <TabelBody>
              {
                userData.map((user, index) => (
                  <Tr key={index} onClick={() => navigate(`/role/${user.id}`)}>
                    <Td>{user.id}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.status}</Td>
                  </Tr>
                ))
              }
            </TabelBody>
          </Table>
      }
    </TableContainer>
  )
}

export default Users
