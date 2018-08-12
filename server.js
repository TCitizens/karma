const io = require("socket.io")();

io.on("connection", client => {
  client.on("karma-activity", activity => {
    io.emit("karma-activity", activity);
    console.log("Client is subscribing to karma-activity", activity);
  });
});

io.listen(4000);
console.log("started on port 4000");
