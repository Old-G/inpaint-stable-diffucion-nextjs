import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ResultPromptState {
  value: Array<T>
}

const initialState: ResultPromptState = {
  value: [],
}

export const resultPromptSlice = createSlice({
  name: 'resultPrompt',
  initialState,
  reducers: {
    resultPrompt: (
      state: ResultPromptState,
      action: PayloadAction<Array<T>>
    ) => {
      state.value = action.payload
    },
  },
})

export const { resultPrompt } = resultPromptSlice.actions

export default resultPromptSlice.reducer
