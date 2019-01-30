import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loader type="Puff" color="#3FA9F2" height="90" width="60" />;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        {this.props.error && <h1>{this.props.error}</h1>}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
