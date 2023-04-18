import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createApiThunk = (name, method, url, params, headers) => {
    return createAsyncThunk(
        name,
        async (_, thunkAPI) => {
            const { rejectWithValue } = thunkAPI;
            console.log(thunkAPI);

            try {
                const options = {
                    method,
                    url,
                    params,
                    headers
                };
                const res = axios.request(options).then(function (response) {
                    return response.data;
                });
                return res;
            } catch (error) {
                return rejectWithValue(error.message);
            }
        }
    )
};