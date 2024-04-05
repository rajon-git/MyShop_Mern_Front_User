import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async()=>{
    const response = await axios.get(`${base_url}product/`);
    if(response.data)
    {
        return response.data;
    }
}

const addToWishlist = async(id)=>{
    const response = await axios.get(`${base_url}product/wishlist`,{id}, config);
    if(response.data)
    {
        return response.data;
    }
}

export const productService = {
    getProducts,
    addToWishlist
}