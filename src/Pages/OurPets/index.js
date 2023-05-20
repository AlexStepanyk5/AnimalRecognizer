import react from 'react';
import './style.scss';
import Filters from "../../components/Home/OurPets/Filters.js";

const OurPetsPage = () => {
    const filters = {
        color: '',
        type: '',
        sterilized: false,
        passport: false,
    };

return(
    <>
        <Filters filters={filters}/>
    </>
)
}

export default OurPetsPage;