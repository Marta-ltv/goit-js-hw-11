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
  fetchApiImages.searchQuery = query;
  
    fetchApiImages.getImages(query).then(({ results }) => {
      const markup = createMarkup(results);
      console.log(markup)
    });
};

refs.formRef.addEventListener('submit', handleSubmit);
    
function createMarkup(photos) {
    const markup = photos.map(({ largeImageURL, webformatURL, tags, likes, views,comments, downloads } ) => `<div class="photo-card">
    <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
    <div class="info">
    <p class="info-item">
        <b>Likes: </b></br>${likes}
    </p>
    <p class="info-item">
        <b>Views: </b></br>${views}
    </p>
    <p class="info-item">
        <b>Comments: </b></br>${comments}
    </p>
    <p class="info-item">
        <b>Downloads: </b></br>${downloads}
    </p>
    </div></div>`);

    return markup.join('')
}





