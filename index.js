const fetch = require("node-fetch");

const BASE_URL = "https://api.shoppingadventure.fr/api/franprix/v1";
const AUTH_URL = BASE_URL + "/auth";
const COUPON_URL = BASE_URL + "/extra/targeting";
const ADD_COUPON_URL = BASE_URL + "/extra/clipping";
const INFOS_URL = BASE_URL + "/me";

function franprixApi() {
}

franprixApi.prototype.signIn = async function(login, password) {
    const loginInfos = { "id": login, "password": password };
    try {
        let response = await fetch(AUTH_URL, {
            method: "POST",
            body: JSON.stringify(loginInfos)
        });
        let data = await response.json();
        return data.token;
    }
    catch(error) {
        console.log("error", error);
    }
}

franprixApi.prototype.getAvailableCoupons = async function(accessToken) {
    try {
        let response = await fetch(COUPON_URL, {
            method: "GET",
            headers : {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        let data = await response.json();
        return data.offers_clipped;
    }
    catch(error) {
        console.log("error", error);
    }
}

franprixApi.prototype.getMyCoupons = async function(accessToken) {
    try {
        let response = await fetch(COUPON_URL, {
            method: "GET",
            headers : {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        let data = await response.json();
        return data.offers_clipped;
    }
    catch(error) {
        console.log("error", error);
    }
}

franprixApi.prototype.addCouponToCard = async function(couponsIds, accessToken) {
    const couponInfos = { "ids" : couponsIds };
    try {
        let response = await fetch(ADD_COUPON_URL, {
            method: "POST",
            headers : {
                "Authorization": `Bearer ${accessToken}`
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

franprixApi.prototype.getMyInfos = async function(accessToken) {
    try {
        let response = await fetch(INFOS_URL, {
            method: "GET",
            headers : {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        let data = await response.json();
        return data;
    }
    catch(error) {
        console.log("error", error);
    }
}

module.exports = franprixApi;
