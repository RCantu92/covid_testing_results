// Import the web3 module
import Web3 from 'web3';

// Access the instance of web3 provided by Metamask.
// (Implies people have Metamask)
const web3 = new Web3(window.web3.currrentProvider);

// Export instance of web3
export default web3;