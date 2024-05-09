import axios from "axios"
import { base_url, getConfig } from "../../utils/axiosConfig";

const register = async(userData)=>{
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
      }
      
}

const login = async(userData)=>{
    const response = await axios.post(`${base_url}user/login`, userData);
    if(response.data)
    {
        return response.data;
    }
}

const getUserWishlist = async () => {
    try {
        const response = await axios.get(`${base_url}user/wishlist`, {
            headers: {
                Authorization: `Bearer ${
                    localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                    : ""
                }`,
                Accept: "application/json",
            }
        });
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        // Handle errors here
        console.error("Error fetching user wishlist:", error);
        return null;
    }
};


const addToCart = async(cartData)=>{
    const response = await axios.post(`${base_url}user/cart`,cartData, getConfig)
    if(response.data)
    {
        return response.data;
    }
}

const getCart = async()=>{
    const response = await axios.get(`${base_url}user/cart`, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                : ""
            }`,
            Accept: "application/json",
        }
    })
    if(response.data)
    {
        return response.data;
    }
}

const removeProductFromCart = async(cartItemId)=>{
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, getConfig)
    if(response.data)
    {
        return response.data;
    }
}

const updateProductFromCart = async(cartDetail)=>{
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, getConfig)
    if(response.data)
    {
        return response.data;
    }
}

const createOrder = async(orderDetail)=>{
    const response = await axios.post(`${base_url}user/cart/cash-order`,orderDetail, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                : ""
            }`,
            Accept: "application/json",
        }
    })
    if(response.data)
    {
        return response.data;
    }
}

const getUserOrders = async()=>{
    const response = await axios.get(`${base_url}user/getmyorders`, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                : ""
            }`,
            Accept: "application/json",
        }
    })
    if(response.data)
    {
        return response.data;
    }
}

const updateUser = async(data)=>{
    const response = await axios.put(`${base_url}user/edit-user`,data, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                : ""
            }`,
            Accept: "application/json",
        }
    })
    if(response.data)
    {
        return response.data;
    }
}

const forgotPassToken = async(data)=>{
    const response = await axios.post(`${base_url}user/forgot-password-token`,data)
    if(response.data)
    {
        return response.data;
    }
}

const applyCoupon = async(data)=>{
    const response = await axios.post(`${base_url}user/cart/applycoupon`,data,{
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("customer") !== null ? JSON.parse(localStorage.getItem("customer")).token
                : ""
            }`,
            Accept: "application/json",
        }
    })
    if(response.data)
    {
        return response.data;
    }
}

const emptyCart = async(data)=>{
    const response = await axios.delete(`${base_url}user/empty`,getConfig)
    if(response.data)
    {
        return response.data;
    }
}

export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    createOrder,
    getUserOrders,
    updateUser,
    forgotPassToken,
    applyCoupon,
    emptyCart
}