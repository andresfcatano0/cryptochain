const Block = require('./block');

describe("Block", () => {
  const timestamp = "01/01/01";
  const lastHash = "testLastHash";
  const hash = "testHash";
  const data = ["test", "data"];
  const block = new Block({ timestamp, lastHash, hash, data });

  it("has a timestamp, lastHash, hash and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});