import React from 'react'
import {
    makeStyles,
    Container,
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100%',
        backgroundColor: theme.palette.grey[300]
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    }
}))

const MuiAppBar = () => {
    const classes = useStyles()
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl)

    const openMobileMenu = e => {
        setMobileMenuAnchorEl(e.currentTarget)
    }

    const closeMobileMenu = () => {
        setMobileMenuAnchorEl(null)
    }

    const mobileMenu = (
        <Menu
            anchorEl={mobileMenuAnchorEl}
            id="mobile-menu"
            keepMounted
            open={isMobileMenuOpen}
        >
            <MenuItem component={Link} onClick={closeMobileMenu} to='/about'>About</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to='/home'>Home</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to='/contact'>Contact</MenuItem>
        </Menu>
    )

    return (
        <Router>
            <Container className={classes.root} disableGutters>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>Material UI</Typography>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit" component={Link} to="/home">
                                Home
                            </Button>
                            <Button color="inherit" component={Link} to="/about">
                                About
                            </Button>
                            <Button color="inherit" component={Link} to="/contact">
                                Contact
                            </Button>
                        </div>
                        <IconButton color="inherit" onClick={openMobileMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {mobileMenu}
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Container>
        </Router>
    )
}

export default MuiAppBar
