import { use } from "react";
import { Link } from "react-router-dom";


const MyJobList = ({ jobCreatedByPromise }) => {
    const jobs = use(jobCreatedByPromise)
    return (
        <div>
            <h2>Job created by me:{jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {jobs.map((job,index)=><tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                        </tr>)}
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobList;