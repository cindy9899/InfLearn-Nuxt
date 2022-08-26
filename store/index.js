// import axios from "axios";
import { fetchCartItems } from "@/api"


// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

// store
export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem){
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}` // 사진 랜덤 출력
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems){
    state.cartItems=cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS] ({commit}) {
    const {data} = await fetchCartItems();
    commit('setCartItems', data)
  }
}

// export default actions = {
//   async fetchUser(context) {
//     const response = await axios.get('user/1');
//     context.commit('setUser', response.data);
//   }
// }