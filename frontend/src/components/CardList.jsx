import PropTypes from "prop-types";
import Card from "./Card";
import { chunkArray } from "../helpers";

const CardList = ({ companies }) => {
  const chunkSize = 3;
  const chunkedCompanies = chunkArray(companies, chunkSize);
  return (
    <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-3 md:max-w-5xl">
      {chunkedCompanies.map((chunk, index) => (
        <div key={index} className="grid gap-6">
          {chunk.map(({ id, industry, companies }) => (
            <Card key={id} industry={industry} companies={companies} />
          ))}
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      industry: PropTypes.string.isRequired,
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
    })
  ).isRequired,
};

export default CardList;
