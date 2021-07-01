import React, { useState } from 'react'
import {
    makeStyles,
    Container,
    Paper,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Collapse
} from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    },
    sidebar: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '40%',
        height: '100%',
        borderRadius: 0
    },
    nestedItem: {
        paddingLeft: theme.spacing(8)
    }
}))

const MuiList = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <Container className={classes.root}>
            <Paper component={Box} boxShadow={4} className={classes.sidebar}>
                <List disablePadding>
                    <ListItem button>
                        <ListItemText
                            primary={<Typography variant="h5" color="primary">Getting Started</Typography>}
                            secondary="Start Tutorial"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddAPhotoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Components" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Components API" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(!open)}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Styles" />
                    </ListItem>
                    <Collapse in={open}>
                        <List disablePadding>
                            <ListItem className={classes.nestedItem} button>
                                <ListItemText>Nested Item 1</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem} button>
                                <ListItemText>Nested Item 2</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem} button>
                                <ListItemText>Nested Item 3</ListItemText>
                            </ListItem>
                            <ListItem className={classes.nestedItem} button>
                                <ListItemText>Nested Item 4</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button>
                        <ListItemIcon>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Footer" />
                    </ListItem>
                </List>
            </Paper>
        </Container>
    )
}

export default MuiList
