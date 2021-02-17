import React from 'react';
import './StatsContainer.css';
import { getGamesData, getGameData }from '../util';

class StatsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // stores team ids and short names and such
      teamsData: null,
      gamesData: null,
      gameData: null
      // 
    }
  }

  componentDidMount() {
    getGamesData()
    .then(response => {
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
    return this.state.gamesData.data.map(game => {
      return (
        <article className="game">
        <section classname="home">
          <p>{game.home_team.id}</p>
          <p>{game.home_team.abbreviation}</p>
          <p>{game.home_team.abbreviation}</p>
          <p>{game.home_team.abbreviation}</p>
        </section>
        <section classname="visitor">
          <p>{game.visitor_team.id}</p>
          <p>{game.visitor_team.abbreviation}</p>
          <p>{game.visitor_team.abbreviation}</p>
          <p>{game.visitor_team.abbreviation}</p>
        </section>
          
        </article>
      )
    })
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