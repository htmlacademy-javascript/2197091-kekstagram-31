/* Задание: создать массив из 25 сгенерированных объектов. Каждый объект - описание фотографии, опубликованной пользователем.

  id, число, - идентификатор фотографии (случайное число от 1 до 25). Не должен повторяться.

  url, строка - адрес картинки вида photos/{{i}}.jpg. Адреса не должны повторяться.
      i - случайное число от 1 до 25.

  comments, массив объектов - список комментариев фотографии.
======
  У каждого комментария должно быть:
    id, число - случайное число. Не должно повторяться.

    avatar, строка по правилу img/avatar-{{случайное число от 1 до 6}}.svg
*/

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

// Создание комментария
const createComment = () => {
  return {
    id: '',
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElem(COMMENT_MESSAGES),
    name: getRandomArrayElem(USER_NAMES),
  };
};

// Генерация нескольких объектов - комментариев к фотографиям
const similarComments = Array.from({ length: getRandomInteger(0, 30) },createComment);

// Создание описания фотографии
const createPhotoDescription = () => {
  return {
    id: '',
    url: '',
    description: getRandomArrayElem(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: similarComments,
  };
};

// Генерация нескольких объектов - описаний фотографии
const PHOTO_DESCRIPTIONS_COUNT = 25;
const similarPhotoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

// console.log(createPhotoDescription());
console.log(similarPhotoDescriptions);
