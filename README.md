# hd-wallet-gen
lightweight hd paper wallet generator for ethereum

# installation 
download latest version here:

https://github.com/khaneight/hd-wallet-gen/releases

run index.html from secure offline computer for maximum security

# developers
setup development environment

`npm install`

install dev dependencies

`npm install -g browserify watchify`

use browserify to bundle node modules for html build 

(or use watchify to automate this any time changes are made)

`browserify index.js --s generate > bundle.js` 

`watchify index.js --s generate > bundle.js`

add script tag to html file
```html 
<script src="bundle.js"></script>
```
or alternatively add script tags for each module dependency: 

bip39, hdkey, ethereumjs-tx, ethereumjs-util
