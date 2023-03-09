import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const divGalleryEl = document.querySelector('.gallery');
const galleryMurkup = createGallery(galleryItems);
divGalleryEl.insertAdjacentHTML('beforeend', galleryMurkup);

// divGalleryEl.addEventListener("click", onGalleryImgClick);

function createGallery(arg) {
  return arg
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
