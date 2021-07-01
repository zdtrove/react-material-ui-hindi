import React from 'react'
import {
    makeStyles,
    Container,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination
} from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(3)
    }
}))

const MuiTable = () => {
    const classes = useStyles()
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(3)

    useEffect(() => {
        const loadUsers = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        loadUsers()
    }, [])

    const onChangePage = (event, nextPage) => {
        setPage(nextPage)
    }

    const onChangeRowsPerPage = e => {
        setRowsPerPage(e.target.value)
    }

    return (
        <Container className={classes.root}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.company.name}</TableCell>
                                <TableCell>{user.website}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[3, 6, 10, 25, 50]}
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </TableContainer>
        </Container>
    )
}

export default MuiTable
