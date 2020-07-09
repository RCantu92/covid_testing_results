import React, { Component } from 'react';
import { Card, Form, Button, Input, Message } from 'semantic-ui-react';
import covidTesting from '../back-end/covidTesting.js';
import web3 from '../back-end/web3.js';

class CovidTesting extends Component {
    state = {
        govntId: '',
        isCivillianTested: '',
        civillianEthAddress: '',
        licenseNum: '',
        isHealthcareProfQualified: '',
        healthcareProfEthAddress: '',
        errorMessage: '',
        loading: false
    };

    static async getInitialProps() {
        const contractOwner = await covidTesting.methods.contractOwner().call();
        
        return { contractOwner };
    }
    
    // Displays the Ethereum address that
    // owns the overall contract.
    renderContractOwner() {
        const items = [{
            header: 'Contract Owner Address:',
            description: 'Ethereum address of the owner of the contract.',
            meta: this.props.contractOwner,
            fluid: true
        }];

        return <Card.Group items={items} />;
    }

    onSubmitCivillian = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            let isCivillianTested = await covidTesting.methods.isCivillianTested(this.state.govntId).call();
            this.setState({ isCivillianTested: isCivillianTested[0] });
            // console.log(this.state.isCivillianTested.toString());
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    onSubmitHealthcareProf = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            let isHealthcareProfQualified = await covidTesting.methods.isHealthcareProfQualified(this.state.licenseNum).call();
            this.setState({ isHealthcareProfQualified: isHealthcareProfQualified });
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    onSubmitAddHealthcareProf = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await covidTesting.methods.addHealthcareProfessional(this.state.healthcareProfEthAddress, this.state.licenseNum).send({ from: accounts[0] });
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    onSubmitaddTestedCivillian = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            console.log('1');
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            console.log('2');
            await covidTesting.methods.addTestedCivillian(this.state.govntId, this.state.licenseNum, this.state.civillianEthAddress).send({ from: accounts[0] });
            console.log('3');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return(
            <div>
                <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css' />
                {this.renderContractOwner()}

                <Form onSubmit={this.onSubmitCivillian} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Confirm if civllian has been tested for COVID-19</label>

                        <Input
                        placeholder='Search civillian by government Issued ID number'
                        onChange={event => this.setState({ govntId: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header='Error:' content={this.state.errorMessage} />

                    <Button type='submit' loading={this.state.loading}>Search</Button>

                    <Message header='Searched Civillian COVID Tested: ' content={this.state.isCivillianTested.toString()} />
                </Form>

                <Form onSubmit={this.onSubmitHealthcareProf} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Confirm if healthcare professional is qualified for COVID-19 test</label>

                        <Input
                        placeholder='Search healthcare professional by license number'
                        onChange={event => this.setState({ licenseNum: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header='Error:' content={this.state.errorMessage} />

                    <Button type='submit' loading={this.state.loading}>Search</Button>

                    <Message header='Searched Healthcare Professional Qualification: ' content={this.state.isHealthcareProfQualified.toString()} />
                </Form>

                <Form onSubmit={this.onSubmitAddHealthcareProf} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Add a healthcare professional to be qualified to administer COVID-19 tests</label>

                        <Input
                        placeholder='Add healthcare professional Ethereum address'
                        onChange={event => this.setState({ healthcareProfEthAddress: event.target.value })}
                        />

                        <Input
                        placeholder='Add healthcare professional license number'
                        onChange={event => this.setState({ licenseNum: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header='Error:' content={this.state.errorMessage} />

                    <Button type='submit' loading={this.state.loading}>Add</Button>
                </Form>

                <Form onSubmit={this.onSubmitaddTestedCivillian} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Add a civillian that has had the COVID-19 test</label>

                        <Input
                        placeholder='Add civillian by government Issued ID number'
                        onChange={event => this.setState({ govntId: event.target.value })}
                        />

                        <Input
                        placeholder='Add license number of healthcare professional administering test'
                        onChange={event => this.setState({ licenseNum: event.target.value })}
                        />

                        <Input
                        placeholder='Add civillian Ethereum address'
                        onChange={event => this.setState({ civillianEthAddress: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header='Error:' content={this.state.errorMessage} />

                    <Button type='submit' loading={this.state.loading}>Add</Button>
                </Form>
            </div>
        )
    };
};

export default CovidTesting;

/*
Form Outline:

Show owner of contract.

Have option to check if a civillian has been tested for COVID.
    
    Enter civillian government ID number to check whether they have been tested.

Go to page to add a civillian after they've been tested.

Go to page to add a healthcare professional who is qualified to adminsiter COVID tests.
*/