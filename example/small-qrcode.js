import { default as qrcode } from '../lib/main.mjs';
let url = 'https://google.com/';

qrcode.generate(url, { small: true }, function (qr) {
    console.log(qr);
});
