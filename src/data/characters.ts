import vitalikAvatar from '../assets/Vitalik_backend.jpeg';
import igorAvatar from '../assets/Igor_pm.jpeg';
import senyaAvatar from '../assets/Senya_qa.jpeg';
import alexAvatar from '../assets/Alex_designer.jpeg';
import antonAvatar from '../assets/Anton_frontend.jpeg';
import stanislavAvatar from '../assets/Stanislav_Supervisor.jpeg';
import lenaAvatar from '../assets/Lena_HR.jpeg';
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
    voice: string;  // Описание голоса
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
    voice: string;
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
    id: 'stanislav',
    avatar: stanislavAvatar,
    accentColor: '#991b1b', // Red-800
    locales: {
      ru: {
        name: 'Станислав',
        role: 'Руководитель департамента',
        bio: 'Станислав Яковлевич — гроза бюджетов и главный адепт методологии «работы на результат». Он твердо убежден, что лучшая мотивация для команды — это новые амбициозные KPI и урезание расходов на печенье. Умеет произносить вдохновляющие часовые речи о «синергии» и «общей семье», после которых разработчики плачут, а менеджеры судорожно перерисовывают диаграммы Ганта.',
        stats: [
          { label: 'Любовь к аббревиатурам (KPI, OKR)', value: 100 },
          { label: 'Урезание бюджетов на тимбилдинги', value: 95 },
          { label: 'Пассивная агрессия в письмах', value: 92 },
          { label: 'Навык "Делегирование делегирования"', value: 98 },
          { label: 'Вера в фразу "Мы — одна семья"', value: 99 },
        ],
        phrases: [
          '«Коллеги, ради общего блага нам нужно затянуть пояса (но не руководству).»',
          '«Я не вижу ваших горящих глаз в отчетах об эффективности.»',
          '«Давайте проведем ретроспективу ретроспективы, чтобы понять, где мы теряем фокус.»',
          '«Мы должны работать как единый организм, поэтому со следующей недели отменяем бесплатные обеды.»',
          '«Я услышал вашу позицию, но мы сделаем так, как решило руководство на комитете.»',
        ],
        skills: ['Управление KPI / OKR', 'Сокращение затрат', 'Написание писем с темой URGENT', 'Микроменеджмент', 'Мотивационные речи', 'Игнорирование здравого смысла'],
        specs: {
          weapon: 'PDF-отчет со стрелочками вниз',
          drink: 'Двойной эспрессо (без молока, сахара и жалости)',
          weakness: 'Внезапный уход лид-разработчика перед релизом',
          dream: 'Заменить всю команду разработки одной лицензией на ChatGPT',
          voice: 'Громкий, авторитарный бас, переходящий на фальцет при обсуждении бюджетов',
        },
      },
      en: {
        name: 'Stan',
        role: 'Department Supervisor',
        bio: "Stan is the budget slayer and the ultimate champion of \"result-oriented\" work. He firmly believes that the best motivation for a team is new ambitious KPIs and cutting cookie expenses. He can give inspiring, hour-long speeches about \"synergies\" and \"being one family,\" after which developers cry and managers frantically redraw Gantt charts.",
        stats: [
          { label: 'Love for acronyms (KPI, OKR)', value: 100 },
          { label: 'Cutting team building budgets', value: 95 },
          { label: 'Passive aggression in emails', value: 92 },
          { label: '“Delegating the delegation” skill', value: 98 },
          { label: 'Belief in "We are one family"', value: 99 },
        ],
        phrases: [
          '"Team, for the greater good we need to tighten our belts (management excluded)."',
          '"I don\'t see your eyes glowing in the performance reports."',
          '"Let\'s hold a retrospective of the retrospective to see where we lost focus."',
          '"We must work as a single organism, so starting next week, free lunches are canceled."',
          '"I hear your feedback, but we will proceed with the committee\'s decision."',
        ],
        skills: ['KPI / OKR management', 'Cost reduction', 'Writing emails with URGENT subject lines', 'Micromanagement', 'Motivational speeches', 'Ignoring common sense'],
        specs: {
          weapon: 'PDF report with downward-pointing red arrows',
          drink: 'Double espresso (no milk, no sugar, no mercy)',
          weakness: 'A key developer resigning right before a release',
          dream: 'Replace the entire dev team with a single ChatGPT subscription',
          voice: 'Loud, authoritative bass, switching to falsetto when discussing budgets',
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
          voice: 'Бодрый, вечно торопливый тенор с нотками панического дружелюбия',
        },
      },
      en: {
        name: 'Gary',
        role: 'Project Manager (PM)',
        bio: "Gary is a human Gantt chart. He can motivate a team so well that everyone starts working weekends thinking it was their own idea. Gary's main talent is juggling tasks in a tracker and creating the illusion of intense activity for the client. He firmly believes that if you gather nine pregnant women, the baby will be born in one month.",
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
          voice: 'Upbeat, hurried tenor with undertones of panicked friendliness',
        },
      },
    },
  },
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
          voice: 'Монотонный, сонный баритон, оживающий только при слове "оптимизация"',
        },
      },
      en: {
        name: 'Vince',
        role: 'Backend Developer',
        bio: "Vince is a legendary backend dev who lives in the terminal and communicates exclusively via SQL queries. He's convinced that frontend is \"just coloring pages\" while the real magic happens where terabytes of logs are churning. He hates meetings, loves optimizing indexes, and believes any bug can be explained by cosmic radiation.",
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
          voice: 'Monotonous, sleepy baritone, waking up only at the word "optimization"',
        },
      },
    },
  },
  {
    id: 'anton',
    avatar: antonAvatar,
    accentColor: '#0ea5e9', // React sky blue
    locales: {
      ru: {
        name: 'Антон',
        role: 'Фронтенд Разработчик',
        bio: 'Антон — повелитель дивов и защитник адаптивной верстки. Он верит, что бэкенд существует только для того, чтобы поставлять JSON для его великолепных интерфейсов. Может часами спорить с Саней о том, можно ли реализовать дизайн без костылей, и с Виталей — о том, почему CORS опять блокирует запросы. Любимое занятие — обновлять зависимости и чинить то, что после этого сломалось.',
        stats: [
          { label: 'Скорость центрирования div', value: 99 },
          { label: 'Ненависть к Safari', value: 95 },
          { label: 'Любовь к TailwindCSS', value: 92 },
          { label: 'Размер папки node_modules', value: 100 },
          { label: 'Вера в фразу "Это проблема на бэке"', value: 98 },
        ],
        phrases: [
          '«У меня локально всё отображается нормально, это у вас Safari старый.»',
          '«Я просто обновил минорную версию пакета... почему ничего не работает?»',
          '«Это ошибка CORS, скажите Витале, пусть настроит заголовки.»',
          '«Там делов на пять минут, просто верстку подправить (нет).»',
          '«Зачем переписывать? Давай просто бахнем !important и разойдемся.»',
        ],
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite / Webpack', 'Дебаг в Chrome DevTools', 'Центрирование div'],
        specs: {
          weapon: 'Ctrl+C / Ctrl+V со StackOverflow и документация React',
          drink: 'Латте на банановом молоке (или энергетик в день релиза)',
          weakness: 'Верстка писем для пиксель-перфект рассылок',
          dream: 'Удалить Internet Explorer и Safari из истории человечества',
          voice: 'Энергичный, слегка писклявый юношеский голос с быстрой речью',
        },
      },
      en: {
        name: 'Tony',
        role: 'Frontend Developer',
        bio: "Tony is the lord of divs and the champion of responsive layouts. He believes the backend exists solely to supply JSON for his gorgeous interfaces. He can debate for hours with Sanya (Alex) about whether a design can be coded without hacks, and with Vince (Vitalik) about why CORS is blocking requests again. His favorite hobby is updating dependencies and fixing whatever breaks.",
        stats: [
          { label: 'Centering a div speed', value: 99 },
          { label: 'Safari hatred', value: 95 },
          { label: 'Love for TailwindCSS', value: 92 },
          { label: 'node_modules size', value: 100 },
          { label: 'Belief in "This is a backend issue"', value: 98 },
        ],
        phrases: [
          '"It renders perfectly on my machine, you probably have an old Safari version."',
          '"I just updated a minor version of a package... why is everything broken?"',
          '"This is a CORS error, tell Vince to configure the headers."',
          '"It\'s a 5-minute fix, just need to adjust the styles (not really)."',
          '"Why rewrite? Let\'s just throw in !important and call it a day."',
        ],
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite / Webpack', 'Chrome DevTools debugging', 'Centering divs'],
        specs: {
          weapon: 'Ctrl+C / Ctrl+V from StackOverflow & React docs',
          drink: 'Banana milk latte (or energy drink on release day)',
          weakness: 'Pixel-perfect HTML emails layouts',
          dream: 'Erase Internet Explorer and Safari from human history',
          voice: 'Energetic, slightly squeaky youthful voice with rapid-fire delivery',
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
        name: 'Саня',
        role: 'UI/UX Дизайнер',
        bio: 'Саня — пиксель-перфекционист и защитник пользовательского опыта. Он видит мир в сетках, градиентах и шрифтовых парах. Саня считает, что любой функционал бесполезен, если он не выглядит «сексуально» и современно. Постоянно спорит с разработчиками из-за сдвига кнопок на пару пикселей и искренне не понимает, почему они не могут просто перенести макет из Figma в код «один в один».',
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
          voice: 'Мягкий, томный голос с растянутыми гласными и обилием англицизмов',
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
          voice: 'Soft, languid voice with drawn-out vowels and heavy buzzword usage',
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
          voice: 'Ехидный, вкрадчивый голос с интонацией "я поймал тебя на ошибке"',
        },
      },
      en: {
        name: 'Sam',
        role: 'QA Engineer (Tester)',
        bio: "Sam is the developers' nightmare and the chief destroyer of illusions. He can find a bug where nothing could possibly break — like in static text or a turned-off monitor. Sam genuinely believes that programmers write code solely to make his life harder. He loves writing detailed bug reports with screenshots, video recordings, and console logs that nobody reads.",
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
          dream: "Find a bug in Vince's compiler and prove that backend messes up too",
          voice: 'Sarcastic, insidious voice with an "I caught you making a mistake" tone',
        },
      },
    },
  },
  {
    id: 'lena',
    avatar: lenaAvatar,
    accentColor: '#db2777', // Pink-600
    locales: {
      ru: {
        name: 'Лена',
        role: 'HR-специалист',
        bio: 'Лена — главный архитектор корпоративной культуры и хранительница психологического здоровья коллектива (по крайней мере, так написано в её должностной инструкции). Она способна разглядеть «токсичность» в простом приветствии в Slack и искренне верит, что любой межличностный конфликт можно решить с помощью пиццы и игры в настолки. Мастерски проводит тимбилдинги, на которых все чувствуют себя неловко, но очень сплоченно.',
        stats: [
          { label: 'Поиск «токсичности» в чатах', value: 98 },
          { label: 'Организация неловких тимбилдингов', value: 95 },
          { label: 'Фраза «Давай обсудим на 1-to-1»', value: 100 },
          { label: 'Скорость ответа кандидатам', value: 15 },
          { label: 'Любовь к печенькам в офисе', value: 90 },
        ],
        phrases: [
          '«Коллеги, давайте сохранять экологичность в общении.»',
          '«Жду всех на пятничный тимбилдинг, явка обязательна, будем играть в крокодила!»',
          '«Как ты себя чувствуешь в «Костыль Инжиниринг»? Расскажи на 1-to-1.»',
          '«У нас молодая, дружная команда и динамично развивающаяся атмосфера!»',
          '«Мы ищем не просто разработчика, а настоящего team player с горящими глазами.»',
        ],
        skills: ['Рекрутинг / Сорсинг', 'Проведение 1-to-1 созвонов', 'Разрешение конфликтов пиццей', 'Написание постов о вакансиях с эмодзи', 'Эмпатия по расписанию'],
        specs: {
          weapon: 'Приглашение на созвон «1-to-1: Поговорить» без указания темы',
          drink: 'Матча на безлактозном молоке с лавандовым сиропом',
          weakness: 'Кандидат, который просит зарплату в долларах и работу без созвонов',
          dream: 'Устроить тимбилдинг, с которого никто не попытается сбежать через окно',
          voice: 'Преувеличенно мягкий, успокаивающий терапевтический альт с фальшивым дружелюбием',
        },
      },
      en: {
        name: 'Lena',
        role: 'HR Manager',
        bio: 'Lena is the chief architect of corporate culture and the guardian of the team\'s mental health (at least, that\'s what her job description says). She can spot "toxicity" in a simple Slack greeting and believes any interpersonal conflict can be resolved with pizza and board games. She masterfully organizes team buildings where everyone feels awkward but very united.',
        stats: [
          { label: 'Spotting "toxicity" in chats', value: 98 },
          { label: 'Organizing awkward team buildings', value: 95 },
          { label: '"Let\'s discuss this on a 1-to-1" frequency', value: 100 },
          { label: 'Candidate response speed', value: 15 },
          { label: 'Love for office cookies', value: 90 },
        ],
        phrases: [
          '"Team, let\'s keep our communication eco-friendly and constructive."',
          '"Looking forward to seeing everyone at Friday\'s team building, attendance is mandatory, we will play Charades!"',
          '"How do you feel at Legacy Systems Inc.? Tell me in our 1-to-1."',
          '"We have a young, friendly team and a dynamically developing environment!"',
          '"We aren\'t just looking for a developer, we need a true team player with glowing eyes."',
        ],
        skills: ['Recruiting / Sourcing', 'Running 1-to-1 meetings', 'Resolving conflicts with pizza', 'Writing job posts with emojis', 'Scheduled empathy'],
        specs: {
          weapon: 'A calendar invite titled "1-to-1: Just to chat" with no description',
          drink: 'Matcha on lactose-free milk with lavender syrup',
          weakness: 'A candidate asking for salary in USD and zero meetings',
          dream: 'Organize a team building where no one tries to escape through a bathroom window',
          voice: 'Exaggeratedly soft, soothing therapeutic alto with forced friendliness',
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
