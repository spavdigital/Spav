import { en } from './en';
import { pt } from './pt';

export const dictionaries = { en, pt };
export type Lang = keyof typeof dictionaries;
export type Dict = typeof en;

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}
