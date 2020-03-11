import React, {Component} from 'react';

class Form extends Component {

	state = {stu_num:"", stu_name:"", department:"", avg_grade:""}

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
			avg_grade : ""

		})
	}



	render () {
		return (

			<form onSubmit={this.onSubmitValue}>
				<center>
					<div className="uploadbox">
						<input className="inputbox" placeholder="학번 입력" name="stu_num" value={this.state.stu_num} onChange={this.onChangeValue} />
						<input className="inputbox" placeholder="이름 입력" name="stu_name" value={this.state.stu_name} onChange={this.onChangeValue} />
						<input className="inputbox" placeholder="학부 입력" name="department" value={this.state.department} onChange={this.onChangeValue} />
						<input className="inputbox" placeholder="학점 입력" name="avg_grade" value={this.state.avg_grade} onChange={this.onChangeValue} />
						<button className="upload" type="submit">등록하기</button>
					</div>		
				</center>

			</form>

		);
	}
}


export default Form;
