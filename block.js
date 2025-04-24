class Block {
  constructor(timestamp, lastHash, hash, data){
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block("1", "2", "3", "4");
console.log("block1", block1);