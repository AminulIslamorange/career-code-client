
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
const JobCard = ({job}) => {
    const {title,location,jobType,applicationDeadline,company_logo,company,requirements,description,salaryRange,_id}=job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="flex justify-between">
                <figure>
                <img
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className=" pr-4">
                <p className="text-xl">{company}</p>
                <p className="flex items-center gap-1"><MdLocationPin /> {location}</p>

            </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary:  {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                    requirements.map((skill,index)=><div className="badge badge-outline flex" key={index}>{skill}</div>)
                    }
                    
                </div>
                <div className="card-actions justify-end">
     <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Show Details</button></Link>
    </div>
            </div>
        </div>
    );
};

export default JobCard;