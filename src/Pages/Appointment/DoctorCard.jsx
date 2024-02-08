import { useState } from "react";
import DoctorDetails from "../../Shared/DoctorDetails";

export default function DoctorCard({ doctor }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <DoctorDetails setShowModal={setShowModal} doctor={doctor} />}
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
          <div className="card-actions justify-end">
            <button onClick={()=> setShowModal(true)} className="btn btn-outline btn-primary hover:!text-white">
              Doctor Details
            </button>
            <button className="btn btn-primary text-white">Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
}
