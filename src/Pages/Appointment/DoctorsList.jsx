import { useParams } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import DoctorsData from "../../Data/DoctorsData";
import PageHeader from "../../Shared/PageHeader";

export default function DoctorsList() {
  const { department } = useParams();

  const doctors = DoctorsData();
  const doctorList = doctors.filter(
    (doctor) => doctor.department === department
  );

  return (
    <section className="container mx-auto">
      <PageHeader>Choose Doctor</PageHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {doctorList.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} department={department} />
        ))}
      </div>
    </section>
  );
}
