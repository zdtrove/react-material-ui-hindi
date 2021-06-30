import React, { useEffect } from 'react'
import {
    makeStyles,
    Fab,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    add: {
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        zIndex: theme.zIndex.tooltip
    }
}))

const MuiFab = () => {
    const classes = useStyles()
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <Container className={classes.root}>
            <Fab color="secondary" className={classes.add}
                variant="extended">
                <AddIcon /> Create User
            </Fab>
            <Grid container spacing={4}>
                {
                    users.map((user, idx) => (
                        <Grid item md={3} sm={4} xs={6} key={idx}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img" image="https://via.placeholder.com/300x200/555" />
                                    <CardContent>
                                        <Typography variant="h6">{user.name}</Typography>
                                        <Typography variant="h6">{user.email}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button>view profile</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default MuiFab
