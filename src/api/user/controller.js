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
    
    let {affectedRows} = await this.register(email, password, name);

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
    let {id, pw} = ctx.request.body;
    let result = "";

    if (id === 'admin' && pw === '1234'){
        result = await generteToken({name : 'abc'});
    }
    else{
        result = "아이디 혹은 패스워드가 틀립니다 !!";
    }
    ctx.body = token;
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