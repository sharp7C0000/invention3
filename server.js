const Hapi = require('hapi');

const isDevelopment = process.env.NODE_ENV == 'development';

if (process.env.NODE_ENV == 'development') {
  console.log("Running at development mode");
}

// Create a server with a host and port
const server = Hapi.server({
  host:'0.0.0.0',
  port: 8000
});

// Start the server
const start = async function() {
  try {

    await server.register(require('h2o2'));
    await server.register(require('inert'));

    // Resources
    if(isDevelopment) {
      server.route({
        method: 'GET',
        path: '/scripts/{param*}',
        handler: {
          proxy: {
            host       : '0.0.0.0',
            port       : '8001',
            protocol   : 'http',
            passThrough: true,
            xforward   : true
          }
        }
      });
    } else {
      server.route({
        method: 'GET',
        path: '/scripts/{param*}',
        handler: {
          directory: {
            path: './dist'
          }
        }
      });
    }

    // Add the route
    if(isDevelopment) {
      server.route({
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
          const res = await server.inject('/scripts/index.html');
          return res.result;
        }
      });
    } else {
      server.route({
        method :'GET',
        path   :'/',
        handler: function (request, h) {
          return h.file('./dist/index.html');
        }
      });
    }

    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();