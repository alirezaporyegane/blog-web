import fa from "./fa";

const lng = 'fa';
let translate = { fa };
Object.values(translate[lng]).forEach(
  (value) => (translate = { ...translate, ...value })
);

const resources = {
  [lng]: {
    translation: {
      ...translate,
    },
  },
};

const i18n = {
  locales: ['fa'],
  lng: 'fa',
  defaultLocale: 'fa',
  resources,
  interpolation: {
    escapeValue: false,
  },
};

import { createI18n } from 'next-international'

export const { useI18n, useScopedI18n, I18nProvider, getLocaleProps } = createI18n({
  fa: () => import('./fa'),
})

module.exports = i18n;
