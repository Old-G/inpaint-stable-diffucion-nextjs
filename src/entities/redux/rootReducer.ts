import { combineReducers } from '@reduxjs/toolkit'
import colorPromptReducer from './slices/colorPromptSlice'
import isLoadingReducer from './slices/isLoadingSlice'
import imagePromptReducer from './slices/imagePromptSlice'
import resultPromptReducer from './slices/resultPromptSlice'
import maskPromptReducer from './slices/maskPromptSlice'
import prevPredictionOutputReducer from './slices/prevPredictionOutputSlice'
import textPromptReducer from './slices/textPromptSlice'
import stylePromptReducer from './slices/stylePromptSlice'
import isMakeMagicReducer from './slices/isMakeMagicSlice'
import isDeleteImageReducer from './slices/isDeleteImageSlice'
import isSessionReducer from './slices/isSessionSlice'

export const rootReducer = combineReducers({
  colorPrompt: colorPromptReducer,
  isLoading: isLoadingReducer,
  imagePrompt: imagePromptReducer,
  resultPrompt: resultPromptReducer,
  maskPrompt: maskPromptReducer,
  prevPredictionOutput: prevPredictionOutputReducer,
  textPrompt: textPromptReducer,
  stylePrompt: stylePromptReducer,
  isMakeMagic: isMakeMagicReducer,
  isDeleteImage: isDeleteImageReducer,
  isSession: isSessionReducer,
  // [accountApi.reducerPath]: accountApi.reducer,
})
