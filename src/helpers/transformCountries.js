export const transformCountriesData = data => {
  return data.map(
    ({ name: { common }, capital, flags, population, languages }) => ({
      id: common,
      country: common,
      flag: flags.png,
      capital,
      population,
      languages,
    }),
  );
};

export const transformCountryData = data => {
  if (!Array.isArray(data) || data.length === 0) return null;

  return data.map(
    ({
      name: { common, official },
      flags,
      capital,
      population,
      languages,
    }) => ({
      id: common,
      countryName: official || common,
      flag: flags?.png || '',
      capital: capital || ['Unknown'],
      population: population || 0,
      languages: languages ? Object.values(languages) : ['Unknown'],
    }),
  );
};
