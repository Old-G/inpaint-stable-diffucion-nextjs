import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PrevPredictionOutputState {
  value: string
}

const initialState: PrevPredictionOutputState = {
  value: '',
}

export const prevPredictionOutputSlice = createSlice({
  name: 'prevPredictionOutput',
  initialState,
  reducers: {
    prevPredictionOutput: (
      state: PrevPredictionOutputState,
      action: PayloadAction<string>
    ) => {
      state.value = action.payload
    },
  },
})

export const { prevPredictionOutput } = prevPredictionOutputSlice.actions

export default prevPredictionOutputSlice.reducer
