import { Container, Text, Content } from 'native-base';
import { Icon } from 'native-base';
import React, { Component } from 'react';

export default class Main extends Component {
    static NavigationOptions = {

    }

    render(){
        return (
            <Container>
                <Text>This text is Main.js</Text>
            </Container>
        )
    }
}
