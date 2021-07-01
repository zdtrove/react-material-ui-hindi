import React, { useState } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: drawerWidth
    },
    appBar: {
        zIndex: theme.zIndex.drawer
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: "auto",
    },
    content: {
        padding: theme.spacing(3),
    },
    drawer: {
        width: drawerWidth
    }
}));

const DrawerClipped = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer open={open} onClose={() => setOpen(false)} variant="permanent">
                <Toolbar />
                <List disablePadding className={classes.drawer}>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="First Item" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="Second Item" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar position="fixed" color="secondary" className={classes.appBar}>
                <Toolbar>
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

export default DrawerClipped
