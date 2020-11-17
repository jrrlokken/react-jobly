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
          Job Title
        </CardTitle>
        <CardText>
          Job Description
        </CardText>
        <Button color="primary">
          Apply
        </Button>
      </CardBody>
    </Card>
  )
}

export default JobCard;