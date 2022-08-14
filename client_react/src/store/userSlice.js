import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    setUser,
} = user.actions

export default user.reducer