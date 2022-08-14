import React from "react";

import { Container } from '@mui/material';

import Post from '../Post';

import { useGetPostsQuery } from '../../services/posts';

//Displays all posts 
const Posts = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetPostsQuery({ getUserInfo : true})  ;
    return(
        <Container>
            {isLoading && "Loading..."}
            {isError && error.message}
            {isSuccess &&
                data &&
                data.map((post, i) => <Post post={post} key={i}/>)}
        </Container>
    )
}

export default Posts;