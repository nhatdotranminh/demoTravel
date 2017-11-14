import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class test extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button block light>
            <Text>Light</Text>
          </Button>
          <Button block>
            <Text>Primary</Text>
          </Button>
          <Button block success>
            <Text>Success</Text>
          </Button>
          <Button block info>
            <Text>Info</Text>
          </Button>
          <Button block warning>
            <Text>Warning</Text>
          </Button>
          <Button block danger>
            <Text>Danger</Text>
          </Button>
          <Button block dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}