import { createSlice } from '@reduxjs/toolkit';
import { updatePassword } from "firebase/auth"
import { auth } from '../../../utils/firebase';

const initialState = {
    isLoading: false,
    error: null,
    success: false,
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        changePasswordSuccess: (state) => {
            state.isLoading = false;
            state.success = true;
        },
        changePasswordFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


export const changePasswordStart = (values) => async (dispatch) => {
    try {
        const user = auth.currentUser;
        await updatePassword(user, values.newPassword);

        dispatch(changePasswordSuccess());
    } catch (error) {
        dispatch(changePasswordFailure(error));
    }
};

export const {
    changePasswordSuccess,
    changePasswordFailure,
} = passwordSlice.actions;

export default passwordSlice.reducer;