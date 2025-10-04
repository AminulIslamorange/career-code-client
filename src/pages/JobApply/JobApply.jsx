import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    console.log(jobId, user)

    const handleApplyFromSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(github, linkedin, resume);
        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:5000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId ) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h2>Apply for this job <Link to={`/jobs/${jobId}`}>Details</Link>
            </h2>
            <form onSubmit={handleApplyFromSubmit} className="my-12 text-center mx-auto justify-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">Linkedin </label>
                    <input type="url" name="linkedin" className="input" placeholder="Linkedin profile" />

                    <label className="label">Github Link</label>
                    <input type="url" name="github" className="input" placeholder="Github Link" />

                    <label className="label">Resume</label>
                    <input type="url" name="resume" className="input" placeholder="Resume" />
                    <input type="submit" className="btn btn-primary my-4" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;