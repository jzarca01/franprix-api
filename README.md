# franprix-api

Une API pour gérer les promos personnalisées de la carte Franprix, **sans le retargeting**

## Usage

```javascript
const Franprix = require('franprix-api');
const franprix = new Franprix();
```

See example.js

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

### Get user's infos

```javascript
franprix.getMyInfos();
```
