const FranprixApi = require("./index")
const franprix = new FranprixApi()

const config = require('./config.json')

let API_TOKEN = ''

franprix.signIn(config.login, config.password).then(response => {
        API_TOKEN = response.access_token
        console.log(API_TOKEN)
    })
    .then(() => franprix.getAvailableCoupons(API_TOKEN))
    .then(offers => {
        console.log(`${offers.length} offers available`)
        offersId = offers.map(offer => offer.id);
        franprix.addCouponsToCard(offersId, API_TOKEN)
            .then(response =>
                console.log(response)
            )
    })