import web3 from './web3.js';
import CovidTesting from './build/CovidTesting.json';

const instance = new web3.eth.Contract(
    JSON.parse(CovidTesting.interface),
    '0xEE40B0b67c36FfEeFc5fc97eBB6Ca6904D3BB2e7'
);

export default instance;