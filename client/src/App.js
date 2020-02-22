import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import Player from './components/Player';

class App extends React.Component {
  constructor() {
    super(); //
    this.state = { data: [] } //PROPS PASSED THRU .THIS
  }

  componentDidMount() {
    console.log('THIS IS A COMP_DID_MOUNT_TEST'); // <---- CHECK BEFORE CONTINUING !!!!!!
    fetch
      ('http://localhost:5000/api/players') // REQUEST FOR PLAYERS 
      .then(
        res => res.json())
      .then( 
        datas => { this.setState({ data: datas })
        console.log (this.state.data)})
      .catch( 
        err => console.log( err ))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Player/>
        <PlayerList players={this.state.data} />
      </div>
    );
  }
}

export default App;