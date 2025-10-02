
import { MdLocationPin } from "react-icons/md";
const JobCard = ({job}) => {
    const {title,location,jobType,applicationDeadline,salaryRange,company_logo,company,requirements}=job;
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
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;