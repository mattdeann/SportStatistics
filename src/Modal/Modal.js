import React from 'react';
import './Modal.css';
import { getHomeData, getAwayData } from '../util';

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      homeData: null,
      awayData: null
    }
  }

  componentDidMount() {
    getHomeData(this.props.homeID)
    .then(response => {
      console.log(response)
      this.setState({homeData: response})
    })
    .catch(err => console.log(err))

    getAwayData(this.props.awayID)
    .then(response => {
      console.log(response)
      this.setState({awayData: response})
    })
    .catch(err => console.log(err))
  }
  

  render() {
    if (this.state.homeData && this.state.awayData) {
      return (
        <section className="modal">
          <article className="game-nav">
            <button>
              BACK TO HOME
            </button>
          </article>
          <section className="home">
            <p>{this.state.homeData.team.displayName}</p>
            <p>{this.state.homeData.team.record.items[0].summary}</p>
  
          </section>
          <section className="away">
            <p>{this.state.awayData.team.displayName}</p>
            <p>{this.state.awayData.team.record.items[0].summary}</p>
          </section>
        </section>
      )
    }
    else {
      return (
        <section className="modal">
          <article className="game-nav">
            <button>
              BACK TO HOME
            </button>
          </article>
          <section className="home">
            HOME
  
          </section>
          <section className="away">
            AWAY
          </section>
        </section>
      )
    }
    
  }
}

export default Modal;