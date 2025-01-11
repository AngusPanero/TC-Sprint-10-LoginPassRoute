// Snippets de código para poder componer el programa

//Usado?:
  const middlewares = require('./middlewares');
//--- Explicación: 
// IMPORTACION DE MIDDLEWARE
// -------------------------------------------------------------------------------------

//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación:
// ANALIZA EL CUERPO DE LAS SOLICITUDES, COMO POR EJEMPLO UN FORMULARIO
// -------------------------------------------------------------------------------------

//Usado?: 
const session = require('express-session');
//--- Explicación:
// MIDDLEWARE QUE MANEJA SESIONES DE USUARIO
// -------------------------------------------------------------------------------------

//Usado?: 
const express = require('express');
//--- Explicación:
// IMPORTACION DE XPRESS PARA INICIAR APLICACION
//--------------------------------------------------------------------------------------

//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación:
// ANALIZA EL CUERPO DE LAS SOLICITUDES, COMO POR EJEMPLO UN FORMULARIO
// -------------------------------------------------------------------------------------

//Usado?: 
const session = require('express-session');
//--- Explicación:
// MIDDLEWARE QUE MANEJA SESIONES DE USUARIO
// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación:
// PERMITE CARGAR VARIABLES DE ENTONRNO
// -------------------------------------------------------------------------------------

//Usado?: 
const middlewares = require('./middlewares');
//--- Explicación:
// IMPORTACION DE MIDDLEWARE
// -------------------------------------------------------------------------------------

//Usado?: 
const routes = require('./routes');
//--- Explicación:
// IMPORTACION DE ENRUTADOR
// -------------------------------------------------------------------------------------

//Usado?: 
dotenv.config();
//--- Explicación:
// CARGA VARIABLES DE ENTERONO DESDE UN ARCHIVO .ENV
// -------------------------------------------------------------------------------------

//Usado?: 
const app = express();
//--- Explicación:
// INICIALIZACION DE APLICACION
// -------------------------------------------------------------------------------------

//Usado?: 
const PORT = 4000;
//--- Explicación:
// NUMERO DE PUERTO PARA EL SERVIDOR
// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación:
// PERMITE CARGAR VARIABLES DE ENTONRNO
// -------------------------------------------------------------------------------------

//Usado?:
dotenv.config();
//--- Explicación:
// CARGA VARIABLES DE ENTERONO DESDE UN ARCHIVO .ENV
// -------------------------------------------------------------------------------------

//Usado?:
middlewares.setupApp(app);
//--- Explicación: 
// CONFIGURA MIDDLEWARES OERSONALIZADOS EN LA APP
// -------------------------------------------------------------------------------------

//Usado?:
routes.setup(app);
//--- Explicación: 
// CONFIGURA RUTAS ESPECIFICAS DE LA APLICACION
// -------------------------------------------------------------------------------------

//Usado?:
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
// Verifica si el valor de req.body.palabra coincide con una palabra secreta configurada. 

// -------------------------------------------------------------------------------------


//Usado?:
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
// FUNCION QUE RECIVE PARAMETRO APP - COMPRUEBA PALABRA SECRETA SI ES OK REDIRECCIONAA /PROFILE

// -------------------------------------------------------------------------------------


//Usado?:
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
// ENVIA RESPUESTA EN FORMATO HTML

// -------------------------------------------------------------------------------------

//USADO?
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
// CONFIGURA MIDDLEWARE GLOBAL PARA LA APP 
// -------------------------------------------------------------------------------------

//Usado?:
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
// Maneja solicitudes POST enviadas a la ruta /profile.
// -------------------------------------------------------------------------------------

//Usado?:
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
// Activa el análisis de datos codificados en formularios.
// -------------------------------------------------------------------------------------

//Usado?:
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
// Configura las sesiones en la aplicación con una clave secreta y ajustes predeterminados.

// -------------------------------------------------------------------------------------

//Usado?:
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
// ESCUCHA DEL SERVIDOR 
// -------------------------------------------------------------------------------------

//Usado?:
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
// MIDDLEWARE QUE VERIFICA SESION
// -------------------------------------------------------------------------------------


//Usado?:
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
// ENVIA A LA PAGINA DE SESION ACTIVA
// -------------------------------------------------------------------------------------


//Usado?:
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
// CIERRA LA SESION ROMPIENDO LA ACTUAL Y REDIRIGE AL INICIO
// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  setup,
};
//--- Explicación:
// EXPORTACIONES
// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
// EXPORTACIONES
// -------------------------------------------------------------------------------------

