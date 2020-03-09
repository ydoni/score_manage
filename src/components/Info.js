import React, {Component} from 'react';



class Info extends Component {


	//수정 시 input 값을 담을 name, phone 선언
	//상태 모드를 판별하고 기억해줄 editing 선언
	state = {
		editing : false,
		stu_num : "",
		stu_name : "",
		department : "",
		avg_grade : ""
	}


	//삭제버튼
	deleteGrade = () => {
		const {info, onRemove} = this.props;
		//물려받은 onRemove를 호출하며 id값을 파라미터로 넘겨준다.
		//App.js에 생성된 deletePhone 메소드가 해당 id값을 넘겨받아서 filter처리를 하기 위함
		onRemove(info.id);
	}


	//수정버튼
	//true -> false , false -> true
	toggleEditMode = () => {
		const {editing} = this.state;
		this.setState ({ editing : !editing }) //editing 이 false 라면, not false(true) 로 변경 / 현재 상태를 부정해서 반대 상태로 변경		
	}


	onChangeValue = (e) => {
		//[name] : value
		//e.target.name : e.target.value
		const {name, value } = e.target;

		this.setState({
			[name] : value
		})
	}


	//lifecycle 함수 사용
	//render()가 작동된 이후에 실행된다.
	//컴포넌트가 화면에 출력될 때 실행이 되는 생명주기 함수
	//수정버튼이 클릭되면 기존의 값이 input 태그에 표시되고, 수정사항을 적용할 때는 입력된 input값을 부모 컴포넌트에 전달한다.
	componentDidUpdate(prevProps, prevState){
		const {info, onUpdate} = this.props;

		//조건 1 (상황 1 : editing 값이 false로 전환될 때 이 조건에 걸린다) 
		//prevState : 이전의 값 
		if (!prevState.editing && this.state.editing) {
			//이전 editing 값은 false 이면서 동시에 현재 state값은 true일 때
			this.setState({
				stu_num : info.stu_num, stu_name : info.stu_name,
				department : info.department, avg_grade : info.avg_grade
			})
		}

		//조건 2 (상황 2 : editing 값이 true로 전환될 때 이 조건에 걸린다) 
		if (prevState.editing && !this.state.editing) {
			//이전 editing 값은 true 이면서 동시에 현재 state값은 false일 때

			//onUpdate(파라미터1 , 파라미터2); 호출
			onUpdate(info.id , {stu_num : this.state.stu_num, stu_name : this.state.stu_name,
				department : this.state.department, avg_grade : this.state.avg_grade })
		}

		//InfoList 기존 데이터의 껍데기만 가져온 상태에서 Info.js 에 있는 함수에서 수정을 하여 다시 List.js로 보낸다.

	}



	render(){

		
		const {editing} = this.state;

		//수정용 레이아웃
		//state : editing : true 일때 출력하라는 뜻
		//현재 수정모드

		//이 조건이 성립되면 여기서만 return 된다.
		if (editing) {
			return (
				<div className="bigbox">
					<div className="listbox">
						<div>
							<input placeholder="학번 수정" name="stu_num" value ={this.state.stu_num} onChange = {this.onChangeValue}/>						
						</div>
						<div>
							<input placeholder="이름 수정" name="stu_name" value ={this.state.stu_name} onChange={this.onChangeValue}/>
						</div>
						<div>
							<input placeholder="학부 수정" name="department" value ={this.state.department} onChange = {this.onChangeValue}/>						
						</div>
						<div>
							<input placeholder="학점 수정" name="avg_grade" value ={this.state.avg_grade} onChange={this.onChangeValue}/>
						</div>
						<button onClick = {this.toggleEditMode}> 적용 </button>
					</div>
				</div>
			);
		}


		// 일반 리스트 출력용 요소
		const {stu_num, stu_name, department, avg_grade } = this.props.info;
		//오답 ** this.props.info 에서 info 안썼더니 값 안받아와졌음 ㅋㅋ

		return(
			<div className="bigbox">
				<div className="listbox">
					<div>학번 : {stu_num}</div>
					<div>이름 : {stu_name}</div>
					<div>학부 : {department}</div>
					<div>학점 : {avg_grade}</div>
					<div className="edit_container">
						<button className="update buttonbox" onClick={this.toggleEditMode}>수정</button>
						<button className="delete buttonbox" onClick={this.deleteGrade}>삭제</button>
					</div>
				</div>
			</div>

		);
	}

}

export default Info;





