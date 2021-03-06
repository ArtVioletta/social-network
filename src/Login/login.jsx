import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Components/common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "../../src/Components/common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type={"text"}
          placeholder={"email"}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          type={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
