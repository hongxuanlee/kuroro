const http = require('http');

class App {
  constructor() {
     this.middleware = []; 

  }

  listen(...args) {
    debug('listen');
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }



}

module.exports = App;
