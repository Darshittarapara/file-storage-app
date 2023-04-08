import React, { Fragment, useEffect } from "react";
import { AuthActions } from "redux/AuthSlice/AuthSlice";
import Button from "../../../components/Button/Button";
import Input from 'components/Input/Input';
import { Avatar } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import "./Signup.css";
import "../auth.css";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Strings } from "../../../resource/Strings";
import Logo from "components/Logo/Logo";
import { logo } from "../Login/Login";
import blankProfilePicture from 'assets/image/blank-profile-picture.jpg'
import { SignUpSchema } from "utils/Validation";
import { useDispatch, useSelector } from "react-redux";
import { userSignUpAction } from "redux/AuthSlice/AuthAysncThunk";
import { useNavigate } from "react-router-dom";
export const initalUrl = blankProfilePicture

const SignUp = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.AuthStateData);
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: '',
      confirmPassword: "",
      profilePictureFile: "",
      profilePictureURL: initalUrl
    },
    validationSchema: SignUpSchema,
    onSubmit: async (formValues) => {
      const payload = {
        email: formValues.email,
        password: formValues.password,
        displayName: formValues.userName,
        pictureURL: formValues.profilePictureURL
      }
      dispatch(userSignUpAction(payload)).then((res) => {
        if (res?.payload?.status) {
          navigate('/')
        }
      })
    }
  });
  const { email } = formik.values
  useEffect(() => {
    dispatch(AuthActions.resetErrorState())
  }, [email, dispatch]);

  const createAFileObjectLink = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      formik.setFieldValue('profilePictureURL', e.target.result);
    }
    fileReader.readAsDataURL(file);
  }
  const handlerChange = (e) => {
    const file = e.target.files[0];
    if (!file) return
    createAFileObjectLink(file)
    formik.setFieldValue('profilePictureFile', file);

  }

  const resetImageState = () => {
    formik.setFieldValue('profilePicture', '');
    formik.setFieldValue('profilePictureURL', initalUrl);

  }
  return (
    <Fragment>
      <div className="auth-contain">
        {error ? (
          <ErrorMessage message={error} />
        ) : <>
          {formik.errors.email && formik.touched.email && <ErrorMessage message={formik.errors.email} />}
          {formik.errors.password && formik.touched.password && <ErrorMessage message={formik.errors.password} />}
          {formik.errors.userName && formik.touched.userName && <ErrorMessage message={formik.errors.userName} />}
          {formik.errors.confirmPassword && formik.touched.confirmPassword && <ErrorMessage message={formik.errors.confirmPassword} />}
        </>}

        <Logo src={logo} text={Strings.fileStroage} />
        <form onSubmit={formik.handleSubmit}>
          <div className="image-container">
            <div className="mb-0 mt-4 image-block">
              <label className="form-label image-label" htmlFor="profilePicture">
                <div className="edit-item-container">
                  <EditIcon />
                </div>
                <Avatar
                  alt="Remy Sharp"
                  src={formik.values.profilePictureURL || initalUrl}
                  sx={{ width: 100, height: 100, borderRadius: "0px" }}
                  variant="dot"
                />
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePictureFile"
                accept=".jpg,.png,.jpeg"
                placeholder="profilePicture"
                onChange={(e) => handlerChange(e)}
              />
              <div className="close-item-container" onClick={resetImageState}>
                <CloseIcon />
              </div>
            </div>
          </div>

          <div className="mb-2 mt-2">
            <Input
              type="text"
              name="userName"
              placeholder={Strings.userName}
              formilk={formik}
              value={formik.values.userName}
            />
          </div>

          <div className="mb-2">
            <Input
              type="email"
              name="email"
              formilk={formik}
              value={formik.values.email}
              placeholder={Strings.enterEmail}
            />
          </div>
          <div className="mb-2">
            <Input
              type="password"
              name="password"
              formilk={formik}
              value={formik.values.password}
              placeholder={Strings.enterPin}
            />
          </div>
          <div className="mb-2">
            <Input
              type="password"
              name="confirmPassword"
              formilk={formik}
              value={formik.values.confirmPassword}
              placeholder={Strings.enterConfirmPin}
            />
          </div>
          <div className="mb-2 button-sign-up">
            <Button disable={!formik.isValid || !formik.dirty || isLoading} type="submit" classes="authButton btn btn-primary">
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
