import React, { useState } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
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
        width: 250
    }
}));

const DrawerPhone = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <div>
            <CssBaseline />
            <SwipeableDrawer open={open} onClose={() => setOpen(false)}>
                <List disablePadding className={classes.drawer}>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="First Item" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="Second Item" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <AppBar position="static" color="secondary">
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

export default DrawerPhone
