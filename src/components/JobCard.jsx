import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="bg-white p-4 mb-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-gray-900">{job.title}</h3>
            <p className="text-gray-700 text-sm mt-1">{job.company}</p>
          </div>
          <img 
            src={job.logo || 'https://via.placeholder.com/40'} 
            alt="logo" 
            className="w-10 h-10 rounded"
          />
        </div>
        
        <div className="flex gap-4 text-sm text-gray-600 mt-3">
          <span>📍 {job.location}</span>
          <span>💰 {job.salary}</span>
        </div>

        <div className="flex gap-2 mt-3">
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {job.type}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {job.shift}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;