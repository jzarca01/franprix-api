const FranprixApi = require("./index")
const franprix = new FranprixApi()

const config = require('./config.json')

let API_TOKEN = ''

franprix.signIn(config.login, config.password)
    .then(() => franprix.getAvailableCoupons())
    .then(offers => {
        console.log(`${offers.length} offers available`)
        offersId = offers.map(offer => offer.id);
        franprix.addCouponsToCard(offersId)
            .then(response =>
                console.log(response)
            )
    })