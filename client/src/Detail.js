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
import Img from "./assets/kitties.jpg";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { web3: null, accounts: null, contract: null };
  }

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
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  render() {
    console.log(this.state.storageValue);

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Container style={{ marginTop: "30px" }}>
        <Container style={{ background: "lightgray", padding: "40px" }}>
          <Header as="h1" content="😻 CryptoCats!" />
          <p>
            Own adorable digital furry cats, that are breedable, ownable and
            most of all super fun! Just login with your wallet and as soon as
            you sign, you can immediately select your CryptoCat and start
            playing!
          </p>
          <Divider clearing />
          <Button color="blue" content="Login with your wallet" />
        </Container>
      </Container>
    );
  }
}

export default Detail;
