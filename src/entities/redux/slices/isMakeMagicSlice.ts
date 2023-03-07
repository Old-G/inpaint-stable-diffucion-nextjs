import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsMakeMagicSliceState {
  value: boolean
}

const initialState: IsMakeMagicSliceState = {
  value: true,
}

export const isMakeMagicSlice = createSlice({
  name: 'isMakeMagic',
  initialState,
  reducers: {
    isMakeMagic: (
      state: IsMakeMagicSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.value = action.payload
    },
  },
})

export const { isMakeMagic } = isMakeMagicSlice.actions

export default isMakeMagicSlice.reducer
