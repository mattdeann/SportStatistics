import React from 'react';
import './StatsContainer.css';
import { getTeamsData, getGamesData, getGameData }from '../util';

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

  render() {
    if (this.state.gamesData) {
      return (
        <main className="main">
        <article className="game">
          <section className="home">
            <p>
              {this.state.gamesData.api.games[0].gameId}
            </p>
            <p>
              {this.state.gamesData.api.games[0].hTeam.fullName}
            </p>
            <p>
              RECORD
            </p>
            <p>
              AVG POINTS FOR
            </p>
            <p>
              AVG POINTS AGAINST
            </p>
          </section>
          <section className="away">
            <p>
              {this.state.gamesData.api.games[0].vTeam.fullName}
            </p>
            <p>
              RECORD
            </p>
            <p>
              AVG POINTS FOR
            </p>
            <p>
              AVG POINTS AGAINST
            </p>
          </section>
        </article>
        <article className="game">
          GAME
        </article>
        <article className="game">
          GAME
        </article>
        <article className="game">
          GAME
        </article>
      </main>
    )
  } else {
    return (<p></p>)
  }
  }
}

export default StatsContainer;