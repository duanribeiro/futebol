import { getCurrentTheme } from './../../settings/themeConfig';

const actions = {

  CHANGE_THEME: 'CHANGE_THEME',
  
  changeTheme: (attribute, themeName) => {
    const theme = getCurrentTheme(attribute, themeName);
    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme
    };
  }

};
export default actions;
