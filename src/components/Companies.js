import { useState, useEffect } from 'react';
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
    <div className="col-md-8 offset-md-2">
      <Search endpoint="companies" searchFor={handleSearch} />
      <CardList cards={companies} />
    </div>
  )
}

export default Companies;