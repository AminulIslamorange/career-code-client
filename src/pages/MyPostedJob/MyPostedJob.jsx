import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "../MyApplications/MyJobList";
import { jobCreatedByPromise } from "../../api/jobsApi";


const MyPostedJob = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2>MY Posted job list:</h2>
            <Suspense>
                <MyJobList jobCreatedByPromise={jobCreatedByPromise(user.email)}></MyJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;