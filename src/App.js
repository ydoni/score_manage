import React, {Component} from 'react';

import Form from './components/Form.js';
import Info from './components/Info.js';
import InfoList from './components/InfoList.js';

import './App.css';



class App extends Component{
  
  
 
  //기본 값으로 사용하는 두 개의 객체를 생성한다.

  id=4;

  state = {
    gradelist : [
      {id:0, stu_num : "20170222", stu_name : "김철수", "department" : "산업디자인학부", "avg_grade" : "3.2" },
      {id:1, stu_num : "20170556", stu_name : "박영미", "department" : "국어국문학부", "avg_grade" : "3.9" },
      {id:2, stu_num : "20180899", stu_name : "최미연", "department" : "컴퓨터공학학부", "avg_grade" : "4.2" },
      {id:3, stu_num : "20190777", stu_name : "윤땡땡", "department" : "컴퓨터공학학부", "avg_grade" : "2.1" },
    ]
  }



  getGrade = (data) => {
    console.log(data);

    //기본값이 들어있는 state
    const {gradelist} = this.state;
    //새로 입력받은 값을 추가하기
    //기본값 + 새로 입력받은 값(전달받은 데이터)
    // -> concat()

    this.setState({
      gradelist :gradelist.concat({
        id:this.id++, stu_num:data.stu_num, stu_name:data.stu_name, department:data.department, avg_grade:data.avg_grade})
    });
  }



  //기존 데이터 삭제 메소드
  deleteGrade = (id) => {

    const {gradelist} = this.state;

    this.setState({
      //filter 함수 : return 조건에 부합하는 id값만 filtering해서 새로운 배열로 반환한다.
      // != / !=== // == / === 와 같은 의미
      gradelist : gradelist.filter(info => info.id !== id)
    });

  }


  updateGrade = (id, data) => {

    const {gradelist} = this.state;

    this.setState({
      gradelist : gradelist.map(
        info => id === info.id ? {id:id, stu_num:data.stu_num, stu_name:data.stu_name,
          department:data.department, avg_grade:data.avg_grade} : info)
    });
  }



  render(){
    const {gradelist} = this.state;

    return(
      <div>
        <h1>한국대학교 학점관리시스템</h1>
        <Form number={this.getGrade} />
        <InfoList data={gradelist} onRemove={this.deleteGrade} onUpdate={this.updateGrade}  />
      </div>
    );
  }



}



export default App;
