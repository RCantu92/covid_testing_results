// Load in assert module
const assert = require('assert');
// Load in Ganache CLI
const ganache = require('ganache-cli');
// Load in web3
const Web3 = require('web3');
// Create an instance of web3 that connects
// to the ganache local blockchain 
// and saves it to a variable.
const web3 = new Web3(ganache.provider());

// Import compiled CovidTesting contract
// from it's JSON file.
const compiledCovidTesting = require('../back-end/build/CovidTesting.json');

// Declaring a variable with no value.
let accounts;
let covidTesting;

beforeEach(async () => {
    // Get a list of generated accounts and
    // save to previously declared variable.
    accounts = await web3.eth.getAccounts();

    /**
     * @dev Saving the instance of the deployed contract.
     * @param compiledCovidTesting.interface ABI from compiled
     * CovidTesting contract. Used JSON.parse because
     * .Contract() requires JavaScript object.
     * @param data CovidTesting contract's bytecode.
     * @param from account from which gas is being paid from.
     * @param gas fee paid to the network to run code. Counted in wei.
     */
    covidTesting = await new web3.eth.Contract(JSON.parse(compiledCovidTesting.interface))
        .deploy({ data: compiledCovidTesting.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    await covidTesting.methods.addHealthcareProfessional(accounts[1], 123456).send({ 
        from: accounts[0]
    });
});

describe('COVID Testing', () => {
    // Confirms that the contract can be deployed.
    it('Deploys a factory and a campaign.', () => {
        assert.ok(covidTesting.options.address);
    });

    // Confirms it can save address as the owner of the contract.
    it('Marks caller as the owner of the contract.', async () => {
        const contractOwner = await covidTesting.methods.contractOwner().call();
        assert.equal(accounts[0], contractOwner);
    });

    // Confirms you can add healthcare professionals that
    // can administer tests.
    it('Allows for the addition of qualified healthcare professionals.', async () => {
        const isHealthcareProfQualified = await covidTesting.methods.isHealthcareProfQualified(123456).call();
        assert(isHealthcareProfQualified);
    });

    // Confirms you can add civillians that
    // have had the test administered.
    it('Allows for the addition of a tested civillian.', async () => {
        await covidTesting.methods.addTestedCivillian(33448863, 123456, accounts[2]).send({
            from: accounts[1]
        });
        const isCivillianTested = await covidTesting.methods.isCivillianTested(33448863).call();
        assert(isCivillianTested);
    });
});