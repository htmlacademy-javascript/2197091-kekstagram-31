import {createSimilarPhotoDescriptions} from './descr-generator.js';
import { openModal } from './pic-modal.js';

// Шаблон
const template = document.querySelector('#picture').content.querySelector('.picture');

// Место для вставки в разметке
const picturesList = document.querySelector('.pictures');

// Создается массив элементов для шаблона
const similarPhotoDescriptions = createSimilarPhotoDescriptions();

// Создается пустой контейнер для хранения готовых шаблонов
const similarPicturesFragment = document.createDocumentFragment();

similarPhotoDescriptions.forEach((item) => {
  const templateCopy = template.cloneNode(true);
  const descrImage = templateCopy.querySelector('.picture__img');


  descrImage.src = item.url;
  descrImage.alt = item.description;
  templateCopy.querySelector('.picture__likes').textContent = item.likes;
  templateCopy.querySelector('.picture__comments').textContent = item.comments.length;
  templateCopy.href = `/photos/${item.id}.jpg`;

  templateCopy.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(item);
  });

  // Заполнение контейнера готовыми данными
  similarPicturesFragment.append(templateCopy);
});

// Отрисовка готовых шаблонов с данными на странице
picturesList.append(similarPicturesFragment);


