import { useState, useEffect } from 'react';
import CardList from './CardList';
import Search from './Search';
import JoblyAPI from '../JoblyAPI';
import { Container } from 'reactstrap';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  async function search(search) {
    let jobs = await JoblyAPI.getJobs(search);
    setJobs(jobs);
  }

  useEffect(() => {
    search();
  }, []);

  async function apply(idx) {
    let jobId = jobs[idx].id;
    let message = await JoblyAPI.applyToJob(jobId);
    setJobs(j => j.map(job => job.id === jobId ? { ...job, state: message} : job));
  }

  return (
    <Container className="Jobs">
      <Search endpoint="jobs" searchFor={search} />
      <CardList cards={jobs} apply={apply} />
    </Container>
  )
}

export default Jobs;