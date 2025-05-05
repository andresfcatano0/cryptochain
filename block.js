const { GENESIS_DATA } = require('./config');

class Block {
  constructor({ timestamp, lastHash, hash, data }){
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // genesis() static function is a factory method. 
  // Factory methods create instances of a class wihtout using constructor
  static genesis() {
    // This refers to the Block class
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    return new this({
      timestamp: Date.now(),
      lastHash: lastBlock.hash,
      data
    });
  }
}

module.exports = Block;