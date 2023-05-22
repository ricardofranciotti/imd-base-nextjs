import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoggedState {
  logged: boolean;
  username: string;
}

const initialState: LoggedState = {
  logged: false,
  username: ""
};

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState,
  reducers: {
    logged: (state) => {
      state.logged = true;
    },
    notlogged: (state) => {
      state.logged = false;
    },
    setuserlogged(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },

  },
});

export const { logged, notlogged, setuserlogged } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;