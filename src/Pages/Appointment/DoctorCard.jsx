import { useState } from "react";
import DoctorDetails from "../../Shared/DoctorDetails";
import Appointment from "../../Shared/Appointment";

export default function DoctorCard({ doctor, department }) {
  const [showModal, setShowModal] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  function handleClick() {
    setShowAppointment(true);
    setShowModal(false);
  }
  return (
    <>
      {showModal && <DoctorDetails setShowModal={setShowModal} doctor={doctor} handleClick={handleClick} />}
      {showAppointment && <Appointment setShowAppointment={setShowAppointment} doctor={doctor} />}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-72 object-fill h-[300px]"
            src={doctor.img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title lg:text-3xl">{doctor.name}</h2>
          <p className="text-accent font-bold">{doctor.degree}</p>
          <p>Department of {doctor.department}</p>
          <p>{doctor.description.slice(0, 100)}</p>
          {department && (<div className="card-actions justify-end">
            <button onClick={()=> setShowModal(true)} className="btn btn-outline btn-primary hover:!text-white">
              Doctor Details
            </button>
            <button onClick={handleClick} className="btn btn-primary text-white">Appointment</button>
          </div>)}
          {!department && (<div className="card-actions justify-end">
            <button className="rounded bg-sky-600 px-4 py-2 text-white transition-all hover:opacity-80">Update</button>
            <button className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80">Delete</button>
          </div>)}
        </div>
      </div>
    </>
  );
}
