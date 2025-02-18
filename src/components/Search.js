import { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';
import '../styles/Search.css';

const Search = ({ searchFor }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    searchFor(search);
  }

  const handleChange = evt => {
    setSearch(evt.target.value);
  }

  return (
    <div className="Search mb-4">
      <Form className="form-inline" onSubmit={handleSubmit}>
        <Input
          className="form-control-lg flex-grow-1"
          name="search"
          placeholder="Enter search term..."
          value={search}
          onChange={handleChange}
        />
        <Button
          size="lg" 
          color="success"
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Search;