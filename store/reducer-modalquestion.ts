import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalQuestionState {
  showMe:boolean
}

const initialState: ModalQuestionState = {
  showMe:false
}

export const showModalSlice = createSlice({
  name: 'modalquestion',
  initialState,
  reducers: {
    show: (state) => {
      state.showMe = true
    },
    noshow: (state) => {
      state.showMe =false
    },
    changeShowModal: (state, action: PayloadAction<boolean>) => {
      state.showMe = action.payload
    },
  },
})

export const { show,noshow,changeShowModal } = showModalSlice.actions

export default showModalSlice.reducer