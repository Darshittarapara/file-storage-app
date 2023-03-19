import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input'
import "../auth.css";
import { useFormik } from "formik";
import { SignInPageSchema } from "utils/Validation";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
import { Strings } from "resource/Strings";
import logo from '../../../assets/image/logo.png';
import Logo from "components/Logo/Logo";
export {
  logo
}
const Login = () => {

  const formilk = useFormik({
    initialValues: {
      password: ""
    },
    validationSchema: SignInPageSchema,
    onSubmit: (formValues) => {
      console.log(formValues)
    }
  });

  return (
    <div className="auth-contain">
      {formilk.errors.password && formilk.touched.password && <ErrorMessage message={formilk.errors.password} />}
      <Logo src={logo} text={Strings.fileStroage} />

      <form onSubmit={formilk.handleSubmit}>
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
        <div className="mt-1">
          <Button disable={!formilk.isValid || !formilk.dirty} type="submit" classes="authButton btn btn-primary">
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
