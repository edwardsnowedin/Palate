// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('recipeSearch/index', {
    message: 'test'
  })
})


module.exports = router;
