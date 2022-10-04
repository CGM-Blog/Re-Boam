import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './Todo';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends React.Component{
  constructor(props){
    super (props);
    this.state={item: {id: 0, title:"hello world", done: true}};}
  render(){
    //JSX code
    return(
      <div className='App'>
          <h1> Re-Boam</h1>
          
          <Todo item={this.state.item} />

      </div>
    );
  }
}
export default App;