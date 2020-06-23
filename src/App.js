import React, { Component } from "react";
import Header from "./components/Header"
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import ZooCard from "./components/ZooCard";
import zoo from "./zoo.json";
import zooHeader from "./zooHeader.jpg"

class App extends Component {
  // Setting this.state.zoo to the friends json array
  state = {
    zoo: zoo
  };

  // Map over this.state.zoo and render a ZooCard component for each zoo object
  render() {
    return (
      <>
      <Header backgroundImage={zooHeader}></Header>
      <Container>
      <Wrapper>
        {this.state.zoo.map(zoo => (
          <ZooCard
          id={zoo.id}
          key={zoo.id}
          image={zoo.image}
          />
        ))}
      </Wrapper>
      </Container>
      </>
    );
  }
}

export default App;
