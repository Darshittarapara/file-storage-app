import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input'
import "../auth.css";
import { useFormik } from "formik";
import { SignInPageSchema } from "utils/Validation";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
import { Strings } from "resource/Strings";
import logo from '../../../assets/image/logo.png';
import Logo from "components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyAcion, userSignInWithPasswordAction } from "redux/AuthSlice/AuthAysncThunk";
import { useEffect } from "react";
import { AuthActions } from "redux/AuthSlice/AuthSlice";

export {
  logo
}
const Login = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.AuthStateData);
  const dispatch = useDispatch();
  const formilk = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    validationSchema: SignInPageSchema,
    onSubmit: (formValues) => {
      dispatch(userSignInWithPasswordAction(formValues)).then((res) => {
        if (res?.payload?.status) {
          navigate('/')
        }
      })
    }
  });
  const { email, password } = formilk.values
  useEffect(() => {
    dispatch(AuthActions.resetErrorState())
  }, [email, password, dispatch]);

  return (
    <div className="auth-contain">
      {error ? (
        <ErrorMessage message={error} />
      ) : <>
        {formilk.errors.email && formilk.touched.email && <ErrorMessage message={formilk.errors.email} />}
        {formilk.errors.password && formilk.touched.password && <ErrorMessage message={formilk.errors.password} />}
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
          <div className="mb-3">
            <Input
              type="password"
              id="password"
              formilk={formilk}
              name="password"
              className="form-control"
              placeholder={Strings.enterPin}
              value={formilk.values.password}
            />
          </div>
        </div>
        <div className="mt-1">
          <Button disable={!formilk.isValid || !formilk.dirty || isLoading} type="submit" classes="authButton btn btn-primary">
            {false ? <div className="spinner-border" role="status" /> : Strings.logIn}
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <NavLink to="/signUp">Register Here</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
