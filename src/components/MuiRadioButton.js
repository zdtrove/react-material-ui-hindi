import React, { useState } from 'react'
import {
    makeStyles,
    Container,
    Paper,
    Box,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    }
}))

const MuiRadioButton = () => {
    const classes = useStyles()
    const [gender, setGender] = useState('male')

    const handleChange = e => {
        setGender(e.target.value)
    }

    return (
        <Container className={classes.root}>
            <Paper component={Box} width="80%" p={4} mx="auto">
                <Box component="form">
                    <FormControl>
                        <FormLabel>Choose Your Gender</FormLabel>
                        <RadioGroup value={gender} onChange={handleChange} row>
                            <FormControlLabel label="Male" control={<Radio color="primary" />} value="male" />
                            <FormControlLabel label="Female" control={<Radio color="primary" />} value="female" />
                            <FormControlLabel label="Other" control={<Radio color="primary" />} value="other" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
        </Container>
    )
}

export default MuiRadioButton
