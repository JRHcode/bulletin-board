import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Domino'},
    { id: '1', name: 'Papa John'},
    { id: '2', name: 'Little Caesar'}
]

const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;