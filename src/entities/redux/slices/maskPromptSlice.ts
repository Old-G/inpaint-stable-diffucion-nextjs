import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MaskPromptState {
  value: null
}

const initialState: MaskPromptState = {
  value: null,
}

export const maskPromptSlice = createSlice({
  name: 'maskPrompt',
  initialState,
  reducers: {
    maskPrompt: (state: MaskPromptState, action: PayloadAction<null>) => {
      state.value = action.payload
    },
  },
})

export const { maskPrompt } = maskPromptSlice.actions

export default maskPromptSlice.reducer
