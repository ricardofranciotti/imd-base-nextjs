import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InfoBarState {
  type: number,
  message: string
}

const initialState: InfoBarState = {
  type: 0,
  message : "No Message"
}

export const infobarSlice = createSlice({
  name: 'infobar',
  initialState,
  reducers: {
    changeinfoType: (state, action: PayloadAction<number>) => {
      state.type = action.payload
    },
    changeinfoMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
})

export const { changeinfoType, changeinfoMessage} = infobarSlice.actions

export default infobarSlice.reducer