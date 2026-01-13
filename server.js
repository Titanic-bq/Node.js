import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.writeHead("200", { "Content-Type": "text/html" });
  res.end("<h1> Hello World </h1>");
});

appendFile.post("/users", () => {});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
