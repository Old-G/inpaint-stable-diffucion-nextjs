import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsLoadingState {
  value: boolean
}

const initialState: IsLoadingState = {
  value: false,
}

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    isLoading: (state: IsLoadingState, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { isLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer
