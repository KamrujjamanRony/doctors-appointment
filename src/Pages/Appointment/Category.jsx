import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <Link to={category.name}>
      <div className="card group hover:shadow-2xl shadow-lg rounded-none">
        <figure className="px-10 pt-10 ">
          <div className="border-2 border-primary text-accent p-6 rounded-3xl text-5xl group-hover:bg-primary group-hover:text-white">
            {category.img}
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title group-hover:text-primary font-bold text-accent capitalize">
            {category.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}
