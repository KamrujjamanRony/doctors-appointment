import DoctorCard from "../Appointment/DoctorCard";
import DoctorsData from "../../Data/DoctorsData";
import PageHeader from "../../Shared/PageHeader";

export default function AllDoctors() {
  const doctors = DoctorsData();
  return (
    <section className="container mx-auto">
      <PageHeader>All Doctors</PageHeader>
      <div className="flex justify-end my-2">
        <button className="btn btn-primary text-white">Add Doctor</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
