# hd-wallet-gen
Lightweight paper wallet generator for ethereum

Generates keypair with seed phrase for recovery

# installation 
Download latest version here:

https://github.com/khaneight/hd-wallet-gen/releases

Run index.html from secure offline computer for maximum security

# developers
Setup development environment

`npm install`

Install dev dependencies

`npm install -g browserify watchify`

Use browserify to bundle node modules for html build 

(or use watchify to automatically detect changes and execute)

`browserify index.js --s generate > bundle.js` 

`watchify index.js --s generate > bundle.js`

Add script tag to html file
```html 
<script src="bundle.js"></script>
```
Alternatively, manually add script tags for each module dependency 

(bip39, hdkey, ethereumjs-tx, ethereumjs-util)
