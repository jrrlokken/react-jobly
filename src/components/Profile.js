import { useState, useContext, useEffect, useRef } from 'react';
import AppAlert from './AppAlert';
import JoblyAPI from '../JoblyAPI';
import UserContext from '../UserContext';
import defaultAvatar from '../default_avatar.png';
import { 
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button
 } from 'reactstrap';
import '../styles/Profile.css';

const MESSAGE_SHOW_TIME = 3000;

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [userForm, setUserForm] = useState({
    first_name: currentUser.first_name || "",
    last_name: currentUser.last_name || "",
    email: currentUser.email || "",
    photo_url: currentUser.photo_url || "",
    username: currentUser.username,
    password: "",
    errors: [],
    saveConfirmed: false
  });

  const messageShownRef = useRef(false);
  useEffect(
    function() {
      if (userForm.saveConfirmed && !messageShownRef.current) {
        messageShownRef.current = true;
        setTimeout(function() {
          setUserForm(f => ({ ...f, saveConfirmed: false }));
          messageShownRef.current = false;
        }, MESSAGE_SHOW_TIME);
      }
    }, [userForm]
  );

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      let profileData = {
        first_name: userForm.first_name || undefined,
        last_name: userForm.last_name || undefined,
        email: userForm.email || undefined,
        photo_url: userForm.photo_url || undefined,
        password: userForm.password
      };

      let username = userForm.username;
      let updatedUser = await JoblyAPI.saveProfile(username, profileData);
      console.log("Updated user", updatedUser)
      setUserForm(f => ({
        ...f,
        errors: [],
        saveConfirmed: true,
        password: ""
      }));
      setCurrentUser(updatedUser);
    } catch (errors) {
      setUserForm(f => ({ ...f, errors }));
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserForm(f => ({
      ...f,
      [name]: value,
      errors: []
    }));
  }
  
  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      {/* <h3>Profile</h3> */}
      <Card className="Profile">
        <CardBody>
          <CardImg className="float-right" src={currentUser.photo_url || defaultAvatar} />
          <CardTitle tag="h3">
            Profile
          </CardTitle>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <p className="form-control-plaintext">{userForm.username}</p>
            </FormGroup>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                name="first_name"
                value={userForm.first_name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                name="last_name"
                value={userForm.last_name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                value={userForm.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Photo URL</Label>
              <Input
                name="photo_url"
                value={userForm.photo_url}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm password to make changes:</Label>
              <Input
                type="password"
                name="password"
                value={userForm.password}
                onChange={handleChange}
              />
            </FormGroup>

            {userForm.errors.length ? (
              <AppAlert type="danger" messages={userForm.errors} />
            ) : null}

            {userForm.saveConfirmed ? (
              <AppAlert type="success" messages={["User updated successfully."]} />
            ) : null}

            <Button color="primary" block className="mt-4" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Profile;