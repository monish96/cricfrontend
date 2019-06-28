import React from 'react';
import { Navbar, NavItem, Row, Col, CardPanel, Tabs, Tab, Collapsible, CollapsibleItem } from 'react-materialize';
const axios = require('axios');
class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            Scores: ''
        };
    }

    componentDidMount() {

        // Make a request for a user with a given ID
        axios.get('http://localhost:3001/api/getOneData')
            .then ((response) => {
                // handle success
                alert(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }

    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    
                </header> */}
                <Navbar brand={<a />} centerLogo alignLinks="left">
                    <NavItem href="">
                        <h4 style={{ marginLeft: 600 }}>Crickanadha</h4>
                    </NavItem>
                </Navbar>

                <Row>
                    <Col m={12} s={12}>
                        <CardPanel className=" z-depth-5">
                            <Tabs className="tab-demo" options={{ swipeable: true }}>
                                <Tab title="Scorecard">
                                    <div style={{ marginTop: 80 }}>
                                        <Collapsible popout>
                                            <CollapsibleItem header="Scores">
                                                {this.state.Scores}
                                            </CollapsibleItem>
                                            <CollapsibleItem header="Other Details" >
                                                Yeah, you do seem to have a little 'shit creek' action going.
                                        </CollapsibleItem>
                                            <CollapsibleItem header="Players List" >
                                                You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                                        </CollapsibleItem>
                                        </Collapsible>
                                    </div>
                                </Tab>
                                <Tab title="Highlights">
                                    <div style={{ marginTop: 80 }}>
                                        <Collapsible>
                                            <CollapsibleItem header="Over" >
                                                Yeah, you do seem to have a little 'shit creek' action going.
                                     </CollapsibleItem>
                                        </Collapsible>
                                    </div>
                                </Tab>
                            </Tabs>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;
