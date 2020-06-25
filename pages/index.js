import React, { Component } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import covidTesting from '../back-end/covidTesting.js';

class CovidTesting extends Component {
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

    render() {
        return(
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                {this.renderContractOwner()}

                <Form>
                    <Form.Field>
                        <label>Confirm if civllian has been tested for COVID-19</label>
                        <input placeholder="Search by Government Issued ID"/>
                    </Form.Field>

                    <Form.Field>
                        <label>Confirm if healthcare professional is qualified to administer COVID-19 tests</label>
                        <input placeholder="Search by Healthcare Professional License Number"/>
                    </Form.Field>

                    <Button>Search</Button>
                </Form>
            </div>
        )
    };
};

export default CovidTesting;