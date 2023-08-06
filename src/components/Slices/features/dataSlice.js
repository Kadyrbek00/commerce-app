import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    data: [],
    loading: false,
    error: null,
    filteredData: [],
    searchResults: [],
}

const API_ENDPOINT = "https://fakestoreapi.com/products"

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try {
        const response = await axios.get(API_ENDPOINT)
        return response.data
    } catch (error) {
        throw error
    }
})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload;
            state.filteredData = action.payload;
        },
        filterTitle: (state, action) => {
            const category = action.payload;
            state.filteredData = state.data.filter((item) => item.category === category);
        },
        searchItems: (state, action) => {
            const searchQuery = action.payload.toLowerCase();
            console.log('searchQuery:', searchQuery);
            state.searchResults = state.data.filter((item) => {
                return item.category.toLowerCase().includes(searchQuery) || item.title.toLowerCase().includes(searchQuery)
            }
            );
        },
        clearFilter: (state) => {
            state.filteredData = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setProducts, filterTitle, searchItems, clearFilter } = dataSlice.actions;

export default dataSlice.reducer;
