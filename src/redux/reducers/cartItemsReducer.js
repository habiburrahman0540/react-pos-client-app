
export const CartItemsReducer =(state={cartItems:[]},action)=>{
        switch(action.type){
               case "ADD_TO_CART":
                   return {
                       ...state,
                       cartItems:[...state.cartItems,action.payload]
                   }
                case "DELETE_CART_ITEM":
                    return {
                        ...state,
                        cartItems:state.cartItems.filter(item=>item._id !== action.payload._id)
                    }
                case "UPDATE_CART":
                    return{
                        ...state,
                        cartItems:state.cartItems.map(item =>item._id === action.payload._id ? {...item,quantity:action.payload.quantity} : item)

                    }
               default: return state;
        }
}