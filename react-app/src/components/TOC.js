import { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data1 = this.props.data; //App.js 파일에 TOC component의 props data를 불러옴
        var i = 0;
        while(i < data1.length) {
            lists.push(<li key={data1[i].id}>
              <a href={"/content/"+data1[i].id}
              onClick={function(){
                this.props.onChangePage();
              }.bind(this)}>
                {data1[i].title}</a></li>);
            //key 를 사용하는 이유는 React에서 자동으로 list를 생성할 때, 구분값을 요구하기 떄문
            i = i + 1;
        }
      return (
        <nav>
          <ul>
            {lists}
        </ul>
      </nav>
      );
    }
  }

export default TOC; //외부 사용자가 사용할 수 있게 허용