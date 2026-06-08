import React from 'react';
import { useI18n, type Locale } from '../i18n';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useI18n();

  const handleSwitch = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="lang-switcher" role="radiogroup" aria-label="Language selector">
      <Globe size={16} className="lang-switcher-icon" />
      <button
        className={`lang-btn ${locale === 'ru' ? 'active' : ''}`}
        onClick={() => handleSwitch('ru')}
        role="radio"
        aria-checked={locale === 'ru'}
        aria-label="Русский язык"
      >
        RU
      </button>
      <button
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => handleSwitch('en')}
        role="radio"
        aria-checked={locale === 'en'}
        aria-label="English language"
      >
        EN
      </button>
    </div>
  );
};
