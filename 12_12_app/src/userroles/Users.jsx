import React, { useContext } from 'react'
import { AddUserButton, TabelBody, Table, TableContainer, TableHead, TableHeadDiv, TableHeading, Td, Th, Tr } from '../style_component/productStyle'
import { Data } from '../services/contextApi'
import { Link, useNavigate } from 'react-router-dom'


function Users() {
  const { userData } = useContext(Data)
  const navigate = useNavigate()

  return (
    <TableContainer>
      <TableHeadDiv>
        <TableHeading>Users Role</TableHeading>
        <Link to="/adduser">
          <AddUserButton >Create  New Role</AddUserButton>
        </Link>
      </TableHeadDiv>
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
              <Tr key={index} onClick={() => navigate(`/edit/${user.id}`)}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.status}</Td>
              </Tr>
            ))
          }
        </TabelBody>
      </Table>

    </TableContainer>
  )
}

export default Users
