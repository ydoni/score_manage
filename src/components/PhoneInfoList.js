import React, {Component} from 'react';

import PhoneInfo from './PhoneInfo.js';
//리스트를 관리하는 컴포넌트


class PhoneInfoList extends Component {

	render (){

		//물려받은 props값을 저장한다.
		const {data, onRemove, onUpdate} = this.props;
		//App.js에서 설정한 메소드 함수 상속해줘야함

		//chekc the render method... unique "key" props를 확인해라.
		//map 함수를 이용해서 data안에 있는 데이터들을 list라는 배열로 반환한다.
		//각 요소를 출력해주는 PhoneInfo 컴포넌트에 데이터를 전달한다.
		const list = data.map(
			info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />)
			//App.js에서 설정한 메소드 함수 또 그대로 상속해줘야함
		);

		/* 위의 문법과 같은 
		data.map(function(info){
			return 조건;
		})
		*/

		return (

			<div>
				{list}
			</div>
		);

	}



}


export default PhoneInfoList;