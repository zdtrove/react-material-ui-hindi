import React, { useState } from 'react'
import {
    makeStyles,
    Container,
    Paper,
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    Typography
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    }
}))

const MuiCheckbox = () => {
    const classes = useStyles()
    const [remember, setRemember] = useState(false)

    const handleChange = e => {
        setRemember(e.target.checked)
    }

    return (
        <Container className={classes.root}>
            <Paper component={Box} p={4} width="80%" mx="auto">
                <Box component="form">
                    <FormControl>
                        <FormControlLabel
                            label="Keep me remember"
                            control={
                                <Checkbox
                                    icon={<FavoriteBorderIcon />}
                                    checkedIcon={<FavoriteIcon />}
                                    checked={remember}
                                    onChange={handleChange}
                                />
                            }
                        />
                    </FormControl>
                </Box>
            </Paper>
        </Container>
    )
}

export default MuiCheckbox
