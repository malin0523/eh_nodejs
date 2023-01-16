exports.myLogging = async (ctx, next) => {
    let clientIp = ctx.request.ip;
    let url = ctx.originalUrl;
    console.log('${clientIp.replace("::ffff:","")} 주소에서 요청 : ${ctx.originalUrl}');
    await next();//위 작업이 다 끝난 후 다음 작업으로 이동한다
}