import React, {Component} from 'react';

class Form extends Component {

	state = {stu_num:"", stu_name:"", department:"", avg_grade:"", modal:false}

	onChangeValue = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmitValue = (e) => {

		//가장 먼저 실행되는 이벤트인 submit (페이지 이동 및 로드현상) 막아준다.
		e.preventDefault();

		//state값을 부모 컴포넌트인 App.js에 전달한다.
		this.props.number(this.state);
		
		//윗줄에서 부모 컴포넌트에게 값을 전달했으니 초기 상태로 돌려둔다.
		//state를 초기값으로 되돌리기, 값 비우기
		this.setState({
			stu_num : "",
			stu_name : "",
			department : "",
			avg_grade : "",
			modal : this.state.modal

		})
	}

	render () {
		return (
			<div className="col-xs-6 col-sm-6">
			<form className="form-horizontal  " onSubmit={this.onSubmitValue}>				
				<div className="form-group ">
					<h5>학점관리</h5>
					<span>※ 아래 항목을 순서대로 기입하세요.</span><br/>
					<label> 학번 </label>
					<input className="form-control" placeholder="학번 입력 (ex. 20200101)" name="stu_num" value={this.state.stu_num} onChange={this.onChangeValue} />
					<label> 이름 </label>
					<input className="form-control" placeholder="이름 입력 (ex. 홍길동)" name="stu_name" value={this.state.stu_name} onChange={this.onChangeValue} />
					<label> 학부 </label>
					<input className="form-control" placeholder="학부 입력 (ex. 국어국문학부)" name="department" value={this.state.department} onChange={this.onChangeValue} />
					<label> 학점 </label>
					<input className="form-control" placeholder="학점 입력 (ex. 3.0)" name="avg_grade" value={this.state.avg_grade} onChange={this.onChangeValue} />
					<button className=" btn btn-default upload" type="submit">등록하기</button>
  				</div>

			</form>
			</div>

		);
	}
}


export default Form;
