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
const PhotoId = {
  MIN: 1,
  MAX: 25,
};

const PhotoAdress = {
  MIN: 1,
  MAX: 25,
};

const CommentId = {
  MIN: 1,
  MAX: 1_000,
};

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 30,
};

const AvatarImg = {
  FIRST: 1,
  LAST: 6,
}

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

const generatePhotoId = createIdGenerator(PhotoId.MIN, PhotoId.MAX);
const generateCommentId = createIdGenerator(CommentId.MIN, CommentId.MAX);
const generatePhotosUrl = createIdGenerator(PhotoAdress.MIN, PhotoAdress.MAX);

// Создание комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarImg.FIRST, AvatarImg.LAST)}.svg`,
  message: getRandomArrayElem(COMMENT_MESSAGES),
  name: getRandomArrayElem(USER_NAMES),

});

// Генерация нескольких объектов - комментариев к фотографиям
const similarComments = Array.from({ length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX) }, createComment);

// Создание описания фотографии
const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotosUrl()}.jpg`,
  description: getRandomArrayElem(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: similarComments,
});

// Генерация нескольких объектов - описаний фотографии
const PHOTO_DESCRIPTIONS_COUNT = 25;
const similarPhotoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

export {similarPhotoDescriptions};
