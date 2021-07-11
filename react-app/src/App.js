import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content.js'
import Subject from './components/Subject';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Subject title="WEB" sub = "world wide web!"></Subject>
      <Subject title ="REACT" sub = "For UI"></Subject>
      <TOC></TOC> 
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  } 
}

export default App;
