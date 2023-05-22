import React, { useState} from 'react';
import {Checkbox, Select } from 'antd';
import './style.scss';
import OurPets from './index.js';

const { Option } = Select;

const Filters = ({inputType}) => {
    const [color, setColor] = useState('');
    const [type, setType] = useState(inputType);
    const [sterilized, setSterilized] = useState(false);
    const [passport, setPassport] = useState(false);
    
    const handleColorChange = (color) => {
        setColor(color);
    };
    const handleTypeChange = (type) => {
        setType(type);
    };

    // const handleSterilizedChange = (e) => {
    //     setSterilized(e.target.checked);
    // };

    // const handlePassportChange = (e) => {
    //     setPassport(e.target.checked);
    // };

   

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
                        <Option value="Any">Any</Option>
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
                    <Checkbox checked = {sterilized} onChange={() => setSterilized(!sterilized)} colorPrimaryBorder="#FF5B2E" className="select-text">
                        Sterilized
                    </Checkbox>
                    <Checkbox checked = {passport} onChange={() => setPassport(!passport)} className="select-text">
                        Passport
                    </Checkbox>
                </div>
            </div>
            <div className='bottom-container'>
                <OurPets inputType={type} color={color} sterilized={sterilized} passport={passport} />
            </div>
        </div>
    );
};

export default Filters;
