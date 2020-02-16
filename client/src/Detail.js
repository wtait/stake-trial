import React, { Component } from "react";
import MTP from "./contracts/MTP.json";
import getWeb3 from "./getWeb3";

import {
  Container,
  Modal,
  Image,
  Button,
  Header,
  Card,
  Grid,
  Divider
} from "semantic-ui-react";
import Cat from "./assets/kitties.jpg";
import Dapp from "./assets/dapps.jpg";
import MetaMask from "./assets/metamask.png";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { web3: null, accounts: null };
  }

  signIn = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const msgParams = [
      {
        type: "string", // Any valid solidity type
        name: "Message", // Any string label you want
        value: "Hi, Alice!" // The value to sign
      },
      {
        type: "uint32",
        name: "A number",
        value: "1337"
      }
    ]; // Get the current account:web3.eth.getAccounts(function (err, accounts) {  if (!accounts) return  signMsg(msgParams, accounts[0])})
    web3.currentProvider.sendAsync(
      {
        method: "eth_signTypedData",
        params: [msgParams, accounts[0]],
        from: accounts[0]
      },
      function(err, result) {
        if (err) return console.error(err);
        if (result.error) {
          return console.error(result.error.message);
        }
      }
    );
  };

  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        <Container style={{ background: "lightgray", padding: "40px" }}>
          <Image src={this.props.match.params.id == "1" ? Cat : Dapp} />
          <Header
            as="h1"
            content="😻 CryptoCats!"
            style={{ fontSize: "50px" }}
          />
          <p>
            Own adorable digital furry cats, that are breedable, ownable and
            most of all super fun! Just login with your wallet and as soon as
            you sign, you can immediately select your CryptoCat and start
            playing!
          </p>
        </Container>
        <Container style={{ marginTop: "30px" }}>
          <Card.Group itemsPerRow={4}>
            <Card key="1">
              <Image src={Cat} />
              <Card.Content>
                <Card.Header>Denver Dawg</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Modal trigger={<Button color="blue">Sire</Button>}>
                  <Modal.Header>Select a login method</Modal.Header>
                  <Grid centered>
                    <Modal.Content image>
                      <Image wrapped size="small" src={MetaMask} />
                      <Modal.Description>
                        <Button
                          color="blue"
                          content="Login with MetaMask"
                          onClick={this.signIn}
                        />
                        <Divider clearing />
                      </Modal.Description>
                    </Modal.Content>
                  </Grid>
                </Modal>
              </Card.Content>
            </Card>
            <Card key="2">
              <Image src={Cat} />
              <Card.Content>
                <Card.Header>Super KATZ</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button color="blue">Sire</Button>
              </Card.Content>
            </Card>
            <Card key="3">
              <Image src={Cat} />
              <Card.Content>
                <Card.Header>Pity Kitty</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button color="blue">Sire</Button>
              </Card.Content>
            </Card>
            <Card key="4">
              <Image src={Cat} />
              <Card.Content>
                <Card.Header>Demo Kat</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button color="blue">Sire</Button>
              </Card.Content>
            </Card>
            <Card key="5">
              <Image src={Cat} />
              <Card.Content>
                <Card.Header>Slep Kat</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button color="blue">Sire</Button>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Container>
    );
  }
}

export default Detail;
