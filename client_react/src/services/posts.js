// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/posts' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        //fetch posts
        getPosts: builder.query({
            query: ({ getUserInfo }) => `/?getUserInfo=${getUserInfo || false}`,
            providesTags: ['Post']
        }),
        //fetch post based on id
        getPost: builder.query({
            query: ({ id }) => `/${id}`
        }),
        //create new post
        addPost: builder.mutation({
            query: (post) => ({
                url: "/",
                method: "POST",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        //edit a post
        editPost: builder.mutation({
            query: (post) => ({
                url: `/${post._id}`,
                method: "PATCH",
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        //delete a post
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ['Post']
        }),
        //like a post
        likePost: builder.mutation({
            query: ({ id }) => ({
                url: `/${id}/like`,
                method: "POST"
            }),
            invalidatesTags: ['Post']
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useEditPostMutation,
    useDeletePostMutation,
    useLikePostMutation
} = postsApi