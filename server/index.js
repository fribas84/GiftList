const express = require('express');
const cors = require("cors");

const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);


const port = 1225;

const app = express();
app.use(cors());
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = merkleTree.getRoot();;


app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const name = body.name;
  console.log("name: ", name);
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);
  console.log("Proof: ",proof);
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  console.log("Verification: ", isInTheList );
  if(isInTheList) {
    res.send({
      result: "true",
      message:"You got a toy robot!",
      proof: JSON.stringify(proof)
    }
      
      
      
    );
  }
  else {
    const correctName = niceList[Math.floor(Math.random()*niceList.length)];
    console.log(correctName);
    res.send({
        result: "false",
        message: "You are not on the list :(  You can try this name: "+  correctName,
        proof: JSON.stringify(proof)
      }
      );
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
