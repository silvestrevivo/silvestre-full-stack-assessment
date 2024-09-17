import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { groupByIndustryName } from "./helpers";
import CardList from "./components/CardList";

function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/api/companies");
        const data = await response.json();
        const dataMapped = groupByIndustryName(data.items);
        setCompanies(dataMapped);
      } catch {
        setError("There was an error during your request");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (error) {
    return <div className="log">{error}</div>;
  }

  return (
    <>
      <div className="p-10 bg-blue-100 bg-opacity-50">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <CardList companies={companies} />
        )}
      </div>
    </>
  );
}

export default App;
