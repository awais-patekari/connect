// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/comment/' }),
    tagTypes: ['Comment'],
    endpoints: (builder) => ({
        //fetch comments for a post
        getComments: builder.query({
            query: ({ postId, getUserInfo }) => `/${postId}?getUserInfo=${getUserInfo || false}`,
            providesTags: ['Comment']
        }),
        //add new comment for a post
        addComment: builder.mutation({
            query: (comment) => ({
                url: "/",
                method: "POST",
                body: comment
            }),
            invalidatesTags: ['Comment']
        }),
        //delete comment for a post
        deleteComment: builder.mutation({
            query: ({ id }) => ({
                url: `/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ['Comment']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCommentsQuery,
    useAddCommentMutation,
    useDeleteCommentMutation
} = commentApi