import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsDeleteImageState {
  value: boolean
}

const initialState: IsDeleteImageState = {
  value: false,
}

export const isDeleteImageSlice = createSlice({
  name: 'isDeleteImage',
  initialState,
  reducers: {
    isDeleteImage: (state: IsDeleteImageState, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { isDeleteImage } = isDeleteImageSlice.actions

export default isDeleteImageSlice.reducer
