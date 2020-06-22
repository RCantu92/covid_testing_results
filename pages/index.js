import React, { Component } from 'react';
import instance from '../back-end/covidTesting.js';

class CovidTesting extends Component {
    async componentDidMount() {
        const campaigns = await instance.methods.getDeployedCampaigns().call();

        console.log(campaigns);
    }

    render() {
        return <div>
            Covid Testing Index!
        </div>
    }
}

export default CovidTesting;