import React, { useState, useEffect } from 'react'
import {
    Box,
    CssBaseline,
    Container,
    Typography,
    Grid,
    Card,
    CardContent
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import axios from 'axios'

const MuiPagination = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const loadPosts = async () => {
            const res = await axios.get(`http://localhost:3001/posts?_page=${page}`)
            setPosts(res.data)
        }
        loadPosts()
    }, [page])

    return (
        <>
            <CssBaseline />
            <Container component={Box} py={3}>
                <Grid container spacing={2}>
                    {
                        posts.map(post => (
                            <Grid item md={4} key={post.id}>
                                <Card>
                                    <CardContent>
                                        <Typography>{post.id}. {post.title}</Typography>
                                        <Typography>{post.content}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <br />
                <Pagination
                    count={10}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    // defaultPage={page}
                    page={page}
                    // showFirstButton
                    // showLastButton
                    hideNextButton
                    hidePrevButton
                    onChange={(e, val) => setPage(val)}
                />
            </Container>
        </>
    )
}

export default MuiPagination
