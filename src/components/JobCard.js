import {
  Button,
  Card,
  CardBody,
} from 'reactstrap';

function JobCard({ item = {}, handleApply }) {
  const { title, salary, equity } = item;

  return (
    <Card className="Card">
      <CardBody>
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
        <Button
          color="danger"
          className="font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={item.state}
        >
          {item.state ? "Applied" : "Apply"}
        </Button>
      </CardBody>
    </Card>
  )
}

export default JobCard;