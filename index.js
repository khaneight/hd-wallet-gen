const bip39 = require('bip39');
const hdkey = require('hdkey');
const ethUtil = require('ethereumjs-util');
const ethTx = require('ethereumjs-tx');

function generate() {
    const mnemonic = bip39.generateMnemonic(); //generates string
    const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer

    const root = hdkey.fromMasterSeed(seed);
    const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1

    const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
    const addr = ethUtil.publicToAddress(pubKey).toString('hex');

    const address = ethUtil.toChecksumAddress(addr);
    const privKey = addrNode._privateKey.toString('hex');

    document.getElementById("public").textContent = address;
    document.getElementById("secret").textContent = privKey;
    document.getElementById("seed").textContent = mnemonic;
    // console.log(mnemonic);
    // console.log(address);
    // console.log(privKey);
    document.getElementById("public_qr").textContent = "";
    document.getElementById("secret_qr").textContent = "";
    document.getElementById("update").textContent = "Latest update: " + document.lastModified;
    
    new QRCode(document.getElementById("public_qr"), {
        text: address,
        width: 128,
        height: 128,
        correctLevel: QRCode.CorrectLevel.H
    });
    new QRCode(document.getElementById("secret_qr"), {
        text: privKey,
        width: 128,
        height: 128,
        correctLevel: QRCode.CorrectLevel.H
    });
}

module.exports = generate;
// generate()
