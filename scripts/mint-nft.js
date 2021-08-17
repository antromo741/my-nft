require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
console.log(JSON.stringify(contract.abi));


const contractAddress = "0xd3247e21fb606b8d39199d5be92bba9e9b951a25";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);



