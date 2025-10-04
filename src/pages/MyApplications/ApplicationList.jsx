import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";
//  const myApplicationPromise=email=>{
//     return fetch(`http://localhost:5000/applications?email=${email}`).then(res=>res.json())
// }

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise)
    return (
        <div>
            <h2>Job Applied so far:{applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {applications.map((application,index)=><JobApplicationRow
                       key={application._id}
                       application={application}
                       index={index}></JobApplicationRow>)}
                        
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;