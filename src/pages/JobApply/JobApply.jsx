import { useParams } from "react-router-dom";


const JobApply = () => {
    const {id:jobId}=useParams();
    console.log(jobId)
    return (
        <div>
            <h2>Apply for this job</h2>
        </div>
    );
};

export default JobApply;