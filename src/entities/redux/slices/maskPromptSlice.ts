import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MaskPromptState {
  value: string
}

const initialState: MaskPromptState = {
  value: '',
}

export const maskPromptSlice = createSlice({
  name: 'maskPrompt',
  initialState,
  reducers: {
    maskPrompt: (state: MaskPromptState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { maskPrompt } = maskPromptSlice.actions

export default maskPromptSlice.reducer
