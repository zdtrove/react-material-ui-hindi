import React from 'react'
import { Paper, Box, Typography } from '@material-ui/core'

const About = () => {
    return (
        <Paper component={Box} p={10} mt={5} textAlign="center">
            <Typography variant="h1">About</Typography>
        </Paper>
    )
}

export default About
