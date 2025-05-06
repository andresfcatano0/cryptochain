// crypto is a native module of node.js
const crypto = require("crypto");

// ... spread operator can handle any number of incoming inputs
// combined inputs into a single array
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");

  hash.update(inputs.sort().join(" "));

  return hash.digest("hex");
};

module.exports = cryptoHash;