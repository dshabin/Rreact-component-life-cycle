import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // These methods are called when an instance of a
  // component is being created and inserted into the DOM
  constructor(props){
    super(props)
    console.log('-->Constructor')
  }

  componentWillMount(){
    console.log('-->Component Will Mount')
  }

  render() {
    console.log('-->Render')
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount(){
    console.log('-->Component Did Mount')
    // Changing some state , to see the results of updating
    // methods, whitout this line the below methods will not be called
    this.setState({});
  }

  // These methods are called when a component is being re-rendered
  // This method should return a boolean value,true or false
  shouldComponentUpdate(){
    console.log('-->Component Should Update')
    return true
  }

  componentWillReceiveProps(){
    console.log('-->Component Will Recieve Props')
  }

  componentWillUpdate(){
    console.log('-->Component Will Update')
  }

  componentDidUpdate(){
    console.log('-->Component Did Update')
  }

  //This funtion will be called before unmounting the component
  componentWillUnmount(){
    console.log('-->Component Will Unmount')
  }

}


export default App;
