const {pool} = require('../../data');

/**
 * 회원가입
 * @param {string} email 메일 형식 아이디
 * @param {string} password 비밀번호
 * @param {string} name 이름
 */
exports.register = async (email, password, name) => {
    const query = 'INSERT INTO user (email, password, name) VALUES (?,?,?)';
    return await pool(query, [email, password, name]);
}

/**
 * 로그인 쿼리
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
exports.login = async (email, password) => {
    const query = 'SELECT * FROM user WHERE email = ? AND password = ?';
    return (result.length < 0) ? null : result[0]; 
}