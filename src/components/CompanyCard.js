import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultLogo from '../default_logo.png';
import '../styles/CompanyCard.css';

const CompanyCard = ({ item = {} }) => {
  const { name, description, logo_url, handle } = item;
  return (
    <Link to={`/companies/${handle}`}>
      <Card>
        <CardBody>
          <CardTitle className="d-inline-block">
            Company Name
          </CardTitle>
          <CardImg className="CompanyCard-logo d-inline-block" src={logo_url || defaultLogo} />
          <CardText className="d-inline-block">
            Company Description
          </CardText>
        </CardBody>
      </Card>
    </Link>
  )
}

export default CompanyCard;