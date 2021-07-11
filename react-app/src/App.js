import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content.js'
import Subject from './components/Subject';


class App extends Component {
  constructor(props) {
    super(props); //Component가 실행될대 Constructor라는 함수가 제일 먼저 실행돼서 초기화 담당
    this.state = { //state를 초기화
      mode: 'welcome',
      subject: {title: 'WEB', sub: 'World wide web!'},
      welcome:{title:'Welcome', desc: 'Hello, React!!'}, 
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
  
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  return (
    <div className="App">
      {/* <Subject 
      title={this.state.subject.title} //상위 component인 App의 state를 하위 component인 Subject의 props로 준것.
      sub ={this.state.subject.sub}>
      </Subject> */}
      <header>
        <h1><a href="/" onClick={function(e){{/* react에서는 이벤트 함수가 호출될 때 첫 번째 매개변수의 값으로 event라는 객체를 주입해 주기로 약속돼 있다. */}
          console.log(e);
          e.preventDefault();
        }}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
      </header>
      <Subject title ="REACT" sub = "For UI"></Subject>
      <TOC
      data={this.state.contents}></TOC> 
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  } 
}

export default App;
