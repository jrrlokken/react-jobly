import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from '../JoblyAPI';
import AppAlert from './AppAlert';
import '../styles/Login.css';
import {
  Container,
  FormGroup, 
  Label, 
  Input,
  Button,
  Card,
  CardBody,
  Form
} from 'reactstrap';

const Login = ({ setToken }) => {
  const history = useHistory();
  const [activeView, setActiveView] = useState("login");
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    errors: []
  });

  const setLoginView = () => {
    setActiveView("login");
  }

  const setRegisterView = () => {
    setActiveView("register");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let data;
    let endpoint;

    if (activeView === "register") {
      data = {
        username: loginInfo.username,
        password: loginInfo.password,
        first_name: loginInfo.first_name || undefined,
        last_name: loginInfo.last_name || undefined,
        email: loginInfo.email || undefined
      };
      endpoint = "register";
    } else {
      data = {
        username: loginInfo.username,
        password: loginInfo.password
      };
      endpoint = "login";
    }

    let token;

    try {
      token = await JoblyAPI[endpoint](data);
    } catch(errors) {
      return setLoginInfo(l => ({ ...l, errors }));
    }

    setToken(token);
    history.push("/jobs");
  }
  const handleChange = evt => {
    const { name, value } = evt.target;
    setLoginInfo(l => ({ ...l, [name]: value }));
  }

  let loginActive = activeView === "login";

  const registerFields = (
    <div>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          name="first_name"
          value={loginInfo.first_name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          name="last_name"
          value={loginInfo.last_name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
      </FormGroup>
    </div>
  );

  return (
    <div className="Login">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="d-flex justify-content-end">
          <div className="btn-group">
            <button
              className={`btn btn-primary ${loginActive ? "active" : ""}`}
              onClick={setLoginView}
            >
              Login
            </button>
            <button
              className={`btn btn-primary ${loginActive ? "" : "active"}`}
              onClick={setRegisterView}
            >
              Register
            </button>
          </div>
        </div>
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  name="username"
                  value={loginInfo.username}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                />
              </FormGroup>
              {loginActive ? "" : registerFields}
              {loginInfo.errors.length ? (
                <AppAlert type="danger" messages={loginInfo.errors} />
              ) : null}
              <Button color="primary" className="float-right" onSubmit={handleSubmit}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;