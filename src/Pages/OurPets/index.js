import react from 'react';
import './style.scss';
import Filters from "../../components/Home/OurPets/Filters.js";

const OurPetsPage = () => {

    const type = 'Any';


return(
    <>
        <Filters inputType={type}/>
    </>
)
}

export default OurPetsPage;