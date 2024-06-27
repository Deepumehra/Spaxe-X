import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isLoggedIn:false || localStorage.getItem('isLoggedIn'),
    jwt:localStorage.getItem('jwt')|| '',
    user:localStorage.getItem('user'),
    role:localStorage.getItem('role')|| ""
};


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
})

export default authSlice.reducers;