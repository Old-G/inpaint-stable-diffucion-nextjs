import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ColorPromptState {
  value: string
}

const initialState: ColorPromptState = {
  value: '',
}

export const colorPromptSlice = createSlice({
  name: 'colorPrompt',
  initialState,
  reducers: {
    colorPrompt: (state: ColorPromptState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { colorPrompt } = colorPromptSlice.actions

export default colorPromptSlice.reducer
