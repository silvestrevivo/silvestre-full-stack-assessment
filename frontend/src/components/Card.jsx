import PropTypes from "prop-types";
import Image from "./Image";

const Card = ({ companies, industry }) => {
  return (
    <div className="p-4 font-sans bg-white rounded-lg">
      <div className="flex items-center justify-between font-semibold">
        <h2 className="first-letter:uppercase">{industry}</h2>
        <p className="text-neutral-500">{companies.length}</p>
      </div>
      <div className="flex items-center justify-between py-3 text-sm border-b-2 border-solid border-neutral-200 text-neutral-500">
        <p>Name</p>
        <p>Total Jobs Available</p>
      </div>
      <ul className="pt-4 space-y-4">
        {companies.map(({ uuid, name, images, total_jobs_available }) => (
          <div key={uuid} className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <Image src={images["32x32"]} alt={name} />
              <p>{name}</p>
            </div>
            <p className="text-neutral-500">{total_jobs_available}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

Card.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.shape({
        "32x32": PropTypes.string.isRequired,
      }).isRequired,
      total_jobs_available: PropTypes.number.isRequired,
    })
  ).isRequired,
  industry: PropTypes.string.isRequired,
};

export default Card;
