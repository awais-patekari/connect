import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: false,
    postData: {},
    showComments: [],
    enableUserSettings: false
}
export const togglePopup = createSlice({
    name: 'togglePopup',
    initialState,
    reducers: {
        // Toggles the 'new post' dialog box
        toggle: (state) => {
            state.value = !state.value
        },
        // Sets post data while editing a post
        setPostData: (state, action) => {
            state.postData = action.payload
        },
        // Shows/Hides comments for a post
        toggleComments: (state,action) => {
            var index = state.showComments.indexOf(action.payload);
            if (index !== -1) {
                state.showComments.splice(index, 1);
            }
            else {
                state.showComments.push(action.payload)
            }
        },
        // Toggles the 'user settings' dialog box
        toggleUserSettings: (state) => {
            state.enableUserSettings = !state.enableUserSettings
        }
    },
})
// Action creators are generated for each case reducer function
export const { 
    toggle, 
    setPostData,
    toggleComments,
    toggleUserSettings
} = togglePopup.actions
export default togglePopup.reducer