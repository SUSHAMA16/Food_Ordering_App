export const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8085/api/v1/employee/login", {
        email: email,
        password: password,
      });
      const { data } = response;
      if (data.message === "Login Success") {
        localStorage.setItem("accessToken", data.accessToken); // Store access token in local storage
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
  export const isLoggedIn = () => {
    return localStorage.getItem("accessToken") !== null;
  };
  
  export const logout = () => {
    localStorage.removeItem("accessToken");
  };
  