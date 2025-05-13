import { useParams} from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null); 

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const data = await fetchCountry(countryId);
        console.log('Fetched data:', data); // 👈 це дуже важливо
        if (data) setCountry(data);
        else console.log('Country not found or invalid structure');
      } catch (error) {
        console.log('Error fetching country:', error.message);
      }
    };
    asyncWrapper();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="Country" bottom />
        {country && <CountryInfo country={country} />}
        <GoBackBtn />
      </Container>
    </Section>
  );
};

export default Country;
