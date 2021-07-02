import React, { useState } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from 'classnames'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: "auto",
    },
    content: {
        padding: theme.spacing(3),
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    drawer: {
        width: 250
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    contentShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    }
}));

const DrawerPersistent = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <div>
            <CssBaseline />
            <Drawer variant="persistent" open={open} onClose={() => setOpen(false)}>
                <List disablePadding className={classes.drawer}>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="First Item" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="Second Item" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar
                className={classNames(
                    classes.appBar,
                    { [classes.appBarShift]: open }
                )}
                position="static"
                color="secondary"
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Material UI
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main className={classNames(classes.content, {
                [classes.contentShift]: open
            })}>
                <Typography variant="h2">New ReactJs Features!</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                    ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
                    id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
                    quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
                    reprehenderit dignissimos quod odit nisi deserunt perspiciatis
                    corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
                    corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
                    impedit facere laboriosam minima? Delectus libero distinctio sapiente,
                    dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
                    consequatur recusandae eos, cum itaque eaque unde quibusdam rem
                    quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
                    atque!
                </Typography>
            </main>
        </div>
    );
}

export default DrawerPersistent
