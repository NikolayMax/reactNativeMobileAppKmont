import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class extends Component {
  render() {
    return (
        <Footer>
            <FooterTab>
                <Button vertical>
                    <Icon name="home" />
                    <Text>Домашняя</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button vertical active>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
            </FooterTab>
        </Footer>
        );
    }

}
