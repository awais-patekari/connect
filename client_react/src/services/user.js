// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../store/userSlice";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:4000/user/"
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        //fetch a user
        getUser: builder.query({
            query: ({ id }) => `/${id}`,
            providesTags: ["User"],
        }),
        //login a user
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
        //create a new user
        createUser: builder.mutation({
            query: (data) => ({
                url: "/create",
                method: "POST",
                body: data,
            }),
        }),
        //edit a user
        editUser: builder.mutation({
            query: (user) => ({
                url: `/${user._id}`,
                method: "PATCH",
                body: user,
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // console.log("data =",data);
                    dispatch(setUser(data));
                    localStorage.setItem("user", JSON.stringify(data));
                } catch (err) {
                    
                }
            },
            invalidatesTags: ["User"],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserQuery,
    useCreateUserMutation,
    useLoginMutation,
    useEditUserMutation,
} = userApi;
