import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(data));

      //update context
      dispatch({type: 'LOGIN', payload:data})
    }
  };

  return {login, error}
};
