simple api mock server by nodejs express

## setup

```js
$ npm install
```

```js
$ npm start
```

optional: create ssl(if you need https)
```js
$ cd cert
$ openssl genrsa -aes128 2048 > server.key
$ openssl req -new -key server.key > server.csr
$ openssl x509 -in server.csr -days 365000 -req -signkey server.key > server.crt
// and remove commenting out in server.js
```
