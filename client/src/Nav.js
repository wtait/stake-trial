import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Image, Button } from "semantic-ui-react";
import Logo from "./assets/logo.png";

const Nav = () => {
  return (
    <Menu secondary style={{ marginTop: "40px" }}>
      <Container>
        <Menu.Item as="a" href="/" header>
          <Image centered size="large" src={Logo} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Stats</Menu.Item>
          <Menu.Item>MTP</Menu.Item>
          <Menu.Item>
            <Button color="green" content="List your Dapp!" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Nav;
