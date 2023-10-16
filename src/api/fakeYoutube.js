import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async channelImageUrl() {
    return axios
      .get('/data/channel.json')
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword() {
    return axios
      .get(`/data/keyword.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/data/popular.json`).then((res) => res.data.items);
  }
}
