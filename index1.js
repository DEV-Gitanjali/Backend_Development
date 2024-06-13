const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Read the request body
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Parse the request body
                const parsedBody = JSON.parse(body);
                const message = parsedBody.message;

                // Append the message to data.txt
                fs.appendFileSync('data.txt', message + '\n');

                // Read the new content of data.txt and print it to the console
                const data = fs.readFileSync('data.txt', 'utf-8');
                console.log(data);

                // Respond to the client
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Message received and appended to file.\n');
                
            } catch (error) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error processing request.\n');
            }
        });

    } else {
        // Handle non-POST requests
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Only POST requests are allowed.\n');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});