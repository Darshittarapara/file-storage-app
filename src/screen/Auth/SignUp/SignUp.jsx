import React, { Fragment } from "react";
import Button from "../../../components/Button/Button";
import Input from 'components/Input/Input';
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import "./Signup.css";
import "../auth.css";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Strings } from "../../../resource/Strings";
import Logo from "components/Logo/Logo";
import { logo } from "../Login/Login";
import { SignUpSchema } from "utils/Validation";
import { useDispatch, useSelector } from "react-redux";
import { userSignUpAction } from "redux/AuthSlice/AuthAysncThunk";
import { useNavigate } from "react-router-dom";
export const initalUrl = "https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg"

const SignUp = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.AuthStateData);
  const dispatch = useDispatch()
  const formilk = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: '',
      confirmPassword: ""
    },
    validationSchema: SignUpSchema,
    onSubmit: async (formValues) => {
      const payload = {
        email: formValues.email,
        password: formValues.password,
        displayName: formValues.userName
      }
      dispatch(userSignUpAction(payload)).then((res) => {
        if (res?.payload?.status) {
          navigate('/')
        }
      })
    }
  });


  return (
    <Fragment>
      <div className="auth-contain">
        {error ? (
          <ErrorMessage message={error} />
        ) : <>
          {formilk.errors.email && formilk.touched.email && <ErrorMessage message={formilk.errors.email} />}
          {formilk.errors.password && formilk.touched.password && <ErrorMessage message={formilk.errors.password} />}
          {formilk.errors.userName && formilk.touched.userName && <ErrorMessage message={formilk.errors.userName} />}
          {formilk.errors.confirmPassword && formilk.touched.confirmPassword && <ErrorMessage message={formilk.errors.confirmPassword} />}
        </>}

        <Logo src={logo} text={Strings.fileStroage} />
        <form onSubmit={formilk.handleSubmit}>
          <div className="mb-2 mt-4">
            <Input
              type="text"
              name="userName"
              placeholder={Strings.userName}
              formilk={formilk}
              value={formilk.values.userName}
            />
          </div>

          <div className="mb-2">
            <Input
              type="email"
              name="email"
              formilk={formilk}
              value={formilk.values.email}
              placeholder={Strings.enterEmail}
            />
          </div>
          <div className="mb-2">
            <Input
              type="password"
              name="password"
              formilk={formilk}
              value={formilk.values.password}
              placeholder={Strings.enterPin}
            />
          </div>
          <div className="mb-2">
            <Input
              type="password"
              name="confirmPassword"
              formilk={formilk}
              value={formilk.values.confirmPassword}
              placeholder={Strings.enterConfirmPin}
            />
          </div>
          <div className="mb-2 button-sign-up">
            <Button disable={!formilk.isValid || !formilk.dirty || isLoading} type="submit" classes="authButton btn btn-primary">
              {Strings.register}
            </Button>
          </div>
          <div style={{ textAlign: "center" }}>
            <NavLink to="/login">Already user</NavLink>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
