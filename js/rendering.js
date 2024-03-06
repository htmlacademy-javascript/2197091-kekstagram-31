import {createSimilarPhotoDescriptions} from './descr-generator.js';

// Шаблон
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// Место для вставки в разметке
const picturesList = document.querySelector('.pictures');

// Создается массив элементов для шаблона
const similarPhotoDescriptions = createSimilarPhotoDescriptions();
// Создается пустой контейнер для хранения готовых шаблонов
const similarPicturesFragment = document.createDocumentFragment();

//
similarPhotoDescriptions.forEach(({url, description, likes, comments}) => {
  const pictureTemplateCopy = pictureTemplate.cloneNode(true);
  const descrImage = pictureTemplateCopy.querySelector('.picture__img');

  descrImage.src = url;
  descrImage.alt = description;
  pictureTemplateCopy.querySelector('.picture__likes').textContent = likes;
  pictureTemplateCopy.querySelector('.picture__comments').textContent = comments.length;

  // Заполнение контейнера готовыми данными
  similarPicturesFragment.appendChild(pictureTemplateCopy);
});

// Отрисовка готовых шаблонов с данными на странице
picturesList.appendChild(similarPicturesFragment);
