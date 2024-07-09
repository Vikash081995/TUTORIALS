import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <div>
      <Wrapper>
        <form className="form">
          <Logo />
          <h4>ogin Form </h4>
          <FormRow type="email" name="email" defaultValue="john@gmail.com" />
          <FormRow type="password" name="password" defaultValue="123mail" />
          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <button type="button" className="btn btn-block">
            Explore the App
          </button>
          <p>
            Not a memeber yet ?<Link to="/register">Register</Link>
          </p>
        </form>
      </Wrapper>
    </div>
  );
};

export default Login;
