import { useContext } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import '../styles/Home.css';

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return(
    <div className="Home">
      <Container className="text-center">
        <h1 className="Home-title mb-5 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one convenient place.</p>
        {currentUser ? (
          <h2 className="text-capitalize">Welcome Back {currentUser.first_name}!</h2>
        ) : (
          <Link className="btn btn-success font-weight-bold" to="/login">Log In</Link>
        )}  
      </Container>
    </div>
  );
}

export default Home;