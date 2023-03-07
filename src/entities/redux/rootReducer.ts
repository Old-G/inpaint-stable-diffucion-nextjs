import { combineReducers } from '@reduxjs/toolkit'
import colorPromptReducer from './slices/colorPromptSlice'
import isLoadingReducer from './slices/isLoadingSlice'
import imagePromptReducer from './slices/imagePromptSlice'
import resultPromptReducer from './slices/resultPromptSlice'
import maskPromptReducer from './slices/maskPromptSlice'
import prevPredictionOutputReducer from './slices/prevPredictionOutputSlice'
import textPromptReducer from './slices/textPromptSlice'
import stylePromptReducer from './slices/stylePromptSlice'
import isMakeMagicSliceReducer from './slices/isMakeMagicSlice'
import isDeleteImageSliceReducer from './slices/isDeleteImageSlice'

export const rootReducer = combineReducers({
  colorPrompt: colorPromptReducer,
  isLoading: isLoadingReducer,
  imagePrompt: imagePromptReducer,
  resultPrompt: resultPromptReducer,
  maskPrompt: maskPromptReducer,
  prevPredictionOutput: prevPredictionOutputReducer,
  textPrompt: textPromptReducer,
  stylePrompt: stylePromptReducer,
  isMakeMagic: isMakeMagicSliceReducer,
  isDeleteImage: isDeleteImageSliceReducer,
  // [accountApi.reducerPath]: accountApi.reducer,
})
