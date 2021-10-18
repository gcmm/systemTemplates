const express = require('express');
const path = require('path');
const fs = require('fs');
const env = process.env.npm_package_config_env || 'prod';
const config = require(`../config/config.${env}`);

const router = express.Router();

router.all('/', (req, res) => {
  if (/^\/.*\.(js|css)/.test(req.baseUrl)) {
    const filePath = path.join(__dirname, `../dist${req.baseUrl}`);
    if (!fs.existsSync(filePath)) {
      res.status(404).end();
      return;
    }
    res.sendFile(filePath);
  } else {
    res.render('index.html', { staticHost: `${config.proxy}/public` });
  }
});

module.exports = router;
