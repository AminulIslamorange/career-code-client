
import { Suspense } from "react";
import Banner from "./Banner";
import HotJob from "./HotJob";

const Home = () => {
      const jobsPromise = fetch("http://localhost:5000/jobs").then(res => res.json());
    return (
        <div>
            <Banner></Banner>
           <Suspense fallback={'Loading hot jobs'}>
             <HotJob jobsPromise={jobsPromise}></HotJob> 
             </Suspense>
        </div>
    );
};

export default Home;