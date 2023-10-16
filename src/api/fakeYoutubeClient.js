import axios from 'axios';

export default class FakeYoutubeClient {
  async channel() {
    return axios.get('/data/channel.json');
  }

  async videos() {
    return axios.get('/data/popular.json');
  }

  async search() {
    return axios.get('/data/keyword.json');
  }
}
