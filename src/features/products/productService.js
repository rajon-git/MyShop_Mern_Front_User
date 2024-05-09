import axios from "axios";
import { base_url, getConfig } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.category ? `category=${data?.category}&&` : ""
    }${data?.tags ? `tags=${data?.tags}` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("customer") !== null
            ? JSON.parse(localStorage.getItem("customer")).token
            : ""
        }`,
        Accept: "application/json",
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(
    `${base_url}product/rating`,
    data,
    getConfig
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  getSingleProduct,
  addToWishlist,
  rateProduct,
};
