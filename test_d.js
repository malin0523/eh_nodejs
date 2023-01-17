const crypto = require('crypto');

let origin = 'admin1234';
let salt = 'mysalt1234';

let result = crypto.pbkdf2Sync(origin, salt, 50, 255, 'sha512');

console.log(result.toString('base64'));