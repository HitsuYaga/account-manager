var crypto = require('crypto-js');

var originalMessage = {
  name: 'Hitsu',
  secretName: '007'
}

var secretKey = '123456abc';

encryptMessage = crypto.AES.encrypt(JSON.stringify(originalMessage), secretKey);

console.log("Encrypt Message:" + encryptMessage);

var bytes  = crypto.AES.decrypt(encryptMessage, secretKey);

var decryptMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptMessage);
console.log(decryptMessage.name);
