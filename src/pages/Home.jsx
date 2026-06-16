import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import jobs from '../data/jobs.json';

function Home() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('Hyderabad');

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  ).filter(job => 
    location === 'All' || job.location === location
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto p-4">
        
        <div className="bg-white rounded-lg p-2 mb-4 flex items-center gap-2 shadow-sm">
          <span className="text-gray-400 pl-2">🔍</span>
          <input 
            type="text" 
            placeholder="Search for jobs, companies..." 
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button 
            onClick={() => setLocation(location === 'Hyderabad' ? 'All' : 'Hyderabad')}
            className="bg-white border border-gray-300 text-sm px-3 py-1.5 rounded-full"
          >
            📍 {location}
          </button>
        </div>

        <h1 className="text-lg font-bold mb-3">Jobs for you</h1>
        
        {filteredJobs.length > 0 ? filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        )) : <p className="text-gray-500">No jobs found</p>}
        
      </div>
    </div>
  );
}

export default Home;