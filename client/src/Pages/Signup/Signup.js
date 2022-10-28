import "../Login/LoginStyle.css";
import { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    console.log(email, password);
  };
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="field">
          <label htmlFor="">Email :</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="field">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
