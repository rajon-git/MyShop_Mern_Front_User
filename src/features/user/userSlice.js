// import { createAsyncThunk, createSlice,createAction } from "@reduxjs/toolkit";
// import { authService } from "./userService";
// import { toast } from "react-toastify";

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.register(userData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.login(userData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const getUserProductWishlist = createAsyncThunk(
//   "user/wishlist",
//   async (thunkAPI) => {
//     try {
//       return await authService.getUserWishlist();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const addProdToCart = createAsyncThunk(
//   "user/cart/add",
//   async (cartData,thunkAPI) => {
//     try {
//       return await authService.addToCart(cartData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const getUserCart = createAsyncThunk(
//   "user/cart/get",
//   async (thunkAPI) => {
//     try {
//       return await authService.getCart();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const deleteUserCart = createAsyncThunk(
//   "user/cart/delete",
//   async (thunkAPI) => {
//     try {
//       return await authService.emptyCart();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const getOrders = createAsyncThunk(
//   "user/order/get",
//   async (thunkAPI) => {
//     try {
//       return await authService.getUserOrders();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const deleteCartProduct = createAsyncThunk(
//   "user/cart/product/delete",
//   async (id,thunkAPI) => {
//     try {
//       return await authService.removeProductFromCart(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const updateCartProduct = createAsyncThunk(
//   "user/cart/product/update",
//   async (cartDetail,thunkAPI) => {
//     try {
//       return await authService.updateProductFromCart(cartDetail);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const createAnOrder = createAsyncThunk(
//   "user/cart/create-order",
//   async (orderDetail,thunkAPI) => {
//     try {
//       return await authService.createOrder(orderDetail);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const updateAUser = createAsyncThunk(
//   "user/profile/update",
//   async (data,thunkAPI) => {
//     try {
//       return await authService.updateUser(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const forgotPasswordToken = createAsyncThunk(
//   "user/password/token",
//   async (data,thunkAPI) => {
//     try {
//       return await authService.forgotPassToken(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const resetPassword = createAsyncThunk(
//   "user/password/reset",
//   async (data,thunkAPI) => {
//     try {
//       return await authService.resetPass(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const couponApply = createAsyncThunk(
//   "user/cart/coupon",
//   async (data,thunkAPI) => {
//     try {
//       return await authService.applyCoupon(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const resetState = createAction("auth/resetState");

// const getTokenFromLocalStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;

// const initialState = {
//   user: getTokenFromLocalStorage,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.createdUser = action.payload;
//         if (state.isSuccess === true) {
//           toast.info("User created successfully");
//         }
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if (state.isError === true) {
//           toast.error(action.payload.response.data.message);
//         }
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         state.message = "success";
//         if (state.isSuccess === true) {
//           localStorage.setItem("customer", JSON.stringify(action.payload));
//           toast.info("User logged in");
//         }
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if (state.isError === true) {
//           toast.error(action.payload.response.data.message);
//         }
//       })
//       .addCase(getUserProductWishlist.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getUserProductWishlist.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.wishlist = action.payload;
//       })
//       .addCase(getUserProductWishlist.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(addProdToCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addProdToCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.cartProduct = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Product Add To Cart")
//         }
//       })
//       .addCase(addProdToCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(getUserCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getUserCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.cartProducts = action.payload;
//       })
//       .addCase(getUserCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(deleteCartProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteCartProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.deleteProduct = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Product Deleted From Cart")
//         }
//       })
//       .addCase(deleteCartProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Product Don't Deleted From Cart")
//         }
//       })
//       .addCase(updateCartProduct.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateCartProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.updateProduct = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Product Quantity Updated")
//         }
//       })
//       .addCase(updateCartProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Product Quantity Isn't Updated")
//         }
//       })
//       .addCase(createAnOrder.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createAnOrder.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.orderProduct = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Ordered Successfully")
//         }
//       })
//       .addCase(createAnOrder.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(!state.isSuccess)
//         {
//           toast("Please fill required options");
//         }
//       })
//       .addCase(getOrders.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getOrders.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.getOrderedProduct = action.payload;
//       })
//       .addCase(getOrders.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(updateAUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateAUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.updateUser = action.payload;
//         if(state.isSuccess === false)
//           {
//             let currentUserData = localStorage.getItem("customer");
//             let newUserData = {
//               _id:currentUserData?._id,
//               token: currentUserData?.token,
//               firstName: action?.payload?.firstName,
//               lastName: action?.payload?.lastName,
//               email: action?.payload?.email,
//               mobile: action?.payload?.email,
//             } 
//             localStorage.setItem("customer",newUserData);
//             state.customer = newUserData;
//             toast("Update Successfully")
//           }
//       })
//       .addCase(updateAUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Something went wrong")
//         }
//       })
//       .addCase(forgotPasswordToken.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(forgotPasswordToken.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.token = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Forgot Password Email Sent Successfully")
//         }
//       })
//       .addCase(forgotPasswordToken.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Something went wrong")
//         }
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(resetPassword.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.password = action.payload;
//         if(state.isSuccess)
//         {
//           toast("Password update Successfully")
//         }
//       })
//       .addCase(resetPassword.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Something went wrong")
//         }
//       })
//       .addCase(couponApply.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(couponApply.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.couponApplied = action.payload;
//       })
//       .addCase(couponApply.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//         if(state.isSuccess === false)
//         {
//           toast("Something went wrong")
//         }
//       })
//       .addCase(deleteUserCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteUserCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.deletedCart = action.payload;
       
//       })
//       .addCase(deleteUserCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(resetState, ()=> initialState);
//   },
// });

// export default authSlice.reducer;


import { createAsyncThunk, createSlice,createAction } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProdToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData,thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async (thunkAPI) => {
    try {
      return await authService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserCart = createAsyncThunk(
  "user/cart/delete",
  async (thunkAPI) => {
    try {
      return await authService.emptyCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "user/order/get",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCartProduct = createAsyncThunk(
  "user/cart/product/delete",
  async (id,thunkAPI) => {
    try {
      return await authService.removeProductFromCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCartProduct = createAsyncThunk(
  "user/cart/product/update",
  async (cartDetail,thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAnOrder = createAsyncThunk(
  "user/cart/create-order",
  async (orderDetail,thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAUser = createAsyncThunk(
  "user/profile/update",
  async (data,thunkAPI) => {
    try {
      return await authService.updateUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgotPasswordToken = createAsyncThunk(
  "user/password/token",
  async (data,thunkAPI) => {
    try {
      return await authService.forgotPassToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/password/reset",
  async (data,thunkAPI) => {
    try {
      return await authService.resetPass(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const couponApply = createAsyncThunk(
  "user/cart/coupon",
  async (data,thunkAPI) => {
    try {
      return await authService.applyCoupon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

// Initial state
const initialState = {
  cartProducts: [],
  couponApplied: null,
  user: getTokenFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    RESET_COUPON_STATE: (state) => {
      state.couponApplied = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User created successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
        if (state.isSuccess === true) {
          localStorage.setItem("customer", JSON.stringify(action.payload));
          toast.info("User logged in");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addProdToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProdToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if(state.isSuccess)
        {
          toast("Product Add To Cart")
        }
      })
      .addCase(addProdToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProducts = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteProduct = action.payload;
        if(state.couponApplied)
          {
            state.couponApplied.totalAfterDiscount = 0;
          }
        if(state.isSuccess)
        {
          toast("Product Deleted From Cart")
        }
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Product Don't Deleted From Cart")
        }
      })
      .addCase(updateCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateProduct = action.payload;
        if(state.couponApplied)
          {
            state.couponApplied.totalAfterDiscount = 0;
          }
        if(state.isSuccess)
        {
          toast("Product Quantity Updated")
        }
      })
      .addCase(updateCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Product Quantity Isn't Updated")
        }
      })
      .addCase(createAnOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAnOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orderProduct = action.payload;
        if(state.couponApplied)
          {
            state.couponApplied.totalAfterDiscount = 0;
          }
        if(state.isSuccess)
        {
          toast("Ordered Successfully")
        }
      })
      .addCase(createAnOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.message || 'Order creation failed';
        toast(state.message);
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getOrderedProduct = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateUser = action.payload;
        if(state.isSuccess === false)
          {
            let currentUserData = localStorage.getItem("customer");
            let newUserData = {
              _id:currentUserData?._id,
              token: currentUserData?.token,
              firstName: action?.payload?.firstName,
              lastName: action?.payload?.lastName,
              email: action?.payload?.email,
              mobile: action?.payload?.email,
            } 
            localStorage.setItem("customer",newUserData);
            state.customer = newUserData;
            toast("Update Successfully")
          }
      })
      .addCase(updateAUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Something went wrong")
        }
      })
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = action.payload;
        if(state.isSuccess)
        {
          toast("Forgot Password Email Sent Successfully")
        }
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Something went wrong")
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.password = action.payload;
        if(state.isSuccess)
        {
          toast("Password update Successfully")
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Something went wrong")
        }
      })
      .addCase(couponApply.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(couponApply.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.couponApplied = action.payload;
      })
      .addCase(couponApply.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false)
        {
          toast("Something went wrong")
        }
      })
      .addCase(deleteUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCart = action.payload;
       
      })
      .addCase(deleteUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export const { RESET_COUPON_STATE } = authSlice.actions;

export default authSlice.reducer;

