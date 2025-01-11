const express = require('express');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const routes = require('./routes');
const app = express();
const PORT = 4000;

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
}));

middlewares.setupAPP(app);

routes.setup(app);

app.listen(PORT, () => {
    console.log(`Server Listening on Port http://localhost:${PORT}`)
})