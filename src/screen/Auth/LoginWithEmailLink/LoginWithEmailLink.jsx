import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input'
import "../auth.css";
import { useFormik } from "formik";
import { SignInWithEmailPageSchema } from "utils/Validation";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
import { Strings } from "resource/Strings";
import logo from '../../../assets/image/logo.png';
import Logo from "components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyAcion } from "redux/AuthSlice/AuthAysncThunk";
import { useEffect } from "react";
import { AuthActions } from "redux/AuthSlice/AuthSlice";

export {
  logo
}
const LoginWithEmailLink = () => {
  const { isLoading, error } = useSelector((state) => state.AuthStateData);
  const dispatch = useDispatch();
  const formilk = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignInWithEmailPageSchema,
    onSubmit: (formValues) => {
      dispatch(emailVerifyAcion(formValues.email)).then((res) => {
        console.log(res)
      })
    }
  });
  const { email } = formilk.values
  useEffect(() => {
    dispatch(AuthActions.resetErrorState())
  }, [email, dispatch]);

  return (
    <div className="auth-contain">
      {error ? (
        <ErrorMessage message={error} />
      ) : <>
        {formilk.errors.email && formilk.touched.email && <ErrorMessage message={formilk.errors.email} />}
      </>}
      <Logo src={logo} text={Strings.fileStroage} />
      <form onSubmit={formilk.handleSubmit}>
        <div className="mb-3">
          <Input
            type="email"
            id="email"
            formilk={formilk}
            name="email"
            className="form-control"
            placeholder={Strings.enterEmail}
            value={formilk.values.email}
          />
        </div>
        <div className="mt-1">
          <Button disable={!formilk.isValid || !formilk.dirty || isLoading} type="submit" classes="authButton btn btn-primary">
            {false ? <div className="spinner-border" role="status" /> : Strings.logIn}
          </Button>
        </div>
        <div style={{ textAlign: "center", width: "100%", margin: "10px 0px" }}>---OR----</div>

        <div style={{ textAlign: "center" }}>
          <NavLink to="/login">  {Strings.logInWithEmailandPassword}</NavLink>
        </div>
        <div style={{ textAlign: "center" }}>
          <NavLink to="/signUp">Register</NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginWithEmailLink;
