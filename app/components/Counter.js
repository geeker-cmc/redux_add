import React,{Component} from 'react';

export default class Counter extends Component{
	render(){
		const {increment,incrementIfOdd,incrementAsync,decrement,counter} =this.props;
		return (
				<p>
					Clicked:{counter} times
					{' '}
					<button onClick={increment}>+</button>
					{' '}
					<button onClick={decrement}>-</button>
					{' '}
					<button onClick={incrementIfOdd}>奇数加一</button>
					{' '}
					<button onClick={()=>incrementAsync()}>延迟加一</button>
				</p>
			)
	}
}