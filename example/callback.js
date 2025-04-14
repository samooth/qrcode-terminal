import { default as qrcode } from '../lib/main.mjs';
qrcode.generate('someone sets it up', function (str) { 
    console.log(str);
});
