// 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Variables
const app = express();

// Path imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

// Server
app.listen(process.env.PORT);
