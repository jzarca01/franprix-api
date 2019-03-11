# franprix-api

Une API pour gérer les promos personnalisées de la carte Franprix, **sans le retargeting**

## Usage

```javascript
const Franprix = require('franprix-api');
const franprix = new Franprix({
  email: '',
  password: ''
});
```

See example.js

### Log in

```javascript
franprix.signIn();
```

### Get available promotions

```javascript
franprix.getAvailablePromotions();
```

### Get available advantages

```javascript
franprix.getAvailableAdvantages();
```

### Get user's promotions

```javascript
franprix.getMyPromotions();
```

### Get user's advantages

```javascript
franprix.getMyAdvantages();
```

### Add offers to card

```javascript
franprix.addOffersToCard((offersIds = []));
```

### Get user's infos

```javascript
franprix.getMyInfos();
```
