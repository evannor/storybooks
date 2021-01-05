const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } =  require('../middleware/auth');

// @desc   Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
  // ensureGuest will bypass login page is User is still logged in
  res.render('login', {
    layout: 'login'
  });
});

// @desc   Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  // ensureAuth prevents those who are not logged in from reaching the Dashboard
  res.render('dashboard');
});

module.exports = router;