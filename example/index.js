const FranprixApi = require('..');
const franprix = new FranprixApi({
  email: '',
  password: ''
});

async function init() {
  try {
    await franprix.signIn();
    const infos = await franprix.getMyInfos();

    const promotions = await franprix.getAvailablePromotions();
    const advantages = await franprix.getAvailableAdvantages();

    const allOffersIds = promotions
      .concat(advantages)
      .map(offer => offer.id.toString());

    if (allOffersIds.length) {
      await franprix.addOffersToCard(allOffersIds);
    }

    const myPromotions = await franprix.getMyPromotions();
    const myAdvantages = await franprix.getMyAdvantages();

    console.log(myAdvantages);
  } catch (err) {
    console.log(err);
  }
}

init();
