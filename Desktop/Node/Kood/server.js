import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
  res.statusCode = 404;
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
