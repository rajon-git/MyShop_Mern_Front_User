// export const base_url = "http://localhost:4000/api/";

export const base_url = "https://myshop-mern-y1x3.onrender.com/api/";

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
export const getConfig = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};


