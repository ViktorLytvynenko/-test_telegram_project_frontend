import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../assets/instance.js";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
    const id = localStorage.getItem('id');
    console.log(id)
    if (!id) {
        throw new Error("User ID not found in localStorage");
    }
    const response = await instance.get(`user/${id}`);
    return response.data;
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async ({currentPage, limit}) => {
    const response = await instance.get('/admin', {
        params: {page: currentPage, limit}
    });
    return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        userList: [],
        user: {
            id: '',
            telegram_id: '',
            first_name: '',
            username: '',
            auth_date: '',
            hash: '',
            phone_number: '',
            create_date: '',
        },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.userList = action.payload; // Update userList with fetched data
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default usersSlice.reducer;