const { JsonWebTokenError } = require("jsonwebtoken");

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

//회원정보
exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = '${id} 회원에 대한 정보';
}

//회원정보 처리 모듈
exports.register = async(ctx,next) => {
    let {email, password, name} = ctx.request.body;
    let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 255, 'sha512'); //0117 비밀번호 암호화 과정 추가

    let {affectedRows} = await this.register(email, result.toString('base64'), name);

    if (affectedRows > 0){
        let token = await generteToken({name});
        ctx.body = token;
    }
    else {
        ctx.body = {result : 'FAIL'};
    }
}

//로그인 모듈
exports.login = async (ctx,next) => {
    let {email, password} = ctx.request.body;
    let result = crypto.pbkdf2Sync(password, process.env.APP_KEY, 50, 255, 'sha512');

    let item = await login(email, result.toString('base64'));

    if (item == null){
        ctx.body = {result : 'FAIL'};
        
    }
    else{
        let token = await generteToken({name : item.name});
        ctx.body = token;
    }
}
/**
 * jwt 토큰 생성
 * @param {object} payload 추가적으로 저장할 payload
 * @returns {string} jwt 토큰 string
 */

let generteToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.APP_KEY, (error, token) => {
            if(error) {reject(error)};
            resolve(token);
        })
    })
}