import { language } from './index';

import englishLang from 'assets/images/usaflag.png';
import chineseLang from 'assets/images/china.svg';
import spanishLang from 'assets/images/spanishflag.png';
import frenchLang from 'assets/images/france.svg';
import italianLang from 'assets/images/italian.png';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
      icon: chineseLang,
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: spanishLang,
    },
    {
      languageId: 'french',
      locale: 'fr',
      text: 'French',
      icon: frenchLang,
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
      icon: italianLang,
    },
  ],
};

export function getCurrentLanguage (lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
