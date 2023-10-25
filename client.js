const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data from the server and console.log it
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TSP");
    /*conn.write("Move: up");*/
  });

  // handle incoming data from the server and console.log it
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};