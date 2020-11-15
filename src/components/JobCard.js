import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const JobCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Card Title
        </CardTitle>
        <CardText>
          Card Text
        </CardText>
        <Button color="primary">
          Apply
        </Button>
      </CardBody>
    </Card>
  )
}

export default JobCard;