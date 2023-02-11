import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryCollection.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(imageArray) {
    return imageArray.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });

lightbox;

console.log(galleryItems);
