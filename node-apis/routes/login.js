var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


let users = [
  { id: 1, username: 'admin', password: 'Admin@123' },
  { id: 2, username: 'dev', password: 'Dev@123' }
];

router.post('/', (req, res) => {
  const { username, password } = req.body;
  var user = users.find(u => username == u.username && password == u.password);
  if (user) {
    let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 60 })
    res.json({ sucess: true, err: null, token })
  } else
    res.status(401).json({ sucess: false, token: null, err: 'Username or password is incorrect' })
});

module.exports = router;
