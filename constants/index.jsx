import Cookies from "js-cookie";
const headerOptions = {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  customer = Cookies.get("token"),
  baseUrl = "http://localhost:7890",
  prevPath = '/'
  
export {
  headerOptions,
  baseUrl,
  customer,
  prevPath
};
