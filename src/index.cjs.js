const { logA, logB } = require("./commonjs");
logA();
logB();

exports.log = logA;
exports.default = "commonjs";
