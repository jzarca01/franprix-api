# franprix-api
Une API pour gérer les promos personnalisées de la carte Franprix, **sans le retargeting**

## Utilisation

```
const FranprixApi = require('franprix-api')
const franprix = new FranprixApi()

franprix.signIn(login, password)
  .then(response => {
    API_TOKEN = response.token
    })

franprix.getAvailableCoupons(API_TOKEN)
  .then(response => console.log(response))
  
franprix.getMyCoupons(API_TOKEN)
  .then(response => console.log(response))

franprix.addCouponToCard(couponsId = [], API_TOKEN)
  .then(response => console.log(response))

franprix.getMyInfos(API_TOKEN)
  .then(response => console.log(response))
```
