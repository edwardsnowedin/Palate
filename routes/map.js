// created router object
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('map/index', {
    API_KEY: process.env.API_KEY,
    message: "Start searching now"
  })
})

// router.post('/', (req, res) => {
//   res.render('map/index', {
//     API_KEY: process.env.API_KEY
//   });
// });

module.exports = router;
