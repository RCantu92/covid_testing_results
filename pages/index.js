import React, { Component } from 'react';
import { Card, Form, Button, Input, Message } from 'semantic-ui-react';
import covidTesting from '../back-end/covidTesting.js';
import web3 from '../back-end/web3.js';

class CovidTesting extends Component {
    state = {
        govntId: "",
        errorMessage: "",
        loading: false
    };

    static async getInitialProps() {
        const contractOwner = await covidTesting.methods.contractOwner().call();
        
        return { contractOwner };
    }

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

        this.setState({ loading: true, errorMessage: "" });

        try {
            const accounts = await web3.eth.getAccounts();
            console.log(await covidTesting.methods.isCivillianTested(this.state.govntId).send({ from: accounts[0] }));
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });


    };

    render() {
        return(
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                {this.renderContractOwner()}

                <Form onSubmit={this.onSubmitCivillian} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <h3>Confirm if civllian has been tested for COVID-19</h3>

                        <Input
                        placeholder="Search by Government Issued ID"
                        onChange={event => this.setState({ govntId: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Error:" content={this.state.errorMessage} />

                    <Button loading={this.state.loading}>Search</Button>
                </Form>
            </div>
        )
    };
};

export default CovidTesting;