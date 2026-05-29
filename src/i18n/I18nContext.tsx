import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import translations, { type Locale, type UITranslations } from './translations';

interface I18nContextType {
  locale: Locale;
  t: UITranslations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getBrowserLocale(): Locale {
  const lang = navigator.language || 'ru';
  return lang.toLowerCase().startsWith('en') ? 'en' : 'ru';
}

function getSavedLocale(): Locale {
  try {
    const saved = localStorage.getItem('characters-locale');
    if (saved === 'en' || saved === 'ru') return saved;
  } catch {
    // localStorage not available
  }
  return getBrowserLocale();
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('characters-locale', newLocale);
    } catch {
      // localStorage not available
    }
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ru' ? 'en' : 'ru');
  }, [locale, setLocale]);

  // Set initial lang attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
