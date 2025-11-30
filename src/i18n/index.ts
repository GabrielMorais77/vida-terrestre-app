export type Locale = 'pt' | 'en';

let currentLocale: Locale = 'pt';

const messages: Record<Locale, Record<string, string>> = {
  pt: {
    'home.title': 'Vida Terrestre',
    'home.subtitle': 'Protegendo a biodiversidade',
    'home.searchPlaceholder': 'Buscar espécies...',
  },
  en: {
    'home.title': 'Life on Land',
    'home.subtitle': 'Protecting biodiversity',
    'home.searchPlaceholder': 'Search species...',
  },
};

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function t(key: string): string {
  return messages[currentLocale][key] ?? key;
}
