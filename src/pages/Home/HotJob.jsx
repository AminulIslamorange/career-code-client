import { use } from "react";
import JobCard from "../shared/JobCard";



const HotJob = ({jobsPromise}) => {
     const jobs = use(jobsPromise);
    
    return (
        <div>
            <h1 className="text-center text-5xl my-8">Hot Jobs Today</h1>
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map(job=><JobCard job={job} key={job._id}></JobCard>)}
            </div>
        </div>
    );
};

export default HotJob;