// Import the http module
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

// Define the port number where the server will listen
const port = process.env.PORT || 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Check if the request is for the /data route
  if (req.url === "/companies") {
    // Set the content type to application/json
    res.writeHead(200, { "Content-Type": "application/json" });

    // Read the data.json file
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
    const filePath = path.join(__dirname, "data.json");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Send a 500 error if there's an issue reading the file
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading data.json file");
      } else {
        // Send the content of data.json
        res.end(data);
      }
    });
  } else {
    // For other routes, send a 404 response
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// Make the server listen on the defined port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
