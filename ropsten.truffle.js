require('dotenv').config()

var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = process.env.INFURA_PROJECT_ID; 
var mnemonic = process.env.MNEMONIC;

var CONFIG = {
  networks: {
    development:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey),
      network_id: 3,
      gas: 4500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

module.exports = CONFIG;
