import { LanguageActionTypes, CHANGE_LANGUAGE } from './types';

const initialState: Language = {
  code: 'en'
}

export function languageReducer(
  state = initialState,
  action: LanguageActionTypes
): Language {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        code: action.payload.code
      }
    default:
      return state
  }
}