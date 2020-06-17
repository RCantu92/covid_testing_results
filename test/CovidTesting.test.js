const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// Create an instance of web3 that connects
// to the ganache local blockchain 
// and saves it to a variable.
const web3 = new Web3(ganache.provider());

// Import compiled CovidTesting contract
// from it's JSON file.
const compiledCovidTesting = require('../back-end/build/CovidTesting.json');

// Declaring two variables with no value.
let accounts;
let covidTesting;

// Set up before running any test.
beforeEach( async () => {
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
});

describe('COVID Testing', () => {
    // Confirms that the contract can be deployed.
    it('Deploys a COVID Testing contract', async () => {
        assert.ok(covidTesting.options.address);
    });

    // Confirms it can save address as the owner of the contract.
    it('Verifies caller as the owner of the contract.', async () => {
        const contractOwner = await covidTesting.methods.contractOwner().call();
        assert.equal(accounts[0], contractOwner);
    });

    // Confirms qualified healthcare professionals
    // can be added.
    it('Confirms qualified healthcare professional.', async () => {
        await covidTesting.methods.addHealthcareProfessional(accounts[1], 123456).send({ 
            from: accounts[0]
        });
        const isHealthcareProfQualified = await covidTesting.methods.isHealthcareProfQualified(123456).call();
        assert(isHealthcareProfQualified);
    });

    // Confirms only owner of contract can add
    // qualified healthcare professionals.
    it('Verifies only contract owner can add healthcare professionals.', async () => {
        try {
            await covidTesting.methods.addHealthcareProfessional(accounts[1], 123456).send({ 
                from: accounts[3]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    // End-to-end test to confirm the request
    // process works as a whole.
    it('Allows for the addition of a tested civillian.', async () => {
        await covidTesting.methods.addHealthcareProfessional(accounts[1], 123456).send({ 
            from: accounts[0]
        });
        const isHealthcareProfQualified = await covidTesting.methods.isHealthcareProfQualified(123456).call();
        assert(isHealthcareProfQualified);

        await covidTesting.methods.addTestedCivillian(33448863, 123456, accounts[2]).send({
            from: accounts[1]
        });
        const isCivillianTested = await covidTesting.methods.isCivillianTested(33448863).call();
        assert(isCivillianTested);
    });
});