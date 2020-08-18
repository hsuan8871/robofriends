import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{return response.json();})
      .then(users=>{this.setState({robots:users})});
}



  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value} )
  }

  render(){


    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0){
      return <h1 className='tc'>Loading...</h1>
    }

    return(
      <div className = 'tc'>
        <h1 className= 'f1'>RoboFriend</h1>
        <SearchBar SearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        
      </div>
    );
  }
}

export default App;
