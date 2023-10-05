const http = require("http");
const fs = require("fs");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/sign-up":
      path += "sign-up.html";
      break;
    case "/login":
      path += "login.html";
      break;
    default:
      path += "index.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
