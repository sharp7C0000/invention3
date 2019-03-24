const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host:'0.0.0.0',
    port: 8000
});

// Start the server
const start = async function() {
  try {

    await server.register(require('inert'));

    // Resources
    server.route({
      method: 'GET',
      path: '/scripts/{param*}',
      handler: {
        directory: {
          path: './dist'
        }
      }
    });
    
    // Add the route
    server.route({
      method :'GET',
      path   :'/',
      handler: function (request, h) {
        return h.file('./dist/index.html');
      }
    });

    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();