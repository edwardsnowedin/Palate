// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/index', {
    hello: 'Palate'
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})



router.get('/signUp', (req, res) => {
  res.render('signUp');
})

module.exports = router;
