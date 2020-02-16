import React, { Component } from "react";
import MTP from "./contracts/MTP.json";
import getWeb3 from "./getWeb3";
import { Container, Header, Card } from "semantic-ui-react";

class App extends Component {
  state = { storageValue: {}, web3: null, accounts: null, contract: null };

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
    const response = await contract.methods.tokens(1).call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };
  render() {
    console.log(this.state.storageValue);

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Container>
          <Header content="kitties" />
          <Card.Group itemsPerRow={5}>
            <Card raised header={this.state.storageValue.token_Address_} />
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
