import React from 'react'
import {
    makeStyles,
    Box,
    Typography,
    Container,
    Paper,
    Button
} from '@material-ui/core'
import { AddBoxOutlined, DeleteForever } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core'
import theme from '../Theme'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[200]
    }
}))

const CustomTheme = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Paper
                    component={Box}
                    p={5}
                    border={5}
                    bgcolor="primary.light"
                    borderColor="secondary.main"
                    boxShadow={10}
                >
                    <Typography align="justify" variant="h4">Get Started</Typography>
                    <Typography gutterBottom align="justify" variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim nesciunt praesentium excepturi assumenda aut, modi ab, earum sed illo neque. Veritatis qui aspernatur quia nam accusamus, inventore iure maiores.</Typography>
                    <Button variant="contained" color="primary" startIcon={<AddBoxOutlined />} endIcon={<DeleteForever />}>Submit</Button>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default CustomTheme
