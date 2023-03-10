import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsSessionState {
  value: boolean
}

const initialState: IsSessionState = {
  value: false,
}

export const isSessionSlice = createSlice({
  name: 'isSession',
  initialState,
  reducers: {
    isSession: (state: IsSessionState, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { isSession } = isSessionSlice.actions

export default isSessionSlice.reducer
