import axios from 'axios';

class Api {
  constructor(apiUrl, endpoint) {
    this._apiUrl = apiUrl;
    this._endpoint = endpoint;
  }

  async _loadData() {
    this._data = this._data || await this._getData(`${this._apiUrl}/${this._endpoint}`);

    if (this._data.public_repos > 0) {
      this._data.repos = await this._getRepos(this._data.public_repos, 1, this._data.repos_url + `?per_page=100&page=`);
    }
  }


  async _getData(endpoint) {
    let response;
    response = await axios.get(endpoint).then(response => response.data);
    return response;
  }

  async _getRepos(max, page, endpoint) {
    let response;
    let repos = [];

    do {
      response = await axios.get(endpoint+page).then(response => response.data);
      repos = Array.prototype.concat(repos, response);
      page++;
    } while (repos.length < max);

    repos.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count
    }).splice(3);

    return repos;
  }



  async get() {
    await this._loadData();
    return this._data;
  }
}

export default Api;