import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import CardList from './CardList';
import Search from './Search';
import JoblyAPI from '../JoblyAPI';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyAPI.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  async function handleSearch(search) {
    let companies = await JoblyAPI.getCompanies(search);
    setCompanies(companies);
  }

  return (
    <Container>
      <Search endpoint="companies" searchFor={handleSearch} />
      <CardList cards={companies} />
    </Container>
  )
}

export default Companies;