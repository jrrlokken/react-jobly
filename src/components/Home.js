import { Container, Button } from 'reactstrap';
import '../styles/Home.css';

const Home = () => {
  return(
    <Container className="Home">
      <h1 className="mb-4 font-weight-bold">Jobly</h1>
      <p class="lead">All the jobs in one convenient place.</p>
      <Button color="primary font-weight-bold">Log In</Button>
    </Container>
  )
}

export default Home;