import React from 'react';
import { Navbar, NavItem, CardPanel, TextInput,Button } from 'react-materialize';

class Update extends React.Component {

    render() {
        return (
            <div>
                <Navbar brand={<a />} centerLogo alignLinks="left">
                    <NavItem href="">
                        <h4 style={{ marginLeft: 600 }}>Crickanadha</h4>
                    </NavItem>
                </Navbar>
                <div style={{ width: 800, padding: 20, marginLeft: 350 }}>
                    <CardPanel className=" z-depth-5">
                        <TextInput label="Today Match Between" />
                        <TextInput label="Scores" />
                        <TextInput label="Who is bowling and What is the over" />
                        <TextInput label="Who is batting and what is the over" />
                        <TextInput label="Over" />
                        <TextInput label="Highlights" />
                        <Button type="submit" waves="light" block>
                            Submit
                        </Button>
                    </CardPanel>
                </div>
            </div>
        );
    }
}

export default Update;
