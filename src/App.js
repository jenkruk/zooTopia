import React, { Component } from "react";
import Header from "./components/Header"
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import ZooCard from "./components/ZooCard";
import zoo from "./zoo.json";
import zooHeader from "./images/zooHeader.jpg";
import UIfx from "uifx";
import clickSound from "./sounds/click.mp3";
import lostSound from "./sounds/gong.mp3"
import wonSound from "./sounds/win.mp3";
import LostModal from "./components/LostModal";
import WonModal from "./components/WonModal";


const click = new UIfx(
  clickSound,
  {
    volume: 0.4,
    throttleMS: 100
  }
)

const lost = new UIfx(
  lostSound,
  {
    volume: 0.2,
    throttleMS: 100
  }
)

const won = new UIfx(
  wonSound,
  {
    volume: 0.2,
    throttleMS: 100
  }
)

class App extends Component {
  
  // Setting this.state.zoo
  state = {
    zoo: zoo,
    score: 0,
    topScore: 0,
    clicked: [],
    showLostModal: false,
    showWonModal: false
  };

  hideModal = () => {
    this.setState ({showLostModal: false})
    this.setState ({showWonModal: false})
  }


  clickCard=event=>{

    this.shuffleCards();
    var id= event.target.getAttribute("data-id");
    // console.log(id)
    if(this.state.clicked.includes(id)){
      lost.play();
      this.setState({showLostModal: true});
      this.setState({
        clicked: [],
        score:0,
      })
    } else {
      var win = [...this.state.clicked]
      win.push(id)
      if (win.length === 12){
        won.play();
        this.setState({
          showWonModal: true,
          score: 0,
          topScore:this.state.score+1,
          clicked: []
        });
      } else {
      this.setState({
        clicked: win,
        score: this.state.score+1,
        topScore:(this.state.score +1>this.state.topScore) ? this.state.topScore+1 : this.state.topScore
      })
      click.play();
    }
    }
  }

  // Card Shuffle Function
  shuffleCards= ()=>{
    var zooSuits= [...this.state.zoo]
    zooSuits.sort((a,b)=> Math.random()-.5)
    this.setState({
      zoo:zooSuits
    })
  }

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
      <LostModal status={this.state.showLostModal} hideModal={this.hideModal}/>
      <WonModal status={this.state.showWonModal} hideModal={this.hideModal}/>
      </Container>
      </>
    );
  }
}

export default App;
