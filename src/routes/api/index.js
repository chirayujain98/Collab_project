const { Router } = require('express');
const route = Router();
route.use('/users', require('./users'));
route.use('/user', require('./user'));
route.use('/tags', require('./tags'));
route.use('/profile', require('./profile'));
route.use('/articles', require('./articles'));

module.exports = route;
