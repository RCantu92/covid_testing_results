// Import the web3 module
import Web3 from 'web3';

// Access the instance of web3 provided by Metamask.
// (Implies people have Metamask)
let web3;

// Conditional that uses the inject web3 from metamask
// under certain conditions. Otherwise, it connects using
// Infura.
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and
    // metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR*
    // the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/491ffd9a994941089a5e348aba1bb061'
    );

    web3 = new Web3(provider);
}

// Export instance of web3
export default web3;