import http from 'http';

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Pesto Bootcamp!\n');
    res.end();
  } else {
    res.writeHead(404);
    res.write('Error 404!\n');
    res.end();
  }
});

export { httpServer };
