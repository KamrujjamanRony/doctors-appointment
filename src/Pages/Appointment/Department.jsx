import { TbDental } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa";

import Category from "./Category";
export default function Department() {
  const categories = [
    {
      id: crypto.randomUUID(),
      name: "dental",
      img: <TbDental />,
    },
    {
      id: crypto.randomUUID(),
      name: "cardiology",
      img: <MdMonitorHeart />,
    },
    {
      id: crypto.randomUUID(),
      name: "surgery",
      img: <FaHouseChimneyMedical />,
    },
    {
      id: crypto.randomUUID(),
      name: "microbiology",
      img: <FaMicroscope />,
    },
    {
      id: crypto.randomUUID(),
      name: "neuromedicine",
      img: <FaHandHoldingMedical />,
    },
    {
      id: crypto.randomUUID(),
      name: "medicine",
      img: <FaBriefcaseMedical />,
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="lg:text-5xl text-2xl font-bold uppercase text-secondary">
          Choose Department
        </h1>
        <div className="flex justify-center items-center gap-3 text-gray-500 lg:text-3xl text-2xl my-2">
          <div className="lg:w-60 w-32 border border-gray-400"></div>
          <FaLaptopMedical />
          <div className="lg:w-60 w-32 border border-gray-400"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
