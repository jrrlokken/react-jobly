import { useContext } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import '../styles/Home.css';

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return(
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one convenient place.</p>
        {currentUser ? (
          <h2>Welcome Back {currentUser.first_name}!</h2>
        ) : (
          <Link className="btn btn-primary font-weight-bold" to="/login">Log In</Link>
        )}  
      </div>
    </div>
  );
}

export default Home;