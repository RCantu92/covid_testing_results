# COVID Testing Results

This project aims to essentially have a database of healthcare professionals qualified to administer COVID-19 tests as well as civilians who have been tested.

Under the hood, how it functions is that the contract creator address is the only one who could submit healthcare professionals as being qualified to administer COVID tests. In practice, the creator address would submit the professionals ethereum address and professional license number. This info could also publicly be viewed by anyone wanting to verify someone is qualified to administer the tests.

Once a healthcare professional has been added as someone that can administer tests, they’re the only one that can add civilians as having been tested. What is provided is the civilian’s ethereum address and government issued ID number (e.g. driver’s license number) and the qualified healthcare professionals license number. This info also can be publicly called by someone wanting to verify someone as having been tested by a professional qualified to administer the tests.

One thing to note, neither professional license number nor civilian’s government issue id number are tied to an individual’s name. Also, as to why this was built on the blockchain is because it provides assurance that the info has not been tampered with.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To begin, first navigate to your desired local directory so you can clone the project repo. Once there, in the terminal, run the following command:

```
git clone https://github.com/RCantu92/covid_testing_results.git
```
Once you have cloned the project repo, run the following command to install all of the necessary dependencies:
```
npm install
```

The dependencies, along with other tools used, are listed under "Built With."

In addition to this, you will also need to install the [MetaMask](https://metamask.io/) browser extension.

## Running the tests

In the home directory, run the following in the command line:

```
npm run test
```
If all the tests are passed, you should an output similar to the following:

![](./images/npm_test_output.png)

## Deployment

To deploy the smart contract onto the Ropsten Ethereum testnet, you would navigate back to the back-end directory and run the following in the command line:

```
node deploy.js
```

Once deployed, you should see message like the following:

![](./images/node_deploy_output.png)

*(Note: This is a different deployed address than the listed at the end of this README.)

To now render a local instance of contract on your browser, navigate to the root directory.

Once inside, run the following in the command line:

```
npm run dev
```

After running the above command, on your web browser navigate to [localhost:3000](http://localhost:3000/). The GIF previously shown demonstrates the process of navigating the decentralized crowd funding app.

Lastly, this contract is deployed on the ropsten testnet under address [0xEE40B0b67c36FfEeFc5fc97eBB6Ca6904D3BB2e7](https://ropsten.etherscan.io/address/0xee40b0b67c36ffeefc5fc97ebb6ca6904d3bb2e7).

## Built With

* [npm](https://www.npmjs.com/) - Package manager for the JavaScript programming language.
* [Solidity, v.0.4.25](https://solidity.readthedocs.io/en/v0.4.25/) - Smart Contract programming language used.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Programming language used.
* [solc, v.0.4.25](https://github.com/ethereum/solc-js) - Module for compiling the Solidity programming language.
* [Mocha](https://mochajs.org/) - JavaScript test framework.
* [Ganache CLI](https://www.npmjs.com/package/ganache-cli) - The command line version of Ganache, your personal blockchain for Ethereum development.
* [web3](https://github.com/ethereum/web3.js/) - This is the Ethereum JavaScript API which connects to the Generic JSON-RPC spec. Used v.1.2.9
* [Assert](https://nodejs.org/api/assert.html) - Module that provides a set of assertion functions for verifying invariants.
* [truffle-hdwallet-provider, v.1.0.35](https://github.com/trufflesuite/truffle-hdwallet-provider) - HD Wallet-enabled Web3 provider. Used to sign transactions for addresses derived from a 12-word mnemonic.
* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Next.js, v.9.4.4](https://nextjs.org/) - React framework.
* [MetaMask](https://metamask.io/) - Browser based wallet used to connect to the Ethereum mainnet as well as testnets.
* [Infura](https://infura.io/) - API used to access the Ethereum and IPFS networks.
* [Semantic UI React](https://react.semantic-ui.com/) - React integration for [Sematic UI](https://semantic-ui.com/).

## Authors

* **Roberto Cantu**  - [GitHub](https://github.com/RCantu92)