import "./sign_up_login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import { useNavigate } from "react-router-dom";

import {
  BsFillSuitHeartFill,
  BsFillSaveFill,
  BsFillBellFill,
} from "react-icons/bs";

const SignUp = () => {
  const signupNavigate = useNavigate();
  const loginNavigate = useNavigate();
  //Hooks

  // functions

  return (
    <>
      <Navbar />
      <div className="sign-up-container">
        <div className="sign-up__content-container">
          <form className="sign-up-form">
            <div className="chandanbtn">
              <button onClick={() => signupNavigate("/Signup")}>
                New to Lyst?
              </button>
              <button onClick={() => loginNavigate("/Login")}>
                Already a member
              </button>
            </div>

            <div>
              <h1 className="drj">Search thousands of</h1>
              <h1 className="drj">fashion brands and stores</h1>
              <h1 className="drj">all in one place</h1>
            </div>

            <div>
              <p className="adi">We just need a few details from you first.</p>
            </div>

            {/* <fieldset className="sign-up-form__input-container"> */}

            <div className="rgi">
              <div>
                <label className="rgl" htmlFor="sign-up__email">
                  Name
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                id="sign-up__name"
              />
            </div>
            <div className="rgi">
              <div>
                <label className="rgl" htmlFor="sign-up__email">
                  Mobile Number
                </label>
              </div>
              <input
                type="number"
                placeholder="Enter your contact number"
                id="sign-up__number"
              />
            </div>
            <div className="rgi">
              <div>
                <label className="rgl" htmlFor="sign-up__email">
                  Email Address
                </label>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                id="sign-up__email"
              />
            </div>
            <div className="rgi">
              <div>
                <label className="rgl" htmlFor="sign-up__password">
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="min 8 characters"
                id="sign-up__password"
              />
            </div>
            <div className="rgi">
              <div>
                <label className="rgl" htmlFor="sign-up__confirm-password">
                  Confirm Password
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter the correct password"
                id="sign-up__confirm-password"
              />
            </div>

            <div className="rgc">
              <input type="checkbox" />
              <label>
                {" "}
                I would like to hear about products, services, and sales,
                including personalized email alerts from Lyst. You can
                unsubscribe at any time.
              </label>
            </div>

            <button type="submit" className="sign-up__submit-btn">
              Join Lyst
            </button>

            <div className="tc">
              <p>
                By creating an account, you consent to Lyst’s Terms &
                Conditions. To learn more about how Lyst uses and protects your
                personal data, please read Lyst’s Privacy Policy.
              </p>
            </div>

            {/* </fieldset> */}
          </form>
        </div>

        <div className="right_div">
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
      <Footer />
    </>
  );
};

export default SignUp;
