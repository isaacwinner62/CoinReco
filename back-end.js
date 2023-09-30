const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
 

  let path = "./";
  switch (req.url) {
    case "/":
      path += "crypto-inves.html";
      break;
    case "/sign-up":
      path += "sign-up.html";
      break;
    default:
      path += "crypto-inves.html";
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

server.listen(3000, "localhost", () => {
  console.log("listing for request on port 3000");
  
});
