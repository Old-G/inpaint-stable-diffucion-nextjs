import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ImagePromptState {
  value: string
}

const initialState: ImagePromptState = {
  value: '',
}

export const imagePromptSlice = createSlice({
  name: 'imagePrompt',
  initialState,
  reducers: {
    imagePrompt: (state: ImagePromptState, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { imagePrompt } = imagePromptSlice.actions

export default imagePromptSlice.reducer
