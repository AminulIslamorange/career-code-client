
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const AddJob = () => {
    const { user } = useAuth();

    const handleAddAJOb = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        // process salary Range data
        const data = Object.fromEntries(formData.entries());

        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };
        // process requirement data
        const requirementsString = newJob.requirements;
        const requirementProcess = requirementsString.split(',');
        const requirementClean = requirementProcess.map(req => req.trim());
        newJob.requirements = requirementClean

        // process responsibilities

        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

        newJob.status = 'active'
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New JOb added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="text-center justify-center mx-auto items-center">
            <h2>Add New Job</h2>
            <form onSubmit={handleAddAJOb}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Page details</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input" placeholder="Job role" />

                    <label className="label">Company Name</label>
                    <input type="text" name="company" className="input" placeholder="Compnay Name" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="text" name="company_logo" className="input" placeholder="Compnay logo" />
                </fieldset>


                {/* job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Page details</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-site" value="On_Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                    </div>

                </fieldset>
                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name="category" className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* Application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">ApplicationDeadline</legend>

                    <input type="date" name="deadline" />
                </fieldset>
                {/* Sallary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <label className="label">Min</label>
                    <input type="text" name="min" className="input" placeholder="Minimum Salary" />

                    <label className="label">Max</label>
                    <input type="text" name="max" className="input" placeholder="Maximum Salary" />

                    <label className="label">Currency</label>
                    <select defaultValue="Select a currency" name="currency" className="select">
                        <option disabled={true}>Select a currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EURO</option>
                    </select>
                </fieldset>
                {/* job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea className="textarea" name="description" placeholder="description"></textarea>


                </fieldset>
                {/* job requirement */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">job requirement</legend>
                    <textarea className="textarea" name="requirements" placeholder="requirement"></textarea>


                </fieldset>
                {/* job responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">job responsibilities</legend>
                    <textarea className="textarea" name="responsibilities" placeholder="responsibilities"></textarea>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR related details</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name="hr_name" className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="text" name="hr_email" className="input" defaultValue={user.email} placeholder="Hr Email" />

                    <input type="submit" className="btn btn-primary" value="Add Job" />
                </fieldset>

            </form>
        </div>
    );
};

export default AddJob;