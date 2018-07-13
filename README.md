# franprix-api

Une API pour gérer les promos personnalisées de la carte Franprix, **sans le retargeting**

## Usage

```javascript
const Franprix = require("franprix-api");
const franprix = new Franprix();
```

### Log in

```javascript
franprix.signIn(login, password);
```

### Get available coupons

```javascript
franprix.getAvailableCoupons();
```

### Get user's coupons

```javascript
franprix.getMyCoupons();
```

### Add coupons to card

```javascript
franprix.addCouponToCard((couponsId = []));
```

<<<<<<< HEAD
### Get user's infos
=======
franprix.addCouponsToCard(couponsId = [], API_TOKEN)
  .then(response => console.log(response))
>>>>>>> c0f9bbe2c8d0bf04f2b3bf9f5be2acc9c122d4c0

```javascript
franprix.getMyInfos();
```
