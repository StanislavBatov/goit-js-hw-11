import axios from 'axios';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const loadBtn = document.querySelector('.load-more');

export default class Fetcher {
  #BASE_URL = 'https://pixabay.com/api/';
  #KEY = '37099954-91fb09771058ce1d265dcc2e6';
  constructor() {
    this.query = '';
    this.page = 1;
    this.per_page = 40;
    this.totalPage = 1;
  }
  async getRequest() {
    const parametrs = {
      key: this.#KEY,
      q: this.query,
      page: this.page,
      per_page: this.per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };
    try {
      const response = await axios.get(this.#BASE_URL, { params: parametrs });
      if (response.data.total === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        loadBtn.classList.add('is-hidden');
      } else {
        Notify.info(`"Hooray! We found ${response.data.total} images."`);
      }

      this.totalPage = Math.ceil(response.data.total / this.per_page);

      return response.data.hits;
    } catch (error) {
      console.error('An error occurred during the API request:', error);
    }
  }
}
