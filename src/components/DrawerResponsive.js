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
    Divider,
    Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("sm")]: {
            paddingLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    title: {
        marginRight: "auto",
    },
    content: {
        padding: theme.spacing(3),
    },
    drawer: {
        width: 250
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    }
}));

const DrawerResponsive = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const drawerItems = (
        <>
            <Toolbar />
            <Divider />
            <List disablePadding className={classes.drawer}>
                <ListItem button onClick={() => setOpen(false)}>
                    <ListItemText primary="First Item" />
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                    <ListItemText primary="Second Item" />
                </ListItem>
            </List>
        </>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden smUp implementation="css">
                <Drawer open={open} onClose={() => setOpen(false)}>
                    {drawerItems}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
                    {drawerItems}
                </Drawer>
            </Hidden>
            <AppBar className={classes.appBar} position="fixed" color="secondary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Material UI
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <Toolbar />
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

export default DrawerResponsive
