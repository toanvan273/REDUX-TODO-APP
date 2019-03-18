import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TaskBar from './components/Taskbar'
import TaskList from './components/Tasklist'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    );
  }
}

export default App;
