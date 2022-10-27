import axios from "axios";
// axios.default.baseURL = 'https://pixabay.com/api/';


export default class FetchApiImages  {
  constructor() {
    this.queryInput = '';
  }
  getImages() {
    const url = `https://pixabay.com/api/?key=30787461-ba0c148aaad98f08ab67703d7&q=${this.queryInput}&image_type=photo&per_page=40&orientation=horizontal&safesearch=true`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
  return this.queryInput;
 }

  set query(newQuery) {
  this.queryInput = newQuery;
  }
}

