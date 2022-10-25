import axios from "axios";
import Swal from "sweetalert2";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types"

//getState return all store states
export const addToCart = (id,qty) => async (dispatch,getState) =>{
    
    const {data:product} = await axios.get(`/api/products/${id}`);
    // const product = getState().products.products.find(p=>p._id === id)
   
    dispatch({
        type:ADD_TO_CART,
        payload:{...product,qty}
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