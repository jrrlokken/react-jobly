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
    <Link to={`/companies/${handle}`}>
      <Card>
        <CardBody>
          <CardTitle className="d-flex justify-content-between">
            <span className="text-capitalize">{name}</span>
          </CardTitle>
          <CardImg className="CompanyCard-logo d-inline-block" src={logo_url || defaultLogo} />
          <CardText>
            {description}
          </CardText>
        </CardBody>
      </Card>
    </Link>
  )
}

export default CompanyCard;