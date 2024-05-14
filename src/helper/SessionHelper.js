class SessionHelper {
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    removeSession = () => {
        localStorage.clear();
        window.location.href = "/";
      }
      setEmail(email){
        localStorage.setItem("fEmail", email);
      }
      getEmail(){
        return localStorage.getItem("fEmail");
      }
      setOtp(otp){
        localStorage.setItem("otp", otp);
      }
      getOtp(){
        return localStorage.getItem("otp");
      }
}
export const {getUserDetails,setOtp,getOtp,setUserDetails,getEmail,getToken,setToken,removeSession,setEmail}=new SessionHelper();