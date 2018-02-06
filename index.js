import fetch from ("node-fetch");

const BASE_URL = "https://api.shoppingadventure.fr/api/franprix/v1";
const AUTH_URL = BASE_URL + "/auth";
const COUPON_URL = BASE_URL + "/extra/targeting";
const ADD_COUPON_URL = BASE_URL + "/extra/clipping";

export default class franprixApi {

    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.token = {}
    }

    async signIn() {
        const loginInfos = { "id": this.login, "password": this.password };
        try {
            let response = await fetch(AUTH_URL, {
                method: "POST",
                body: JSON.stringify(loginInfos)
            });
            let data = await response.json();
            this.token = {...data.token};
        }
        catch(error) {
            console.log("error", error);
        }
    }

    async getAvailableCoupons() {
        try {
            let response = await fetch(COUPON_URL, {
                method: "GET",
                headers : {
                    "Authorization": `Bearer ${this.token.access_token}`
                }
            });
            let data = await response.json();
            return data.offers;
        }
        catch(error) {
            console.log("error", error);
        }
    }

    async getMyCoupons() {
        try {
            let response = await fetch(COUPON_URL, {
                method: "GET",
                headers : {
                    "Authorization": `Bearer ${this.token.access_token}`
                }
            });
            let data = await response.json();
            return data.offers_clipped;
        }
        catch(error) {
            console.log("error", error);
        }
    }

    async addCouponToCard(couponsIds) {
        const couponInfos = { "ids" : couponsIds };
        try {
            let response = await fetch(ADD_COUPON_URL, {
                method: "POST",
                headers : {
                    "Authorization": `Bearer ${this.token.access_token}`
                },
                body: JSON.stringify(couponInfos)
            });
            let res = await response.json();
            return res;
        }
        catch(error) {
            console.log("error", error);
        }
    }
};


module.exports = new franprixApi();