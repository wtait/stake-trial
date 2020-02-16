import React, { Component } from "react";
import { Link } from "react-router-dom";
import MTP from "./contracts/MTP.json";
import getWeb3 from "./getWeb3";
import {
  Container,
  Divider,
  Image,
  Button,
  Header,
  Card
} from "semantic-ui-react";
import Cat from "./assets/kitties.jpg";
import Dapp from "./assets/dapps.jpg";

class Home extends Component {
  state = { storageValue: [], web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const instance = new web3.eth.Contract(
        MTP.abi,
        "0xE878eC7089824BB1fDf49e87C88bB7a31900220C"
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    const t1 = await contract.methods.tokens(1).call();
    const t2 = await contract.methods.tokens(2).call();
    const t3 = await contract.methods.tokens(3).call();
    const t4 = await contract.methods.tokens(4).call();
    const t5 = await contract.methods.tokens(5).call();
    let res = [];
    res.push(t1);
    res.push(t2);
    res.push(t3);
    res.push(t4);
    res.push(t5);
    // Update state with the result.
    this.setState({ storageValue: res });
  };
  render() {
    console.log(this.state.storageValue);

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Container style={{ marginTop: "30px" }}>
        <Container style={{ background: "lightgray", padding: "40px" }}>
          <Header
            as="h1"
            content="🚀 Supercharge your Dapp Adoption!"
            style={{ fontSize: "50px" }}
          />
          <p>
            StakedTrials! is a novel way to onboard new users by providing them
            with a trial that they just can't refuse. Using Metered Transfer
            Protocol, StakedTrials! enables a way for users to
            "Try-before-you-Buy" by providing a trial that does not require any
            crypto!
          </p>
          <Divider clearing />
          <Button color="blue" content="Learn more about MTP" />
        </Container>
        <Container style={{ marginTop: "30px" }}>
          <Card.Group itemsPerRow={4}>
            {this.state.storageValue.map(item =>
              item.token_id_ == "1" ? (
                <Card key={item.token_Address_}>
                  <Image src={Cat} />
                  <Card.Content>
                    <Card.Header>CryptoCats</Card.Header>
                    <Card.Description>
                      Own adorable digital furry cats, that are breedable,
                      ownable and most of all super fun!
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      as={Link}
                      to={{
                        pathname: `/dapp/${item.token_Address_}`,
                        state: {
                          tokenAddress: item.token_Address_,
                          tokeId: item.token_id_,
                          sender: "0x568f256B011AEa74620d83a330514aDb95618298"
                        }
                      }}
                      color="blue"
                    >
                      Start
                    </Button>
                  </Card.Content>
                </Card>
              ) : (
                <Card key={item.token_Address_}>
                  <Image src={Dapp} />
                  <Card.Content>
                    <Card.Header>{`Dapp ${item.token_id_}`}</Card.Header>
                    <Card.Description>
                      This dapp does awesome stuff. How about starting a trial
                      do learn and get used to doing awesome stuff?!?
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      as={Link}
                      to={{
                        pathname: `/dapp/${item.token_Address_}`,
                        state: {
                          tokenAddress: item.token_Address_,
                          tokeId: item.token_id_,
                          sender: "0x568f256B011AEa74620d83a330514aDb95618298"
                        }
                      }}
                      color="blue"
                    >
                      Start
                    </Button>
                  </Card.Content>
                </Card>
              )
            )}
          </Card.Group>
        </Container>
      </Container>
    );
  }
}

export default Home;
