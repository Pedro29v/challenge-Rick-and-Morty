import app from "./app.js";

export default function server() {
  app.listen(3001);
  console.log("listen on port", 3001);
}

server();
