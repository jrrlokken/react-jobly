// import {
//   Button,
//   Card,
//   CardBody,
//   CardTitle,
//   CardText
// } from 'reactstrap';

function JobCard({ item = {}, handleApply }) {
  const { title, salary, equity } = item;

  // return (
  //   <Card>
  //     <CardBody>
  //       <CardTitle className="d-flex justify-content-between">
  //         <span className="text-capitalize">{title}</span>
  //       </CardTitle>
  //       <CardText>
  //         <div>Salary: {salary}</div>
  //         <div>Equity: {equity}</div>
  //       </CardText>
  //       <Button 
  //         color="primary"
  //         className="font-weight-bold text-uppercase float-right"
  //         onClick={handleApply}
  //         disabled={item.state}  
  //       >
  //         {item.state ? "Applied" : "Apply"}
  //       </Button>
  //     </CardBody>
  //   </Card>
  // )

  return (
    <div className="Card card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div>Salary: {salary}</div>
        <div>Equity: {equity}</div>
        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={item.state}
        >
          {item.state ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  )
}

export default JobCard;