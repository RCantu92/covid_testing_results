// Import environmental variables from .env file
require('dotenv').config()
// Load in the hdwallet module
const HDWalletProvider = require('@truffle/hdwallet-provider');
// Load in the web3 module
const Web3 = require('web3');
// Load in compiled COVID Testing
// contract from JSON file.
const compiledCovidTesting = require('./build/CovidTesting.json');

// instantiate new variable of mnemonic phrase to bring in mnemonic
// phrase
const mnemoic = process.env.MNEMONIC;

/**
 * @dev Declaring a new variable instance of HDWalletProvider.
 * @param 'river tag balcony picture boil kind drop pig polar save poem time'
 * which account to use to provide the ether. (NOTE: SAVE THE SEED UNDER A HIDDEN FILE!!!)
 * @param 'https://ropsten.infura.io/v3/491ffd9a994941089a5e348aba1bb061'
 * Specifies which outside node we are going to connect to. (Ethereum-Ropsten)
 */
const provider = new HDWalletProvider(
    mnemoic,
    'https://rinkeby.infura.io/v3/38c9a150380f4b63be2adf7c4c5501bf'
);

/**
 * @dev Declaring a new variable instance of web3.
 * @param provider the account used to fund and the connecting node.
 */
const web3 = new Web3(provider);

/**
 * @dev A function that deploys to the ropsten Ethereum network.
 */
const deploy = async () => {
    // List of all the accounts that have been unlocked by HDWalletProvider.
    const accounts = await web3.eth.getAccounts();

    // Logging the first derived account.
    console.log('Attempting to deploy from account', accounts[0]);

    /**
     * @dev Saving the instance of the deployed contract.
     * @param compiledCovidTesting.interface ABI from compiled
     * COVID Testing contract. Used JSON.parse because
     * Contract() requires JavaScript object.
     * @param data compiled contract's bytecode.
     * @param gas fee paid to the network to run code. Counted in wei.
     * @param from account from which gas is being paid from.
     */
    const result = await new web3.eth.Contract(JSON.parse(compiledCovidTesting.interface))
        .deploy({ data: compiledCovidTesting.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    // Logging the address of the deployed contract.
    console.log('Contract deployed to', result.options.address);
};

// Calling the recently declared function.
deploy();