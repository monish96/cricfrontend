import React from 'react';
import { Navbar, NavItem, Row, Col, Card, CardTitle, Button } from 'react-materialize';
import logo from '../images/logo.png'
import logo2 from '../images/swamy 1.png'

class Display extends React.Component {

    componentDidMount() {

    }

    view = () => {
        this.props.history.push('/main')
    }

    update = () => {
        this.props.history.push('/update')
    }
    render() {
        return (
            <div>
                <Navbar brand={<a />} centerLogo alignLinks="left">
                    <NavItem href="" className= "right">
                        Crickanadha
                    </NavItem>
                </Navbar>
                <Row style={{ padding: 80 }}>
                    <Col>
                        <img src={logo2} alt="logo2" style={{ width: 400, height: 400 }} />
                    </Col>
                    <Col s={4}>
                        <Card className="center-align z-depth-5" horizontal header={<CardTitle />}>
                            <span><b>Get Live Scores</b></span>
                            <p><i>Only in Crickanadha</i></p>
                            <hr />
                            <p>
                                <div>
                                    <Button
                                        node="a"
                                        waves="light"
                                        flat
                                        style={{ marginRight: '5px', color : 'Red' }}
                                        onClick = {this.view}
                                    >
                                        View
                                    </Button>
                                </div>
                            </p>
                            <p>
                                <div>
                                    <Button
                                        node="a"
                                        waves="light"
                                        flat
                                        style={{ marginRight: '5px', marginTop: '10px' , color : 'Blue' }}
                                        onClick = {this.update}
                                    >
                                        Update
                                    </Button>
                                </div>
                            </p>
                        </Card>

                    </Col>
                        <Col>
                            <img src={logo} alt="Logo" style={{ width: 400, height: 400 }} />
                        </Col>
                </Row>

            </div>
                );
            }
        }
        
        export default Display;
