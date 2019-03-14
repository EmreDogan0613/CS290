var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


//const PORT = process.env.PORT || 5000;

//router.listen(PORT, () => console.log(`Server started on port ${PORT}`));
