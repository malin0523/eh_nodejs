//사이트 메인 페이지!!
exports.home = (ctx, next) => {
    ctx.body = 'Hello World';
}

//약관, 개인정보처리방침 등 정적 페이지
exports.page = (ctx, next) => {
    let page = ctx.params.page;
    let content;
    switch (page) {
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리 방침";
            break;
    }
    ctx.render('index', {content});
}