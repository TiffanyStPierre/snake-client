const net = require("net");
const { connect } = require("./client.js");

const handleUserInput = function (data) {
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();