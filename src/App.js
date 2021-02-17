import React from 'react';
import './App.css';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import StatsContainer from './StatsContainer/StatsContainer';
import { getGamesData } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gamesData: [],
      modalOpen: false,
      eventID: 0,
      homeID: 0,
      awayID: 0
    }
  }

  componentDidMount() {
    getGamesData()
    .then(response => {
      console.log(response)
      this.setState({gamesData: response})
    })
    .catch(err => console.log(err))
  }

  handleClick = event => {
    console.log(event.target)
    this.setState({
      eventID: event.target.id,
      homeID: event.target.getAttribute("homeid"),
      awayID: event.target.getAttribute("awayid"),
      modalOpen: true
    })
  }

  goBack = () => {
    this.setState({modalOpen: false})
  }

  findHomeID = (id) => {
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.modalOpen
        ? 
        <Modal homeID={this.state.homeID} awayID={this.state.awayID} goBack={this.goBack} /> 
        : 
        <StatsContainer gamesData={this.state.gamesData} handleClick={this.handleClick} />}
      </div>
    )
  }
}

export default App;
