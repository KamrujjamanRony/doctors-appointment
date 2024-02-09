export default function DoctorDetails({ setShowModal, doctor, handleClick }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 text-white rounded-xl border border-[#FEFBFB]/[36%] max-w-[740px] w-full max-h-[80vh] overflow-y-auto">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Doctor Details
        </h2>

        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor.img}
              className="md:max-w-sm w-40 rounded-lg shadow-2xl"
              alt={doctor.name}
            />
            <div>
              <h1 className="text-5xl font-bold">{doctor.name}</h1>
              <p className="font-bold">{doctor.degree}</p>
              <p>Department of {doctor.department}</p>
              <p className="py-6">{doctor.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-5 lg:mt-20">
          <button
            type="submit"
            onClick={handleClick}
            className="rounded bg-primary px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Appointment
          </button>
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
