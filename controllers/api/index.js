const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
// User Routes
router.use('/users', userRoutes);
// Post Routes
router.use('/posts', postRoutes);
// Comments Routes
router.use('/comment', commentRoutes);

module.exports = router;
