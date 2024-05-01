export const base_url = "http://localhost:4000/api/";

// export const getTokenFromLocalStorage = () => {
//   const customer = localStorage.getItem("customer");
//   return customer ? JSON.parse(customer).token : null;
// };

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



// export const config = {
//   headers: {
//     Authorization: `Bearer ${getTokenFromLocalStorage()}`,
//     Accept: "application/json",
//   },
// };


