// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/index', {
    hello: 'Palate'
  })
})

module.exports = router;
