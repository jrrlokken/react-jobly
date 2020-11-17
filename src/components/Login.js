import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from '../JoblyAPI';
import {
  Container, FormGroup, Label, Input
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
      return setLoginInfo(l => ({ ...l, [name]: value }));
    }

    let loginActive = activeView === "login";

    const registerFields = (
      <div>
        <FormGroup>
          <Label for="first-name">First Name</Label>
          <Input
            name="first-name"
            value={loginInfo.first_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last-name">Last Name</Label>
          <Input
            name="last-name"
            value={loginInfo.last_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
          />
        </FormGroup>
      </div>
    );
  }

  return (
    <div className="Login">
      <Container>
        
      </Container>
    </div>
    
  )
}

export default Login;