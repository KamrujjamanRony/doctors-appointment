import { useParams } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { FaLaptopMedical } from "react-icons/fa";

export default function DoctorsList() {
  const { department } = useParams();

  const doctors = [
    {
      id: crypto.randomUUID(),
      name: "Steve Jobs",
      department: "cardiology",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1704797490.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Bill Gates",
      department: "dental",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1521004739Dr_Sanawar_(6).JPG"
    },
    {
      id: crypto.randomUUID(),
      name: "Elon Mask",
      department: "surgery",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1543208339.jpg"
    },
    {
      id: crypto.randomUUID(),
      name: "Lerry Page",
      department: "microbiology",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1674367360.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Mukesh Ambani",
      department: "neuromedicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1674367271.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Ratan Tata",
      department: "medicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1522313708Dr_Faruque_(4).JPG"
    },
    {
      id: crypto.randomUUID(),
      name: "Jhankar Mahbub",
      department: "dental",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1699177751.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Sumit Saha",
      department: "cardiology",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1680586547.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Steve Jobs",
      department: "dental",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1704797490.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Bill Gates",
      department: "cardiology",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1521004739Dr_Sanawar_(6).JPG"
    },
    {
      id: crypto.randomUUID(),
      name: "Elon Mask",
      department: "microbiology",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1543208339.jpg"
    },
    {
      id: crypto.randomUUID(),
      name: "Lerry Page",
      department: "surgery",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1674367360.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Mukesh Ambani",
      department: "medicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1674367271.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Ratan Tata",
      department: "neuromedicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1522313708Dr_Faruque_(4).JPG"
    },
    {
      id: crypto.randomUUID(),
      name: "Jhankar Mahbub",
      department: "medicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1699177751.png"
    },
    {
      id: crypto.randomUUID(),
      name: "Sumit Saha",
      department: "neuromedicine",
      degree: "MBBS MS",
      description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
      img: "https://www.squarehospital.com/storage/images/1680586547.png"
    }
  ];
  const doctorList = doctors.filter(doctor => doctor.department === department);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="lg:text-5xl text-2xl font-bold uppercase text-secondary">
          Choose Doctor
        </h1>
        <div className="flex justify-center items-center gap-3 text-gray-500 lg:text-3xl text-2xl my-2">
          <div className="lg:w-60 w-32 border border-gray-400"></div>
          <FaLaptopMedical />
          <div className="lg:w-60 w-32 border border-gray-400"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
            doctorList.map(doctor => <DoctorCard
                key = {doctor.id}
                doctor = {doctor}
                />)
        }
      </div>
    </section>
  );
}
