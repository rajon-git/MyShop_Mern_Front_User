export const base_url = "http://localhost:4000/api/";

export const getTokenFromLocalStorage = () => {
  const customer = localStorage.getItem("customer");
  return customer ? JSON.parse(customer).token : "";
};

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    Accept: "application/json",
  },
};
