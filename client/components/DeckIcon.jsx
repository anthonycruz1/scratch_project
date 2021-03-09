import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Deck from '../main/Deck.jsx';

class DeckIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <h1>THIS IS AN ICON</h1>
      <div className="singleDeckIcon">
        {/* <div className="quizBtnContainer"> */}
        {/* <button className="singleDeckQuizMeBtn">Quiz me!</button> */}
        {/* </div> */}
        <h1 className="oneDeck">{this.props.topic}</h1>
        <div className="editBtnContainer">
          {/* <Switch>
            <Route path="/deck" exact>
            <Route path="/deck">
              <Deck
                user={this.state.username}
                decks={this.state.decks}
                cards={this.state.mathCards}
              />
            </Route>
            </Route>
          </Switch> */}

          {/* the edit button below is fine */}
          {/* <button 
            className="singleDeckEditBtn"
            topic={this.props.topic}
            // <Link to '/deck/' />
            onClick={(e) => {
              e.preventDefault();
              this.props.editDeck(e);
            }}
            >Edit
          </button> */}
          <Link
            className="singleDeckEditBtn"
            to="/deck"
            style={{ textDecoration: 'none' }}
          >
            <button 
            className="singleDeckEditBtn"
            topic={this.props.topic}
            // <Link to '/deck/' />
            onClick={(e) => {
              e.preventDefault();
              this.props.editDeck(e);
            }}
            >Edit
          </button>
          </Link>


          <button
            className="singleDeckDeleteBtn"
            topic={this.props.topic}
            onClick={(e) => {
              e.preventDefault();
              this.props.deleteDeck(e);
              <Link to="/deck"></Link>
            }}
          >Delete
          </button>



          <Switch>
          <Route path="/deck">
            <Deck
              user={this.props.user} 
              decks={this.props.decks}
              cards={this.props.cards}
            />
          </Route>
        </Switch>

        
        </div>
      </div>
    );
  }
}

export default DeckIcon;
