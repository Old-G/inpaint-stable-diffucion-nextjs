import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ImagePromptState {
  value: null
}

const initialState: ImagePromptState = {
  value: null,
}

export const imagePromptSlice = createSlice({
  name: 'imagePrompt',
  initialState,
  reducers: {
    imagePrompt: (state: ImagePromptState, action: PayloadAction<null>) => {
      state.value = action.payload
    },
  },
})

export const { imagePrompt } = imagePromptSlice.actions

export default imagePromptSlice.reducer
