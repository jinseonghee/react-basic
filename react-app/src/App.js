import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content.js'
import Subject from './components/Subject';


class App extends Component {
  constructor(props) {
    super(props); //Component가 실행될대 Constructor라는 함수가 제일 먼저 실행돼서 초기화 담당
    this.state = { //state를 초기화
      subject: {title : 'WEB', sub : 'World wide web!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
  
  render() {
  return (
    <div className="App">
      <Subject 
      title={this.state.subject.title} //상위 component인 App의 state를 하위 component인 Subject의 props로 준것.
      sub ={this.state.subject.sub}>
      </Subject>
      <Subject title ="REACT" sub = "For UI"></Subject>
      <TOC
      data={this.state.contents}></TOC> 
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  } 
}

export default App;
