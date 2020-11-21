import { Link } from 'react-router-dom';
import defaultLogo from '../default_logo.png';
import '../styles/CompanyCard.css';

const CompanyCard = ({ item = {} }) => {
  const { name, description, logo_url, handle } = item;

  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img className="CompanyCard-logo" src={defaultLogo} alt={`${name} Logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;