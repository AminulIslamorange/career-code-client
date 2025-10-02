import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const {title,company,_id}=useLoaderData();
   
    return (
        <div>
            <h2 className="text-2xl">{title}</h2>
            <p>{company}</p>
            <Link to={`/jobApply/${_id}`}
            >
            <button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;