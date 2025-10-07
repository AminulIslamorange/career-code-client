import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";


const ViewApplications = () => {
    const { job_id } = useParams();
    const applicationData = useLoaderData();
    const handleUpdate=(e,application)=>{
        console.log(e.target.value,application)

        axios(`/`,{status:e.target.value})
        .then(res=>{
            console.log(res.data)
        })

    }
    return (
        <div>
            <h2>{applicationData.length} appication for job:{job_id}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applicationData.map((apply, index) => <tr key={apply._id}>
                                <th>{index + 1}</th>
                                <td>{apply.
                                    applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td><select onChange={e=>handleUpdate(e,application._id)} defaultValue="Pick a color" className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option>pending</option>
                                    <option>interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;