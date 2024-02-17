import { TbDental } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";

import Category from "./Category";
import PageHeader from "../../Shared/PageHeader";
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
      <PageHeader>Choose Department</PageHeader>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
