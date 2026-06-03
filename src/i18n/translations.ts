export type Locale = 'ru' | 'en';

export interface UITranslations {
  // Header
  seriesLabel: string;
  pageTitle: string;
  pageSubtitle: string;

  // Search
  searchPlaceholder: string;
  searchAriaLabel: string;
  activeProfiles: string;

  // Empty state
  emptyMessage: string;
  resetSearch: string;

  // Card
  cardAriaLabel: (name: string, role: string) => string;

  // Modal
  closeModal: string;
  specsTitle: string;
  specWeapon: string;
  specFuel: string;
  specWeakness: string;
  specDream: string;
  skillsTitle: string;
  statsTitle: string;
  phrasesTitle: string;
  phraseCopyTitle: string;
  toastCopied: string;

  // Modal portrait alt
  portraitAlt: (name: string) => string;
}

const translations: Record<Locale, UITranslations> = {
  ru: {
    seriesLabel: 'YouTube Сериал • Зона релиза',
    pageTitle: 'Персонажи',
    pageSubtitle: 'Познакомьтесь с командой разработки и менеджмента «Костыль Инжиниринг»!',

    searchPlaceholder: 'Поиск по касту (Имя, Скиллы, Роль...)',
    searchAriaLabel: 'Поиск по касту персонажей',
    activeProfiles: 'АКТИВНЫХ ПРОФИЛЕЙ',

    emptyMessage: 'Персонаж не найден... Возможно, его уволили или он ушел в отпуск!',
    resetSearch: 'Сбросить поиск',

    cardAriaLabel: (name, role) =>
      `Профиль персонажа: ${name}, роль: ${role}. Нажмите для просмотра личного дела.`,

    closeModal: 'Закрыть модальное окно',
    specsTitle: 'Спецификация персонажа',
    specWeapon: 'Оружие',
    specFuel: 'Топливо',
    specWeakness: 'Слабость',
    specDream: 'Мечта',
    skillsTitle: 'Скиллы и стек',
    statsTitle: 'Параметры эффективности',
    phrasesTitle: 'Коронные фразы',
    phraseCopyTitle: 'Нажмите, чтобы скопировать цитату',
    toastCopied: 'Цитата скопирована в буфер!',

    portraitAlt: (name) => `Портрет персонажа ${name}`,
  },
  en: {
    seriesLabel: 'YouTube Series • Release Zone',
    pageTitle: 'Characters',
    pageSubtitle: 'Meet the development and management team of Legacy Systems Inc.!',

    searchPlaceholder: 'Search cast (Name, Skills, Role...)',
    searchAriaLabel: 'Search through characters cast',
    activeProfiles: 'ACTIVE PROFILES',

    emptyMessage: "Character not found... Maybe they got fired or went on vacation!",
    resetSearch: 'Reset search',

    cardAriaLabel: (name, role) =>
      `Character profile: ${name}, role: ${role}. Click to view dossier.`,

    closeModal: 'Close modal window',
    specsTitle: 'Character Specifications',
    specWeapon: 'Weapon',
    specFuel: 'Fuel',
    specWeakness: 'Weakness',
    specDream: 'Dream',
    skillsTitle: 'Skills & Stack',
    statsTitle: 'Performance Stats',
    phrasesTitle: 'Signature Phrases',
    phraseCopyTitle: 'Click to copy the quote',
    toastCopied: 'Quote copied to clipboard!',

    portraitAlt: (name) => `${name}'s portrait`,
  },
};

export default translations;
