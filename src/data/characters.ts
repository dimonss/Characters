import vitalikAvatar from '../assets/Vitalik.jpeg';
import igorAvatar from '../assets/Igor.jpeg';
import senyaAvatar from '../assets/Senya.jpeg';
import alexAvatar from '../assets/Alex.jpeg';
import type { Locale } from '../i18n';

export interface CharacterStat {
  label: string;
  value: number; // Percentage 0 - 100
}

export interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string;
  accentColor: string; // CSS color string (Hsl or Hex)
  bio: string;
  stats: CharacterStat[];
  phrases: string[];
  skills: string[];
  specs: {
    weapon: string; // Главное оружие
    drink: string;  // Любимый напиток
    weakness: string; // Слабость
    dream: string;  // Мечта
  };
}

interface CharacterLocalized {
  name: string;
  role: string;
  bio: string;
  stats: CharacterStat[];
  phrases: string[];
  skills: string[];
  specs: {
    weapon: string;
    drink: string;
    weakness: string;
    dream: string;
  };
}

interface CharacterBase {
  id: string;
  avatar: string;
  accentColor: string;
  locales: Record<Locale, CharacterLocalized>;
}

const charactersBase: CharacterBase[] = [
  {
    id: 'vitalik',
    avatar: vitalikAvatar,
    accentColor: '#1d4ed8', // Deep blue
    locales: {
      ru: {
        name: 'Виталя',
        role: 'Бэкенд Разработчик',
        bio: 'Виталя — легендарный бэкендер, который живет в терминале и общается исключительно на SQL-запросах. Он убежден, что фронтенд — это «просто раскраска», а настоящая магия происходит там, где ворочаются терабайты логов. Ненавидит созвоны, обожает оптимизировать индексы и считает, что любой баг можно объяснить влиянием космического излучения.',
        stats: [
          { label: 'Скорость компиляции', value: 95 },
          { label: 'Потребление кофе', value: 98 },
          { label: 'Фраза "У меня локально работает"', value: 100 },
          { label: 'Любовь к Docker контейнерам', value: 85 },
          { label: 'Толерантность к глупым вопросам', value: 12 },
        ],
        phrases: [
          '«У меня локально всё работает, разбирайтесь со своим фронтендом.»',
          '«Там делов на пять минут, просто базу пересоздать надо.»',
          '«Зачем нам документация? Код — лучшая документация.»',
          '«Опять прод упал? Ну я же говорил, надо было на PostgreSQL писать, а не на вашей этой JS-базе.»',
          '«Пуллреквест отклонен. Слишком красиво написано, подозрительно.»',
        ],
        skills: ['PostgreSQL', 'Docker', 'Go / Python / Node.js', 'Сарказм уровня Lead', 'Написание костылей', 'Игнорирование Slack'],
        specs: {
          weapon: 'IDE в темной теме без синтаксической подсветки',
          drink: 'Американо без сахара (черный как его душа)',
          weakness: 'Внезапный звонок в Zoom без предупреждения',
          dream: 'Написать идеальный код, который заменит всех менеджеров скриптом на Bash',
        },
      },
      en: {
        name: 'Vitalik',
        role: 'Backend Developer',
        bio: "Vitalik is a legendary backend dev who lives in the terminal and communicates exclusively via SQL queries. He's convinced that frontend is \"just coloring pages\" while the real magic happens where terabytes of logs are churning. He hates meetings, loves optimizing indexes, and believes any bug can be explained by cosmic radiation.",
        stats: [
          { label: 'Compilation speed', value: 95 },
          { label: 'Coffee consumption', value: 98 },
          { label: '"It works on my machine"', value: 100 },
          { label: 'Love for Docker containers', value: 85 },
          { label: 'Tolerance for dumb questions', value: 12 },
        ],
        phrases: [
          '"It works on my machine, figure out your own frontend."',
          '"It\'s a 5-minute fix, just need to recreate the database."',
          '"Why do we need docs? Code IS the documentation."',
          '"Prod is down again? I told you we should\'ve used PostgreSQL, not your JS-database."',
          '"Pull request rejected. Too clean — suspicious."',
        ],
        skills: ['PostgreSQL', 'Docker', 'Go / Python / Node.js', 'Lead-level sarcasm', 'Writing workarounds', 'Ignoring Slack'],
        specs: {
          weapon: 'IDE in dark mode with no syntax highlighting',
          drink: 'Black Americano, no sugar (dark as his soul)',
          weakness: 'Surprise Zoom call with no warning',
          dream: 'Write the perfect code that replaces all managers with a Bash script',
        },
      },
    },
  },
  {
    id: 'igor',
    avatar: igorAvatar,
    accentColor: '#b45309', // Deep amber/orange
    locales: {
      ru: {
        name: 'Игорь',
        role: 'Project Manager (PM)',
        bio: 'Игорь — человек-диаграмма Ганта. Он умеет мотивировать команду так, что все начинают работать по выходным, думая, что это их собственная инициатива. Главное умение Игоря — жонглировать задачами в таск-трекере и создавать видимость бурной деятельности перед заказчиком. Твердо верит, что если собрать девять беременных женщин, ребенок родится через месяц.',
        stats: [
          { label: 'Использование слова ASAP', value: 100 },
          { label: 'Количество созвонов в календаре', value: 98 },
          { label: 'Навык "Кормление завтраками"', value: 90 },
          { label: 'Стрессоустойчивость при горящих дедлайнах', value: 80 },
          { label: 'Написание понятного ТЗ', value: 8 },
        ],
        phrases: [
          '«Коллеги, давайте синхронизируемся в Zoom на 15 минут.»',
          '«Нужно сделать ASAP, заказчик уже вчера спрашивал!»',
          '«А мы можем это сделать без привлечения разработчиков?»',
          '«Я добавил задачу в бэклог, приоритет — критический (после вчерашнего).»',
          '«Давайте найдем синергию и задизраптим этот рынок!»',
        ],
        skills: ['Jira / Notion', 'Проведение ретроспектив', 'Рисование красивых графиков', 'Успокаивание разгневанного клиента', 'Игры разума', 'Забивание календаря разработчиков'],
        specs: {
          weapon: 'Созвон на 2 часа за 5 минут до конца рабочего дня',
          drink: 'Матча-латте на кокосовом молоке с сиропом топинамбура',
          weakness: 'Вопрос разработчика: "А где ТЗ?"',
          dream: 'Закрыть проект вовремя без багов и сжечь все спринты',
        },
      },
      en: {
        name: 'Igor',
        role: 'Project Manager (PM)',
        bio: "Igor is a human Gantt chart. He can motivate a team so well that everyone starts working weekends thinking it was their own idea. Igor's main talent is juggling tasks in a tracker and creating the illusion of intense activity for the client. He firmly believes that if you gather nine pregnant women, the baby will be born in one month.",
        stats: [
          { label: 'Usage of the word ASAP', value: 100 },
          { label: 'Meetings in the calendar', value: 98 },
          { label: '"Feeding with promises" skill', value: 90 },
          { label: 'Stress resistance at burning deadlines', value: 80 },
          { label: 'Writing clear requirements', value: 8 },
        ],
        phrases: [
          '"Team, let\'s sync in Zoom for 15 minutes."',
          '"Need this done ASAP, the client was asking yesterday!"',
          '"Can we do this without involving developers?"',
          '"I added a task to the backlog — priority critical (after yesterday)."',
          '"Let\'s find synergy and disrupt this market!"',
        ],
        skills: ['Jira / Notion', 'Running retrospectives', 'Drawing pretty charts', 'Calming angry clients', 'Mind games', "Filling developers' calendars"],
        specs: {
          weapon: '2-hour call scheduled 5 minutes before end of day',
          drink: 'Matcha latte on coconut milk with Jerusalem artichoke syrup',
          weakness: 'Developer asking: "Where are the requirements?"',
          dream: 'Close the project on time with zero bugs and burn all sprints',
        },
      },
    },
  },
  {
    id: 'senya',
    avatar: senyaAvatar,
    accentColor: '#059669', // Emerald green
    locales: {
      ru: {
        name: 'Сеня',
        role: 'Тестировщик (QA Engineer)',
        bio: 'Сеня — гроза разработчиков и главный разрушитель иллюзий. Он способен найти баг там, где, казалось бы, ломаться нечему — например, в статичном тексте или в выключенном мониторе. Сеня искренне считает, что программисты пишут код исключительно для того, чтобы усложнить ему жизнь. Обожает писать подробные баг-репорты со скриншотами, видеозаписями и логами консоли, которые никто не читает.',
        stats: [
          { label: 'Нахождение багов на проде', value: 99 },
          { label: 'Создание дубликатов в Jira', value: 85 },
          { label: 'Написание длинных баг-репортов', value: 95 },
          { label: 'Любовь к автоматизации', value: 40 },
          { label: 'Терпение к фразе "Это не баг, это фича"', value: 5 },
        ],
        phrases: [
          '«Я ничего не нажимал, оно само сломалось!»',
          '«А на мобилках это тестировалось вообще?»',
          '«Шаги воспроизведения: 1. Открыть страницу. 2. Всё упало.»',
          '«Это воспроизводится на проде, срочно блокирующий баг!»',
          '«Я проверил, кнопка съехала на 1 пиксель влево на Safari 12.»',
        ],
        skills: ['Функциональное тестирование', 'Написание тест-кейсов', 'Дебаг в DevTools', 'Доведение программистов до истерики', 'Поиск edge-кейсов', 'Написание баг-репортов'],
        specs: {
          weapon: 'Скриншот сломанной верстки с кучей красных стрелок',
          drink: 'Энергетик без сахара (чтобы тестировать ночью)',
          weakness: 'Ответ разработчика в Jira: "Не воспроизводится"',
          dream: 'Найти баг в компиляторе Витали и доказать, что бэкенд тоже косячит',
        },
      },
      en: {
        name: 'Senya',
        role: 'QA Engineer (Tester)',
        bio: "Senya is the developers' nightmare and the chief destroyer of illusions. He can find a bug where nothing could possibly break — like in static text or a turned-off monitor. Senya genuinely believes that programmers write code solely to make his life harder. He loves writing detailed bug reports with screenshots, video recordings, and console logs that nobody reads.",
        stats: [
          { label: 'Finding bugs in production', value: 99 },
          { label: 'Creating duplicates in Jira', value: 85 },
          { label: 'Writing lengthy bug reports', value: 95 },
          { label: 'Love for automation', value: 40 },
          { label: 'Patience for "It\'s not a bug, it\'s a feature"', value: 5 },
        ],
        phrases: [
          '"I didn\'t press anything, it broke by itself!"',
          '"Was this even tested on mobile?"',
          '"Steps to reproduce: 1. Open the page. 2. Everything crashed."',
          '"This reproduces on prod — critical blocker, urgent!"',
          '"I checked — the button is 1 pixel off to the left on Safari 12."',
        ],
        skills: ['Functional testing', 'Writing test cases', 'DevTools debugging', 'Driving devs insane', 'Finding edge cases', 'Writing bug reports'],
        specs: {
          weapon: 'Screenshot of broken layout with a bunch of red arrows',
          drink: 'Sugar-free energy drink (for late-night testing)',
          weakness: 'Developer\'s response in Jira: "Cannot reproduce"',
          dream: "Find a bug in Vitalik's compiler and prove that backend messes up too",
        },
      },
    },
  },
  {
    id: 'alex',
    avatar: alexAvatar,
    accentColor: '#7c3aed', // Purple/violet
    locales: {
      ru: {
        name: 'Алекс',
        role: 'UI/UX Дизайнер',
        bio: 'Алекс — пиксель-перфекционист и защитник пользовательского опыта. Он видит мир в сетках, градиентах и шрифтовых парах. Алекс считает, что любой функционал бесполезен, если он не выглядит «сексуально» и современно. Постоянно спорит с разработчиками из-за сдвига кнопок на пару пикселей и искренне не понимает, почему они не могут просто перенести макет из Figma в код «один в один».',
        stats: [
          { label: 'Любовь к шрифту Inter', value: 99 },
          { label: 'Количество слоев в Figma', value: 95 },
          { label: 'Спор с фронтендерами', value: 98 },
          { label: 'Использование фразы "Поиграть со шрифтами"', value: 8 },
          { label: 'Рисование неоновых градиентов', value: 90 },
        ],
        phrases: [
          '«В Figma всё выглядело иначе, почему кнопка съехала?»',
          '«Давай поиграем со шрифтами и сделаем повоздушнее.»',
          '«Здесь нужен легкий стеклянный эффект и неоновое свечение.»',
          '«Это не баг верстки, это видение автора!»',
          '«Пользователь не поймет эту кнопку, нужно сделать её в виде иконки без подписи.»',
        ],
        skills: ['Figma / Photoshop', 'UI/UX проектирование', 'Создание дизайн-систем', 'Подбор градиентов', 'Доказательство превосходства красоты над логикой', 'Пиксель-хантинг'],
        specs: {
          weapon: 'Ссылка на макет в Figma с режимом просмотра (View Only)',
          drink: 'Флэт уайт на альтернативном молоке (с рисунком листика)',
          weakness: 'Разработчик, использующий стандартный шрифт Arial',
          dream: 'Дизайн-система, которую фронтендеры верстают в точности до пикселя с первого раза',
        },
      },
      en: {
        name: 'Alex',
        role: 'UI/UX Designer',
        bio: "Alex is a pixel-perfectionist and a guardian of user experience. He sees the world in grids, gradients, and font pairings. Alex believes that any feature is useless unless it looks \"sexy\" and modern. He constantly argues with developers over a couple-pixel button shift and genuinely doesn't understand why they can't just translate a Figma mockup into code \"one to one\".",
        stats: [
          { label: 'Love for Inter font', value: 99 },
          { label: 'Layers count in Figma', value: 95 },
          { label: 'Arguing with frontend devs', value: 98 },
          { label: 'Using "Let\'s play with fonts"', value: 8 },
          { label: 'Drawing neon gradients', value: 90 },
        ],
        phrases: [
          '"In Figma it looked different — why did the button shift?"',
          '"Let\'s play with fonts and make it airier."',
          '"This needs a subtle glass effect and neon glow."',
          '"It\'s not a layout bug, it\'s the author\'s vision!"',
          '"The user won\'t get this button — make it an icon with no label."',
        ],
        skills: ['Figma / Photoshop', 'UI/UX design', 'Building design systems', 'Gradient picking', 'Proving beauty over logic', 'Pixel-hunting'],
        specs: {
          weapon: 'Figma link with View Only access',
          drink: 'Flat white on alt milk (with a leaf art)',
          weakness: 'A developer using default Arial font',
          dream: 'A design system that frontend devs implement pixel-perfect on the first try',
        },
      },
    },
  },
];

export function getCharacters(locale: Locale): Character[] {
  return charactersBase.map((base) => {
    const loc = base.locales[locale];
    return {
      id: base.id,
      avatar: base.avatar,
      accentColor: base.accentColor,
      name: loc.name,
      role: loc.role,
      bio: loc.bio,
      stats: loc.stats,
      phrases: loc.phrases,
      skills: loc.skills,
      specs: loc.specs,
    };
  });
}

// Keep backward-compatible default export for potential external use
export const charactersData = getCharacters('ru');
