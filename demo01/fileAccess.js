const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const filePath = __dirname + '/data.json';

const server = http.createServer((req,res) => {
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    fs.readFile(filePath, 'utf-8', (err, contents)=> {
        if(err !== null)
            console.log('Error 404:Cannot read File');
        else {
            res.writeHeader(200, {'Content-Type': 'json' });
            res.end(contents);
        }  
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });