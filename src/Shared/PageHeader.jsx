import { FaLaptopMedical } from "react-icons/fa";

export default function PageHeader({children}){
    return (
        <div className="flex flex-col justify-center items-center py-8">
        <h1 className="lg:text-5xl text-2xl font-bold uppercase text-secondary">
          {children}
        </h1>
        <div className="flex justify-center items-center gap-3 text-gray-500 lg:text-3xl text-2xl my-2">
          <div className="lg:w-60 w-32 border border-gray-400"></div>
          <FaLaptopMedical />
          <div className="lg:w-60 w-32 border border-gray-400"></div>
        </div>
      </div>
    );
}