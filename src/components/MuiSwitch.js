import React, { useState } from 'react'
import {
    makeStyles,
    Container,
    Paper,
    Box,
    Switch,
    FormControlLabel,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    }
}))

const MuiSwitch = () => {
    const classes = useStyles()
    const [autoPlay, setAutoplay] = useState(false)

    return (
        <Container className={classes.root}>
            <Paper component={Box} p={4} width="80%" mx="auto">
                <Typography>
                    {autoPlay ? "play all videos" : "stop playing videos"}
                </Typography>
                <FormControlLabel
                    label="auto play"
                    control={<Switch onChange={e => setAutoplay(e.target.checked)} />}
                />
            </Paper>
        </Container>
    )
}

export default MuiSwitch
