import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import refs from './js/refs';
import { FetchApiImages } from './js/fetchImages';

const fetchApiImages = new FetchApiImages();

const handleSubmit = event => {
    event.preventDefault();
    const { elements: { searchQuery }, } = event.currentTarget;
    const query = searchQuery.value.trim();
    if (!query) {
        Notify.failure("Enter data to search.")
        return;
    }
    
    fetchApiImages.getImages(query).then(({ results }) => {
    createMarkup(results);
    });
};

refs.formRef.addEventListener('submit', handleSubmit);
    
function createMarkup(photos) {
    return photos.map(({webformatURL,largeImageURL,tags,likes,comments,downloads}) => {
        return `<div class="photo-card">
  <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`
    }).join('');
}

`<div class="photo-card">
  <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`
