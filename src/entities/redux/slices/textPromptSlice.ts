import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TextPromptState {
  value: string
}

const initialState: TextPromptState = {
  value: '',
}

export const textPromptSlice = createSlice({
  name: 'textPrompt',
  initialState,
  reducers: {
    textPrompt: (state: TextPromptState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { textPrompt } = textPromptSlice.actions

export default textPromptSlice.reducer
