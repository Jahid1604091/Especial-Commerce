
import Swal from "sweetalert2";
import { ADD_TO_CART, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, CLEAR_CART, REMOVE_FROM_CART } from "../types"
import { axios_instance } from "../utils/axios";

//getState return all store states
export const addToCart = (id,qty) => async (dispatch,getState) =>{
    
    const {data:product} = await axios_instance.get(`/api/products/${id}`);
    // const product = getState().products.products.find(p=>p._id === id)
   
    dispatch({
        type:ADD_TO_CART,
        payload:{...product,product:product._id,qty}
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => async (dispatch,getState) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch({
                type:REMOVE_FROM_CART,
                payload:id
            })
            localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
}

export const clearCart = () => async (dispatch,getState) =>{
    dispatch({
        type:CLEAR_CART,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) =>(dispatch) =>{
  dispatch({
      type:CART_SAVE_SHIPPING_ADDRESS,
      payload:data
  })
  localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod = (data) =>(dispatch) =>{
  dispatch({
      type:CART_SAVE_PAYMENT_METHOD,
      payload:data
  })
  localStorage.setItem('paymentMethod',JSON.stringify(data))
}
