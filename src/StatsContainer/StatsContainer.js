import React from 'react';
import './StatsContainer.css';


class StatsContainer extends React.Component {

  makeGames = () => {
    if (this.props.gamesData.leagues) {
      const games = this.props.gamesData.events.map(game => {
        return (
          <article 
            key={game.id}
            id={game.id} 
            homeid={game.competitions[0].competitors[0].id}
            awayid={game.competitions[0].competitors[1].id}
            className="game"
            onClick={(event) => this.props.handleClick(event)}
          >
            {game.name}
          </article>
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
    if (this.props.gamesData) {
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