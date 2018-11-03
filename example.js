const FranprixApi = require("./index")
const franprix = new FranprixApi()

const config = require('./config/config.json')

async function init() {
    try {
        await franprix.signIn(config.login, config.password)
        const infos = await franprix.getMyInfos()
        console.log(infos)

        const offers = franprix.getAvailableCoupons()
        console.log(`${offers.length} offers available`)
        const offersId = offers.map(offer => offer.id);
        const response = franprix.addCouponsToCard(offersId)
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}