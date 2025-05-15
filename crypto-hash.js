// crypto is a native module of node.js
const crypto = require("crypto");

// ... spread operator can handle any number of incoming inputs
// combined inputs into a single array
const cryptoHash = (...inputs) => {
  // Create a SHA-256 hash object
  const hash = crypto.createHash("sha256");

  // Sort inputs, join them as a string, and feed them into the hash function
  hash.update(inputs.sort().join(" ")); 

  // Return the resulting hash in hexadecimal format
  return hash.digest("hex");
};

module.exports = cryptoHash;