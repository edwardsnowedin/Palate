// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('userLogin/index', {
    greeting: 'Log in'
  })
})

module.exports = router;
