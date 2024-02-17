import { useState } from "react";
import { format } from "date-fns";
import { ImCross } from "react-icons/im";

export default function Appointment({ setShowAppointment, doctor }) {
  const [formData, setFormData] = useState({
    yourName: "",
    yourAge: "",
    yourPhone: "",
    yourEmail: "",
    appointmentDate: "",
    appointmentTime: "",
    doctorName: doctor.name,
  });

  // Generate dates for the select options (from today to next 30 days)
  const dates = Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Generate time slots from 9:00 to 21:00
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = (i + 9).toString().padStart(2, '0');
    return `${hour}:00 - ${hour}:59`;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      yourName: "",
      yourAge: "",
      yourPhone: "",
      yourEmail: "",
      appointmentDate: "",
      appointmentTime: "",
      doctorName: doctor.name,
    });
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="rounded-xl max-w-[840px] w-full max-h-[90vh] overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-[#e3c9f8] p-6 space-y-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-center w-full">BOOK AN APPOINTMENT</h2>
            <button
              className="rounded bg-red-600 p-2 w-8 h-8 text-center text-white transition-all hover:opacity-80"
              onClick={() => setShowAppointment(false)}
            >
              <ImCross />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5">
            {/* Your Name Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                your name
              </span>
            </div>
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                your name is required
              </span>
            </div>
          </label>

          {/* Your Age Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                your Age
              </span>
            </div>
            <input
              type="text"
              name="yourAge"
              value={formData.yourAge}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                your Age is required
              </span>
            </div>
          </label>

          {/* Your Phone Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                your Phone
              </span>
            </div>
            <input
              type="text"
              name="yourPhone"
              value={formData.yourPhone}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                your Phone is required
              </span>
            </div>
          </label>

          {/* Your Email Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                your Email
              </span>
            </div>
            <input
              type="text"
              name="yourEmail"
              value={formData.yourEmail}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full input-sm"
            />
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                your Email is required
              </span>
            </div>
          </label>

          {/* Appointment Date Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                Appointment Date:
              </span>
            </div>
            <select
              className="select select-bordered select-sm w-full"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Appointment Date
              </option>
              {dates.map((date) => {
                const dateString = format(date, "yyyy-MM-dd");
                const isPastDate = date < new Date(); // Check if the date is in the past
                return (
                  <option
                    key={dateString}
                    value={dateString}
                    disabled={isPastDate}
                  >
                    {format(date, "d MMMM, yyyy")}
                  </option>
                );
              })}
            </select>
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                Appointment Date is required
              </span>
            </div>
          </label>

          {/* Appointment Time Input */}
          <label className="form-control w-full !mt-0">
            <div className="label !py-0">
              <span className="label-text font-bold capitalize">
                Appointment Time:
              </span>
            </div>
            <select
              className="select select-bordered select-sm w-full"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Time Slot
              </option>
              {timeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
            <div className="label !py-0">
              <span className="label-text-alt text-rose-600 capitalize">
                Appointment Time is required
              </span>
            </div>
          </label>
          </div>

          
          <div className="!mt-2">
          <button
            type="submit"
            className="rounded bg-primary py-1 text-white transition-all hover:opacity-80 w-full"
          >
            Submit Here
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
