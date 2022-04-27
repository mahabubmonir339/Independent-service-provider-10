import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../FirebaseInit";
import { useNavigate } from "react-router-dom";
import Loading from "../Login/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">OR</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto"
        >

          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
