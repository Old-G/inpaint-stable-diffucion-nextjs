import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StylePromptState {
  value: string
}

const initialState: StylePromptState = {
  value: '',
}

export const stylePromptSlice = createSlice({
  name: 'stylePrompt',
  initialState,
  reducers: {
    stylePrompt: (state: StylePromptState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { stylePrompt } = stylePromptSlice.actions

export default stylePromptSlice.reducer
