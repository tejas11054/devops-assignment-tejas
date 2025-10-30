const http = require('http');

const options = { hostname: 'localhost', port: 3000, path: '/', method: 'GET' };

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log('TEST OK');
    process.exit(0);
  } else {
    console.error('TEST FAIL', res.statusCode);
    process.exit(1);
  }
});

req.on('error', () => { console.error('TEST FAIL - no server'); process.exit(1); });
req.end();