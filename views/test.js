const jwt = require('jsonwebtoken');
/*
const token = jwt.sign(
    {name : 'tu'},
    'my-secret-key',
    {expiresIn : '1m'}, //유효기간
    (err, token) => {
        if(err){ //에러 핸들링
            console.log(err);
            return;
        }
        console.log(token); //출력 결과
    }
);
*/

jwt.verify(token, 'my-secret-key', (error,decoded) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(decoded);
});