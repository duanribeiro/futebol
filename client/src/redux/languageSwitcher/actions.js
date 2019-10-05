import { getCurrentLanguage } from 'settings/languageConfig';

const actions = {

  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: getCurrentLanguage(language)
    };
  }
  
};
export default actions;
