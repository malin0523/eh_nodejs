const Router = require('@koa/router');
const router = new Router();

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const { myLogging } = require('./middleware/logging');

router.use(myLogging);
router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.get('/api/user/:id', apiUserController.info);

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