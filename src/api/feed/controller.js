//전체 피드
exports.index = (ctx, next) =>{
    ctx.body = '피드 리스트';
}

//새 피드 작성 처리
exports.store = (ctx, next) =>{
    ctx.body = '피드 작성 완료';
}

//피드 상세보기
exports.show = (ctx, next) =>{
    let id = ctx.params.id;
    ctx.body = '${id} 피드 상세';
}

//피드 수정
exports.update = (ctx, next) =>{
    let id = ctx.params.id;
    ctx.body = '${id} 피드 수정';
}

//피드 삭제
exports.delete = (ctx, next) =>{
    let id = ctx.params.id;
    ctx.body = '${id} 피드 수정';
}