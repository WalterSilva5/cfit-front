import axios from 'axios';
import logoutUser from '../util/UserUtil';

class PlaytlistApi {
  constructor() {
    this.playlists = [];
  }

  getPlaylist() {
    axios.get('http://localhost/api-v1/playlist/').then(
      (result) => { console.log(result); },
    ).catch(() => {
      logoutUser();
    });
    // return this.playlists;
  }
}

export default PlaytlistApi;
