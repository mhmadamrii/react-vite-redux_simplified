import { connect } from "react-redux";
import Authentication from "./authentication";
import { useCallback, useState } from "react";

const Auth = (props) => {
  const { loginUser } = props;
  const [input, setInput] = useState("");
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    loginUser(input);
  }, [input]);

  return (
    <Authentication
      {...props}
      handleChange={handleChange}
      onLoginUser={handleLogin}
    />
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch({ type: "LOGIN", payload: user }),
  // loginUser: (user) => console.log("user dispatch", user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
