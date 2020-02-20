export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: Language
}

export type LanguageActionTypes = ChangeLanguageAction