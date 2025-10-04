import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationApi";

// const myApplicationPromise=email=>{
//     return fetch(`http://localhost:5000/applications?email=${email}`).then(res=>res.json())
// }

const MyApplications = () => {
    const {user}=useAuth();
    return (
        <div>
            <ApplicationStats></ApplicationStats>
           <Suspense fallback={'Loading .......'}>
             <ApplicationList
             myApplicationPromise={myApplicationPromise(user.email)}
             ></ApplicationList>
           </Suspense>
        </div>
    );
};

export default MyApplications;