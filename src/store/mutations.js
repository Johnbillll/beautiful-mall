import { ADD_COUNTER,ADD_TO_CART} from './mutations-types.js'


export default {
	[ADD_COUNTER](state,payload){
			  payload.count += 1
			  
	},
	[ADD_TO_CART](state,payload){
		payload.checked = true
		state.cartList.push(payload)
		//console.log('加入购物车成功')
	}
}