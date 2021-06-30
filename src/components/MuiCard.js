import React from 'react'
import {
    makeStyles,
    Container,
    Grid,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    Button,
    Typography,
    Avatar,
    IconButton
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.grey[200]
    }
}))

const MuiCard = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={3} xs={12}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar>SB</Avatar>}
                            title="Card Header"
                            subheader="Posted on 11 Aug, 2020"
                            action={
                                <IconButton>
                                    <ShoppingBasketIcon />
                                </IconButton>
                            }
                        />
                        <CardActionArea>
                            <CardMedia component="img" image="https://via.placeholder.com/300x150" />
                            <CardContent>
                                <Typography variant="h4">Post Title</Typography>
                                <Typography variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas quod deserunt aliquam ipsam omnis soluta illo voluptatibus sed expedita et illum obcaecati, assumenda necessitatibus fugit! Explicabo nam tenetur laborum?</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>Read More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Post Title</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas quod deserunt aliquam ipsam omnis soluta illo voluptatibus sed expedita et illum obcaecati, assumenda necessitatibus fugit! Explicabo nam tenetur laborum?</Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Post Title</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas quod deserunt aliquam ipsam omnis soluta illo voluptatibus sed expedita et illum obcaecati, assumenda necessitatibus fugit! Explicabo nam tenetur laborum?</Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Post Title</Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quas quod deserunt aliquam ipsam omnis soluta illo voluptatibus sed expedita et illum obcaecati, assumenda necessitatibus fugit! Explicabo nam tenetur laborum?</Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MuiCard
