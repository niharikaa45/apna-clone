import { useParams, Link } from 'react-router-dom';
import jobs from '../data/jobs.json';

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));
  
  // Related jobs = other jobs, excluding current one
  const relatedJobs = jobs.filter(j => j.id !== job.id).slice(0, 3);

  if (!job) return <div className="p-6">Job not found</div>;

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 pb-24">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-gray-600">{job.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Salary</h3>
            <p className="text-gray-600">{job.salary}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">{job.experience}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About Company</h3>
            <p className="text-gray-600">{job.companyInfo}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Related Jobs</h3>
          <div className="grid gap-4">
            {relatedJobs.map(related => (
              <Link 
                key={related.id} 
                to={`/jobs/${related.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <img src={related.logo} alt={related.company} className="w-10 h-10 object-contain" />
                  <div>
                    <h4 className="font-semibold">{related.title}</h4>
                    <p className="text-sm text-gray-600">{related.company} • {related.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={() => alert(`Applied for ${job.title} at ${job.company}!`)}
        className="fixed bottom-0 left-0 right-0 bg-green-600 text-white py-4 text-lg font-semibold hover:bg-green-700 z-20"
      >
        Apply Now
      </button>
      
    </>
  );
}

export default JobDetails;