import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdMenuState {
  idchoiced: string;
}

const initialState: IdMenuState = {
  idchoiced: ''
};

export const idMenuChoicedSlice = createSlice({
  name: 'menuchoiced',
  initialState,
  reducers: {
    showme: (state) => {
      state.idchoiced = "true";
    },
    setIdMenuChoiced(state, action: PayloadAction<string>) {
      state.idchoiced = action.payload;
    },
  },
});

export const { showme, setIdMenuChoiced } = idMenuChoicedSlice.actions;

export default idMenuChoicedSlice.reducer;