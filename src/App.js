import React, { Component } from "react";
import Header from "./components/Header"
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import ZooCard from "./components/ZooCard";
import zoo from "./zoo.json";
import zooHeader from "./zooHeader.jpg"

class App extends Component {
  // Setting this.state.zoo
  state = {
    zoo: zoo,
    score: 0,
    topScore: 0,
    clicked: []
  };

  clickCard=event=>{
    console.log("You have clicked on a card")
    console.log(event.target)
    this.cardShuffle();
    var id= event.target.getAttribute("data-id");
    console.log(id)
    if(this.state.clicked.includes(id)){
      console.log("Oh-no!  You lost... Try again!")
      alert("Oh-no!  You lost... Try again!")
      this.setState({
        clicked: [],
        score:0,
      })
    }else{
      var copy = [...this.state.clicked]
      copy.push(id)
      if(copy.length === 12){
        console.log("Great job! You won!")
        alert("Great job! You won!")
      }else{
      this.setState({
        clicked: copy,
        score: this.state.score+1,
        topScore:(this.state.score +1>this.state.topScore) ? this.state.topScore+1 : this.state.topScore
      })
    }
    }
  }
  cardShuffle= ()=>{
    var zooSuits= [...this.state.zoo]
    zooSuits.sort((a,b)=> Math.random()-.5)
    this.setState({
      zoo:zooSuits
    })
  }

  // ***************************************************************************** 

  // Map over this.state.zoo and render a ZooCard component for each zoo object
  render() {
    return (
      <>
      <Header backgroundImage={zooHeader}></Header>
      <p className="scoreTitle"> YOUR CURRENT SCORE:
      <span className="score">{this.state.score}</span>
      <span className="topScoreTitle"> YOUR TOP SCORE: </span>
      <span className="topScore">{this.state.topScore}</span>
      </p>
      <Container>
      <Wrapper>
        {this.state.zoo.map(zoo => (
          <ZooCard
          click={this.clickCard}
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
