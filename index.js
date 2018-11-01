const bip39 = require('bip39');
const hdkey = require('hdkey');
const ethUtil = require('ethereumjs-util');
const ethTx = require('ethereumjs-tx');

const mnemonic = bip39.generateMnemonic(); //generates string
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer

const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('hex');

const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
const addr = ethUtil.publicToAddress(pubKey).toString('hex');
const address = ethUtil.toChecksumAddress(addr);

console.log(mnemonic);
console.log(`0x${addr}`);
console.log(addrNode._privateKey);

