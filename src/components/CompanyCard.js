import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultLogo from '../default_logo.png';

const CompanyCard = ({ item = {} }) => {
  const { name, description, logo_url, handle } = item;

  return (
    <Link className="Card card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img src={defaultLogo} alt={`${name} Logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;