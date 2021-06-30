import React from 'react'
import {
    makeStyles,
    Container,
    Typography,
    Button,
    Paper,
    Box,
    TextField,
    InputAdornment
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    }
}))

const MuiTextField = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Paper component={Box} width="80%" mx="auto" p={4}>
                <Typography variant="h5">Create new account</Typography>
                <Box component="form" mt={2}>
                    <TextField
                        fullWidth
                        placeholder="Enter Your First Name"
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        label="First Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon color="secondary" />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Enter Your Last Name"
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        label="Last Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon color="secondary" />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Enter Your Message"
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        label="Your Massage"
                        multiline
                        rows={4}
                    />
                </Box>
                <Box mt={2}>
                    <Button variant="contained" color="secondary">Sign Up</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default MuiTextField
