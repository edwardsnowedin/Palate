// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('signUp/index', {
    greet: 'Sign Up'
  })
})

module.exports = router;
