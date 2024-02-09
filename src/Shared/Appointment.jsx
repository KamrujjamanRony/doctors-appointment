import { useState } from "react";

export default function Appointment({setShowAppointment, doctor}){
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      appointmentDate: '',
      appointmentTime: '',
      reason: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log(formData);
      // Clear form fields after submission
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        appointmentDate: '',
        appointmentTime: '',
        reason: ''
      });
    };
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#ececec] p-9 max-md:px-4 lg:my-20 lg:p-11 rounded-xl border border-[#FEFBFB]/[36%] max-w-[740px] w-full max-h-[80vh] overflow-y-auto">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Doctor Appointment
        </h2>

        <form onSubmit={handleSubmit} className="bg-[#e3c9f8] p-6 space-y-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Doctor Appointment Form</h2>
      <div>
        <label htmlFor="fullName" className="block font-semibold">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="input" required />
      </div>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <div className="label">
    <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span>
  </div>
</label>
      <div>
        <label htmlFor="email" className="block font-semibold">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input" required />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block font-semibold">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="input" required />
      </div>
      <div>
        <label htmlFor="appointmentDate" className="block font-semibold">Appointment Date:</label>
        <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} className="input" required />
      </div>
      <div>
        <label htmlFor="appointmentTime" className="block font-semibold">Appointment Time:</label>
        <input type="time" id="appointmentTime" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} className="input" required />
      </div>
      <div>
        <label htmlFor="reason" className="block font-semibold">Reason for Appointment:</label>
        <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} className="textarea" rows="4" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

        <div className="mt-16 flex justify-center items-center gap-5 lg:mt-20">
          <button
            type="submit"
            className="rounded bg-primary px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Submit
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => setShowAppointment(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    );
}