import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const CompanyCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Company Name
        </CardTitle>
        <CardText>
          Company Text
        </CardText>
      </CardBody>
    </Card>
  )
}

export default CompanyCard;