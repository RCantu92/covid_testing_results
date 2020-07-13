import React, { Component } from 'react';
import { Card, Form, Button, Input, Message, Divider, Grid } from 'semantic-ui-react';
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
        loadingOne: false,
        loadingTwo: false,
        loadingThree: false,
        loadingFour: false
    };

    static async getInitialProps() {
        const contractOwner = await covidTesting.methods.contractOwner().call();
        
        return { contractOwner };
    };
    
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
    };

    onSubmitCivillian = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loadingOne: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            let isCivillianTested = await covidTesting.methods.isCivillianTested(this.state.govntId).call();
            this.setState({ isCivillianTested: isCivillianTested[0] });
            // console.log(this.state.isCivillianTested.toString());
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loadingOne: false });
    };

    onSubmitHealthcareProf = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loadingTwo: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            let isHealthcareProfQualified = await covidTesting.methods.isHealthcareProfQualified(this.state.licenseNum).call();
            this.setState({ isHealthcareProfQualified: isHealthcareProfQualified });
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loadingTwo: false });
    };

    onSubmitAddHealthcareProf = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loadingThree: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await covidTesting.methods.addHealthcareProfessional(this.state.healthcareProfEthAddress, this.state.licenseNum).send({ from: accounts[0] });
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loadingThree: false });
    };

    onSubmitaddTestedCivillian = async (event) => {
        // Browser from trying to
        // submit the form
        event.preventDefault();

        this.setState({ loadingFour: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            await covidTesting.methods.addTestedCivillian(this.state.govntId, this.state.licenseNum, this.state.civillianEthAddress).send({ from: accounts[0] });
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loadingFour: false });
    };

    renderForms() {
        const items = [
            {
                header: <h3>Confirm if civilian has been tested for COVID-19</h3>,
                description: (
                    <Form onSubmit={this.onSubmitCivillian} error={!!this.state.errorMessage} >
                        <Form.Field>
                            <Input
                            placeholder='Search civilian by government Issued ID number'
                            onChange={event => this.setState({ govntId: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header='Error:' content={this.state.errorMessage} />

                        <Button type='submit' loading={this.state.loadingOne}>Search</Button>

                        <Message header='Searched Civilian COVID Tested: ' content={this.state.isCivillianTested.toString()} />
                    </Form>
                )
            },
            {
                header: <h3>Confirm if healthcare professional is qualified for COVID-19 test</h3>,
                description: (
                    <Form onSubmit={this.onSubmitHealthcareProf} error={!!this.state.errorMessage} >
                        <Form.Field>
                            <Input
                            placeholder='Search healthcare professional by license number'
                            onChange={event => this.setState({ licenseNum: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header='Error:' content={this.state.errorMessage} />

                        <Button type='submit' loading={this.state.loadingTwo}>Search</Button>

                        <Message header='Searched Healthcare Professional Qualification: ' content={this.state.isHealthcareProfQualified.toString()} />
                    </Form>
                )
            },
            {
                header: <h3>Add a healthcare professional to be qualified to administer COVID-19 tests</h3>,
                description: (
                    <Form onSubmit={this.onSubmitAddHealthcareProf} error={!!this.state.errorMessage} >
                        <Form.Field>
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

                        <Button type='submit' loading={this.state.loadingThree}>Add</Button>
                    </Form>
                )
            },
            {
                header: <h3>Add a civilian that has had the COVID-19 test</h3>,
                description: (
                    <Form onSubmit={this.onSubmitaddTestedCivillian} error={!!this.state.errorMessage} >
                        <Form.Field>
                            <Input
                            placeholder='Add civilian by government Issued ID number'
                            onChange={event => this.setState({ govntId: event.target.value })}
                            />

                            <Input
                            placeholder='Add license number of healthcare professional administering test'
                            onChange={event => this.setState({ licenseNum: event.target.value })}
                            />

                            <Input
                            placeholder='Add civilian Ethereum address'
                            onChange={event => this.setState({ civillianEthAddress: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header='Error:' content={this.state.errorMessage} />

                        <Button type='submit' loading={this.state.loadingFour}>Add</Button>
                    </Form>
                )
            }
        ];

        return <Card.Group itemsPerRow='2' items={items} />;
    };

    render() {
        return(
            <div>
                <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css' />
                <Grid centered >
                    <Grid.Column centered width='12'>
                        {this.renderContractOwner()}
                    </Grid.Column>
                </Grid>

                <Grid centered >
                    <Grid.Column width='12'>
                        {this.renderForms()}
                    </Grid.Column>
                </Grid>
            </div>
        )
    };
};

export default CovidTesting;