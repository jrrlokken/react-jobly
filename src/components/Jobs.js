import { useState, useEffect } from 'react';
import CardList from './CardList';
import Search from './Search';
import JoblyAPI from '../JoblyAPI';

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
    <div className="Jobs col-md-8 offset-md-2">
      <Search endpoint="jobs" searchFor={search} />
      <CardList cards={jobs} apply={apply} />
    </div>
  )
}

export default Jobs;