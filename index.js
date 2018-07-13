const axios = require("axios");

class Franprix {
    constructor() {
        this.request = axios.create({
            baseURL: 'https://api.shoppingadventure.fr/api/franprix/v1'
        });
    }

    setAccessToken(accessToken) {
        this.request.defaults.headers.common['Authorization'] = '';
        delete this.request.defaults.headers.common['Authorization'];

        this.request.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${accessToken}`;
    }

    async signIn(login, password) {
        try {
            let response = await this.request({
                method: 'POST',
                url: '/auth',
                data: {
                    id: login,
                    password: password
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            });
            this.setAccessToken(response.data.token.access_token);
            return response.data;
        } catch (error) {
            console.log('error', error);
        }
    }

    async getAvailableCoupons() {
        try {
            let response = await this.request({
                method: 'GET',
                url: '/extra/targeting',
                responseType: 'json'
            });
            return response.data.offers;
        } catch (error) {
            console.log('error', error);
        }
    }

    async getMyCoupons() {
        try {
            let response = await this.request({
                method: 'GET',
                url: '/extra/targeting',
                responseType: 'json'
            });
            return response.data.offers;
        } catch (error) {
            console.log('error', error);
        }
    }

    async addCouponsToCard(couponsIds = []) {
        try {
            let response = await this.request({
                method: 'POST',
                url: '/extra/clipping',
                data: {
                    ids: couponsIds
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
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
                url: '/me',
                responseType: 'json'
            });
            return response.data;
        } catch (error) {
            console.log('error', error);
        }
    }
}

module.exports = Franprix;