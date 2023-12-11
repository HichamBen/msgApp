const { mongo } = require("mongoose");
const fs = require("fs");

function createGridBucket(db, bucketName) {
  return new mongo.GridFSBucket(db, { bucketName });
}

function insertFile(gridFSBucket, filePath, fileName) {
  fs.createReadStream(filePath).pipe(
    gridFSBucket.openUploadStream(fileName, {
      chunksSizeBytes: 1048576,
      metadata: { field: "mime-type", value: "image/jpg" },
    })
  );
}

async function getFiles(gridFSBucket) {
  const cursor = gridFSBucket.find({});
  for await (const doc of cursor) {
    console.log(doc);
  }
}

function deleteFiles(gridFSBucket, fileId) {
  let id = new mongo.ObjectId(fileId);
  console.log(id);
  gridFSBucket.delete(id);
}

function dropGrid(gridFSBucket) {
  gridFSBucket.drop();
}

module.exports = {
  createGridBucket,
  insertFile,
  getFiles,
  deleteFiles,
  dropGrid,
};
