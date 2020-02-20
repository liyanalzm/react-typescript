import { LanguageActionTypes, CHANGE_LANGUAGE } from './types';

export function changeLanguage(code: Language) : LanguageActionTypes {
  return {
    type: CHANGE_LANGUAGE,
    payload: code
  }
}