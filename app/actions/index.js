import * as Types from '../constants/ActionsType';
//加一方法
export function increment(){
	return {
		type:Types.INCREMENT_COUNTER
	}
}
//减一方法
export function decrement(){
	return {
		type:Types.DECREMENT_COUNTER
	}
}

export function incrementIfOdd(){
	return (dispatch,getState)=>{
		//获取state对象中的counter属性值
		const {counter} =getState();
	if(counter%2===0){
		return
	}
	dispatch(increment());
}
}

export function incrementAsync(delay=1000){
	return dispatch=>{
		setTimeout(()=>{dispatch(increment())},delay)
	}
}