const Router = require('@koa/router');
const router = new Router();

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const { myLogging } = require('./middleware/logging');
const { verify } = require('jsonwebtoken');

router.use(myLogging);

router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login', apiUserController.login);
router.get('/api/user/:id', apiUserController.info);

//use(verify)문이 여기 아래에 들어가는 이유는 위에 작업들은 verify가 굳이 필요하지 않으므로 분리시키기 위해서 이 위치에 작성
router.use(verify);

router.get('/api/user/:id', apiUserController.login);

router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed/:id', apiFeedController.update);
router.delete('/api/feed/:id', apiFeedController.delete);


module.exports = router;

/*
router.get('/', myLogging, (ctx, next) => {
ctx.body = 'Hello World';
});

router.get('/sitemap', (ctx, next) => {
ctx.body = '사이트맵';
});

router.get('/page/:name', myLogging, (ctx, next) => {
let name = ctx.params.name;
ctx.body = `${name} 페이지`;
});
*/