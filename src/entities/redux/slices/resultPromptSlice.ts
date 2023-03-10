import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ResultPromptState {
  value: any
}

const initialState: ResultPromptState = {
  value: [],
}

export const resultPromptSlice = createSlice({
  name: 'resultPrompt',
  initialState,
  reducers: {
    resultPrompt: (state: ResultPromptState, action: PayloadAction<any>) => {
      state.value = action.payload
    },

    removeItem: (state: ResultPromptState, action: PayloadAction<any>) => {
      state.value = state.value.filter((item: any) => item !== action.payload)
    },
  },
})

export const { resultPrompt, removeItem } = resultPromptSlice.actions

export default resultPromptSlice.reducer
