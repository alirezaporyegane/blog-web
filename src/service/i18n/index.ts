import fa from './fa';
import en from './en';

const lng = process.env.NEXT_LOCALE as keyof typeof translate;
let translate = { fa, en };

Object.values(translate[lng]).forEach(
  (value) => (translate = { ...translate, ...value })
);

const resources: any = {
  [lng]: {
    ...translate,
  },
};

export function i18nTranslate(path: string) {
  if (resources && typeof resources === 'object')
    return resources[lng][path] || path;

  return path;
}
