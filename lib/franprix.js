const axios = require('axios');

class Franprix {
  constructor({ email, password }) {
    this.request = axios.create({
      baseURL: 'https://prod.mcommerce.franprix.fr/api/franprix/v1',
      headers: {
        app_os: 'iOS',
        app_version: '3.0.0',
        'api-key': '1d7d28aa24d631d2f880cd8bc7f9731c',
        'origin-req': 'mobile',
        'Content-Type': 'application/json'
      }
    });
    this.email = email;
    this.password = password;
  }

  setAccessToken(accessToken) {
    this.request.defaults.headers.common['Authorization'] = '';
    delete this.request.defaults.headers.common['Authorization'];

    this.request.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }

  async signIn() {
    try {
      let response = await this.request({
        method: 'POST',
        url: '/auth',
        data: {
          id: this.email,
          password: this.password
        }
      });
      this.setAccessToken(response.data.token.access_token);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getAll() {
    try {
      let response = await this.request({
        method: 'GET',
        url: '/extra/targeting'
      });
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getAvailablePromotions() {
    try {
      let response = await this.getAll();
      return response.promotions;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getAvailableAdvantages() {
    try {
      let response = await this.getAll();
      return response.advantages;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getMyPromotions() {
    try {
      let response = await this.getAll();
      return response.promotionsClipped;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getMyAdvantages() {
    try {
      let response = await this.getAll();
      return response.advantagesClipped;
    } catch (error) {
      console.log('error', error);
    }
  }

  async addOffersToCard(offersIds) {
    try {
      let response = await this.request({
        method: 'POST',
        url: '/extra/clipping',
        data: {
          offers: offersIds
        }
      });
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getMyInfos() {
    try {
      let response = await this.request({
        method: 'GET',
        url: '/me'
      });
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }
}

module.exports = Franprix;
