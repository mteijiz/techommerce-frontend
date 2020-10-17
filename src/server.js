const express = require('express');
const path = require('path');
const app = express();
const dir = path.join(__dirname+'/dist/techommerce-frontend/index.html')
app.use(express.static(dir));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/techommerce-frontend/index.html'));});
app.listen(process.env.PORT || 8080);
