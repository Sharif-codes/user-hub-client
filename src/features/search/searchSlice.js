import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    search: {},
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchText: (state, action) => {
            state.search = action.payload
        },
        userFilter: (state, action) => {
            state.search = action.payload
        },

    },
})
export const {searchText,userFilter} = searchSlice.actions


export default searchSlice.reducer