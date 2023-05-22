import React, { useState } from 'react';
import { Button, Checkbox, Select } from 'antd';
import './style.scss';
import OurPets from './index.js';

const { Option } = Select;

const Filters = ({ onApplyFilters }) => {
    const [color, setColor] = useState('');
    const [type, setType] = useState('');
    const [sterilized, setSterilized] = useState(false);
    const [passport, setPassport] = useState(false);

    const handleColorChange = (color) => {
        setColor(color);
    };

    const handleTypeChange = (type) => {
        setType(type);
    };

    const handleSterilizedChange = (e) => {
        setSterilized(e.target.checked);
    };

    const handlePassportChange = (e) => {
        setPassport(e.target.checked);
    };

    //   const handleApplyFilters = () => {
    //     const filters = {
    //       color,
    //       type,
    //       sterilized,
    //       passport,
    //     };
    //     onApplyFilters(filters);
    //   };

    return (
        <div className="filters-container">
            <div className="pets-header">
                <div className="pets-title">
                    <img src="./images/Home/paw.png" />
                    <h1>Our Pets</h1>
                </div>
                <p>Best pets are waiting for adoption! <br />Find the one you will love the most with our tools.</p>
            </div>
            <div className="filters">
                <div>
                    <h3 className="select-title">Animal</h3>
                    <Select value={type} onChange={handleTypeChange} className="select-text">
                        <Option value="">Any</Option>
                        <Option value="Dog">Dog</Option>
                        <Option value="Cat">Cat</Option>
                    </Select>
                </div>
                <div>
                    <h3 className="select-title">Color</h3>
                    <Select value={color} onChange={handleColorChange} className="select-text">
                        <Option value="">Any</Option>
                        <Option value="Black">Black</Option>
                        <Option value="Gray">Gray</Option>
                        <Option value="White">White</Option>
                        <Option value="Brown">Brown</Option>
                        <Option value="Red">Red</Option>
                    </Select>
                </div>
                <div>
                    <h3 className="select-title">Additional Options</h3>
                    <Checkbox checked={sterilized} onChange={handleSterilizedChange} colorPrimaryBorder="#FF5B2E" className="select-text">
                        Sterilized
                    </Checkbox>
                    <Checkbox checked={passport} onChange={handlePassportChange} className="select-text">
                        Passport
                    </Checkbox>
                </div>
                {/* <div>
                    <Button type="primary" onClick={handleApplyFilters} className='approval'>
                        Apply
                    </Button>
                </div> */}
            </div>
            <div className='bottom-container'>
                <OurPets type={type} color={color} sterilized={sterilized} passport={passport} />
            </div>
        </div>
    );
};

export default Filters;
