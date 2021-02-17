import React from 'react';
import './StatsContainer.css';
import { getGamesData, getGameData }from '../util';

class StatsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // stores team ids and short names and such
      gamesData: null,
      // 
    }
  }

  componentDidMount() {
    getGamesData()
    .then(response => {
      console.log(response)
      this.setState({gamesData: response})
    })
    .catch(err => console.log(err))

    // getGameData()
    // .then(response => {
    //   this.setState({gameData: response})
    // })
    // .catch(err => console.log(err))
  }

  makeGames = () => {
    if (this.state.gamesData.leagues) {
      console.log(this.state.gamesData)
      const games = this.state.gamesData.events.map(game => {
        return (
          <article className="game">{game.name}</article>
        )
      })
      return games 
    }
    else {
      return (
        <p></p>
      )
    }
  }

  render() {
    if (this.state.gamesData) {
      return (
        <main className="main">
        {this.makeGames()}
      </main>
    )
  } else {
    return (<p></p>)
  }
  }
}

export default StatsContainer;