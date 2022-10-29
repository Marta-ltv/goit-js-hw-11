import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from './js/refs';
import { FetchApiImages } from './js/fetchImages';

const fetchApiImages = new FetchApiImages();

// let query = '';

function onSearch(e) {
    e.preventDefault();
    // fetchApiImages.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
    // fetchApiImages.resetPage();
    const {
        elements: { searchQuery },
    } = e.currentTarget;
    const query = searchQuery.value.trim();
    
    if (!query) {
        Notify.failure("Enter data to search.");
        return;
    }
    fetchApiImages.getImages(query).then(data => {
        console.log(data);
    });
};

// function onLoadMore() {
//     fetchApiImages.getImages().then(data => {
//         console.log(data)
//      });;
// }
  
     

    //     fetchApiImages.getImages().then(({ results }) => {
    //       const markup = createMarkup(results);
    //         refs.galleryRef.insertAdjacentHTML('beforeend', markup);
    //     });
    // };

    
   


// function createMarkup(photos) {
//     const markup = photos.map(({ largeImageURL, webformatURL, tags, likes, views,comments, downloads } ) => `<div class="photo-card">
//     <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
//     <div class="info">
//     <p class="info-item">
//         <b>Likes: </b></br>${likes}
//     </p>
//     <p class="info-item">
//         <b>Views: </b></br>${views}
//     </p>
//     <p class="info-item">
//         <b>Comments: </b></br>${comments}
//     </p>
//     <p class="info-item">
//         <b>Downloads: </b></br>${downloads}
//     </p>
//     </div></div>`);

//     return markup.join('')
// }

<<<<<<< HEAD
return markup.join('')
=======


    
refs.formRef.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);



>>>>>>> 23bf2291c6fe9d1046cd7153eefbd779d313a918
