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

    const allOffersIds = promotions
      .map(offer => offer.id.toString());

    if (allOffersIds.length) {
      await franprix.addOffersToCard(allOffersIds);
    }
    
    const myPromotions = await franprix.getMyPromotions();

    console.log(myPromotions.map(acc => acc.name, []).join('\n'));
  } catch (err) {
    console.log(err);
  }
}

init();
