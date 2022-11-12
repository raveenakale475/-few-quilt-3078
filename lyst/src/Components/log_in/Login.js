import {
  BsFillSuitHeartFill,
  BsFillSaveFill,
  BsFillBellFill,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import styles from "./log_in.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Home/Footer";


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <div className={styles.sign_in_container}>
          <div className="login__content-container">
            <div className={styles.chandanbtnLogin}>
              <button onClick={() => navigate("/Signup")}>New to Lyst?</button>
              <button onClick={() => navigate("/Login")}>
                Already a member
              </button>
            </div>

            <h3 className={styles.popat}>Sign in</h3>
            <form className="login-form">
              <div className={styles.rgil}>
                <div>
                  <label className={styles.rgll} htmlFor="login__email">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="login__email"
                />
              </div>
              <div className={styles.rgil}>
                <div>
                  <label className={styles.rgll} htmlFor="login__password">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="login__password"
                />
              </div>

              <button type="submit" className={styles.rg}>
                Sign In
              </button>

              <p className={styles.prg}>or</p>

              <div className="w-full border border-black text-xl py-2 cursor-pointer">
                <div
                  className="flex items-center justify-center"
                  style={{ border: "0 px solid red", padding: "5px" }}
                >
                  <FcGoogle className="text-3xl" />
                  <p className="pl-4" style={{ marginTop: "-20px" }}>
                    Sign in with Google
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.right_div_login}>
            <div className="dabba">
              <h2>As a Lyst member you can ...</h2>
              <div className="rgr">
                <div>
                  <BsFillSaveFill size={25} />
                </div>
                <div>Save your searches</div>
              </div>
              <div className="rgr">
                <div>
                  <BsFillSuitHeartFill size={25} />
                </div>
                <div>Create a wishlist</div>
              </div>
              <div className="rgr">
                <div>
                  <BsFillBellFill size={25} />
                </div>
                <div>Get alerts on your items</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
