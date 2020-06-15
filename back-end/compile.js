// Load in the path module
const path = require('path');
// Load in the solidity compiler module
const solc = require('solc');
// Load in the file system module
const fs = require('fs-extra');

/**
 * @dev Creating a variable to store the file path to the
 * 'build' directory from the home directory.
 * @param __dirname node defined constant set to current working
 * directory.
 * @param '../build' is the 'to' directory.
 */
const buildPath = path.resolve(__dirname, './build');
// Delete the 'build' folder and all of its contents.
fs.removeSync(buildPath);

/**
 * @dev Creating a variable to store the file path to the
 * 'COVID Testing' contract directory from the home directory.
 * Then telling it to go to the 'contracts' folder then
 * read 'CovidTesting.sol'.
 * @param __dirname node defined constant set to current working
 * directory.
 * @param '../contracts' is the 'to' directory.
 * @param 'CovidTesting.sol'' is the 'to' file.
 */
const covidTestingPath = path.resolve(__dirname, './contracts', 'CovidTesting.sol');
/**
 * @dev Creating a variable to store the contents of a file.
 * @param covidTestingPath variable storing the file path to desired file.
 * @param 'utf8' the encoding.
 */
const source = fs.readFileSync(covidTestingPath, 'utf8');
/**
 * @dev Export the 'COVID Testing' contents of the solidity compiler output.
 * @param source variable storing the desired file contents.
 * @param '1' number of contracts attempting to compile.
 */
const output = solc.compile(source, 1).contracts;
// console.log(output);

// Rebuilding 'build' folder that was previously deleted.
fs.ensureDirSync(buildPath);


// create a new JSON file for the
// contract in the CovidTesting.sol file.
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}