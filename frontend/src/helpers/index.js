function groupByIndustryName(companies) {
  const groupedByIndustry = Object.values(
    companies.reduce((result, company) => {
      company.industries.forEach((industry) => {
        // Check if the industry already exists in the result, keyed by industry id
        if (!result[industry.id]) {
          result[industry.id] = {
            id: industry.id, // Unique industry ID
            industry: industry.name, // Industry name
            companies: [], // List of companies for this industry
          };
        }
        // Check if the company is already in the industry based on its uuid
        if (
          !result[industry.id].companies.some(
            (comp) => comp.uuid === company.uuid
          )
        ) {
          // Push the company into the list of companies for this industry if it doesn't exist
          result[industry.id].companies.push(company);
        }
      });
      return result;
    }, {})
  );

  // Sort companies within each industry by company name
  groupedByIndustry.forEach((industry) => {
    industry.companies.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groupedByIndustry;
}

function chunkArray(arr, chunkSize) {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Start a new chunk
    }

    resultArray[chunkIndex].push(item); // Add item to the current chunk

    return resultArray;
  }, []);
}

export { groupByIndustryName, chunkArray };
