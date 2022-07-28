import React, { Component } from 'react';
import CardList from './components/CardList';
import Navbar from './components/NavBar';
import './App.css';
import 'tachyons';


class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(posts => this.setState({posts: posts}));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Navbar />
        <CardList posts={posts} />
      </div>
    );
  }
}

export default App;
