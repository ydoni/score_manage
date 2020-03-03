import React, {Component} from 'react';

import PhoneForm from './components/PhoneForm.js';
import PhoneInfo from './components/PhoneInfo.js';
import PhoneInfoList from './components/PhoneInfoList.js';



class App extends Component{
  
  
 
  //기본 값으로 사용하는 두 개의 객체를 생성한다.

  state = {
    gradelist : [
      {stu_num : "20170222", stu_name : "김철수", "department" : "산업디자인학부", "avg_grade" : "3.2" },
      {stu_num : "20170556", stu_name : "박영미", "department" : "국어국문학부", "avg_grade" : "3.9" },
      {stu_num : "20180899", stu_name : "최미연", "department" : "컴퓨터공학학부", "avg_grade" : "4.2" },
      {stu_num : "20190777", stu_name : "윤땡땡", "department" : "컴퓨터공학학부", "avg_grade" : "2.1" },
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
        stu_num:data.stu_num, stu_name:data.stu_name, department:data.department, avg_grade:data.avg_grade})
    });
  }


  render(){
    const {gradelist} = this.state;

    return(
      <div>
        <PhoneForm number={this.getGrade} />
        <PhoneInfoList data={gradelist}  />
      </div>
    );
  }



}



export default App;
