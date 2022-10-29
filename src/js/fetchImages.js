// import axios from "axios";
// const API_KEY = '30787461-ba0c148aaad98f08ab67703d7';
// axios.defaults.baseURL = 'https://pixabay.com/api';
// const PARAM = 'per_page=40&orientation=horizontal&image_type=photo&safesearch=true';

export class FetchApiImages {
  
  // this.query = '';
  // this.page = 1;
  
  getImages(query) {
    const url = `https://pixabay.com/api/?key=30787461-ba0c148aaad98f08ab67703d7&q=${query}&page=${page}&per_page=40&orientation=horizontal&image_type=photo&safesearch=true`;
    return fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
      return response.json();
  
  
      });
  }
}
    //   .then(data => {
    //     this.incrementPage();
    //     return data.articles;
    //   })
    // .catch(error => {
  
  

//   incrementPage() {
//         this.page += 1;
//     }

//   resetPage() {
//         this.page = 1;
//     }

//   get searchQuery() {
//   return this.query;
//  }

//   set searchQuery(newQuery) {
//   this.query = newQuery;
//   }
// }

export { FetchApiImages };