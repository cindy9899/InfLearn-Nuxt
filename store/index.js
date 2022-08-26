// import axios from "axios";

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
}

// export default actions = {
//   async fetchUser(context) {
//     const response = await axios.get('user/1');
//     context.commit('setUser', response.data);
//   }
// }