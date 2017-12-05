# simple api mock server by nodejs express

## Getting Started

install packages via npm
```js
$ npm install
```

create certificates(this is a sample)
```js
$ cd cert
$ openssl genrsa -aes128 2048 > server.key
$ openssl req -new -key server.key > server.csr
$ openssl x509 -in server.csr -days 365000 -req -signkey server.key > server.crt
```

run api mock server
```js
$ npm start
```
