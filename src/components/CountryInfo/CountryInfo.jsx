import css from './CountryInfo.module.css';

const CountryInfo = ({ country }) => {
    console.log('CountryInfo data:', country);
  if (!country) return null;

  const {
    flag = '',
    countryName = 'Unknown',
    capital = ['Unknown'],
    population = 'Unknown',
    languages = []
  } = country;

  return (
    <div className={css.wrapper}>
      {flag && (
        <img
          className={css.flag}
          src={flag}
          alt={countryName}
        />
      )}
      <div className={css.info}>
        <h2 className={css.name}>{countryName}</h2>
        <p><strong>Capital:</strong> {capital?.[0] || 'Unknown'}</p>
        <p><strong>Population:</strong> {population.toLocaleString?.() || population}</p>
        <p><strong>Languages:</strong> {languages.length > 0 ? languages.join(', ') : 'Unknown'}</p>
      </div>
    </div>
  );
};

export default CountryInfo;