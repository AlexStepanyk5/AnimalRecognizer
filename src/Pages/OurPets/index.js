import './style.scss';
import React from 'react';
import Filters from '../../components/Home/OurPets/Filters';
import { useParams } from 'react-router-dom';

const OurPetsPage = () => {
  const { selectedType = 'Any', selectedColor = 'Any', selectedSterilized = 'false', selectedPassport = 'false' } = useParams();
  const parsedSelectedSterilized = JSON.parse(selectedSterilized);
  const parsedSelectedPassport = JSON.parse(selectedPassport);

  return (
    <>
      <Filters
        inputType={selectedType}
        inputColor={selectedColor}
        inputSterilized={parsedSelectedSterilized}
        inputPassport={parsedSelectedPassport}
      />
    </>
  );
};

export default OurPetsPage;
