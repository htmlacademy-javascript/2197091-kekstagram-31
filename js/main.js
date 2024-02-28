const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USER_NAMES = [
  'Галина',
  'Евгений',
  'Борис',
  'Советчик_из_чата',
  'Анатолий',
  'Екатерина',
  'Илья',
  'Максим',
  'НАГИБАТОР2007',
  'Ольга',
  'Сын маминой подруги',
  'Семён',
  'Александр',
  'Елена',
  'Яна',
  'Степан',
];

const PHOTO_DESCRIPTIONS = [
  'Будь собой, никто не сможет сделать это лучше',
  'Заставь их остановиться и посмотреть',
  'Жизнь лучше, когда ты смеешься',
  'Счастье никогда не выйдет из моды',
  'Это не мамины гены, это я',
  'Будь холмом в мире равнин',
  'Улыбайтесь шире, смейтесь чаще',
  'Соленая, но сладкая',
];

// Магические значения
const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;
const MIN_PHOTO_ADRESS = 1;
const MAX_PHOTO_ADRESS = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 1_000;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const FIRST_AVATAR_IMG = 1;
const LAST_AVATAR_IMG = 6;

// Получение целого числа из переданного диапазона
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Получение случайного элемента массива (с адаптивом к длине массива)
const getRandomArrayElem = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Генератор случайного уникального id в диапазоне
function createIdGenerator(min, max) {
  const previousIds = [];

  return () => {
    let currentId = getRandomInteger(min, max);

    if (previousIds.length >= max - min + 1) {
      return null;
    }

    while (previousIds.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }

    previousIds.push(currentId);
    return currentId;
  };
}

const generatePhotoId = createIdGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);
const generateCommentId = createIdGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);
const generatePhotosUrl = createIdGenerator(MIN_PHOTO_ADRESS, MAX_PHOTO_ADRESS);

// Создание комментария
const createComment = () => {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(FIRST_AVATAR_IMG, LAST_AVATAR_IMG)}.svg`,
    message: getRandomArrayElem(COMMENT_MESSAGES),
    name: getRandomArrayElem(USER_NAMES),
  };
};

// Генерация нескольких объектов - комментариев к фотографиям
const similarComments = Array.from({ length: getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT) }, createComment);

// Создание описания фотографии
const createPhotoDescription = () => {
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotosUrl()}.jpg`,
    description: getRandomArrayElem(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: similarComments,
  };
};

// Генерация нескольких объектов - описаний фотографии
const PHOTO_DESCRIPTIONS_COUNT = 25;
const similarPhotoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);
