const {pool} = require('../../data')
/**
 * 파일 저장
 * @param {string} name 
 * @param {string} path 
 * @param {string} size 
 * @returns 
 */
exports.create = async (name, path, size) => {
    const query = 'INSERT INTO files (original_name, file_path, file_size) VALUES (?,?,?)';
    return await pool(query, [name, path, size]);
}

/**
 * 정보 조회
 * @param {number} id 파일 db 아이디
 * @returns 
 */
exports.show = async (id) => {
    const query = 'SELECT * FROM files WHERE id = ?';
    let result = await pool(query, [id]);
    return (result.length < 0) ? null : result[0];
}