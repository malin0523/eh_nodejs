const {pool} = require('../../data');

//파일 업로드
exports.upload = async (ctx) => {
    let file = ctx.request.file;
    
    const query = 'INSERT INTO files (original_name, file_path, file_size) VALUES (?, ?, ?)';

    let {affectedRows, insertId} = await pool(query, [file.originalname, file.path, file.size]);

    if(affectedRows > 0){
        ctx.body = {
            result : "OK",
            id : insertId
        }
    }
    else {
        ctx.body = {
            result : "FAIL",
        }
    }
}

//파일 다운로드
exports.download = async ctx => {
    let {id} = ctx.params;

    const query = 'SELECT * FROM files WHERE id = ?';
    let result = await pool(query, [id]);

    if(result.length < 1){
        ctx.body = {result : "fail"};
        return;
    }

    let item = result[0];

    ctx.response.set("content-disposition", 'attachment; filename=${item.original_name}');
    ctx.statusCode = 200;
    ctx.body = fs.createReadStream(item.file_path);
}