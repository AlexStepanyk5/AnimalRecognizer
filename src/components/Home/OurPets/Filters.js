import React, {useState} from 'react';
import {Checkbox, Select } from 'antd';
import './style.scss';
import OurPets from './index.js';

const { Option } = Select;

const Filters = ({inputType, inputColor, inputSterilized, inputPassport}) => {
    const [type, setType] = useState(inputType);
    const [color, setColor] = useState(inputColor);
    const [sterilized, setSterilized] = useState(inputSterilized);
    const [passport, setPassport] = useState(inputPassport);
    const publicURL = process.env.PUBLIC_URL;
    
    const handleColorChange = (color) => {
        setColor(color);    
    };
    const handleTypeChange = (type) => {
        setType(type);
    };   

    return (
        <div className="filters-container">
            <div className="pets-header">
                <div className="pets-title">
                    <img src={`${publicURL}/images/Home/paw.png`} alt='paw' />
                    <h1>Наші тваринки</h1>
                </div>
                <p>Наші тваринки вже чекають на тебе!<br />Обери ту, що тобі підходить!</p>
            </div>
            <div className="filters">
                <div>
                    <h3 className="select-title">Чотирилапий друг</h3>
                    <Select value={type} onChange={handleTypeChange} className="select-text">
                        <Option value="Any">Усі</Option>
                        <Option value="Dog">Гав!</Option>
                        <Option value="Cat">Няв!</Option>
                    </Select>
                </div>
                <div>
                    <h3 className="select-title">Колір</h3>
                    <Select value={color} onChange={handleColorChange} className="select-text">
                        <Option value="Any">Усі</Option>
                        <Option value="Black">Чорний</Option>
                        <Option value="Grey">Сірий</Option>
                        <Option value="White">Білий</Option>
                        <Option value="Brown">Коричневий</Option>
                        <Option value="Red">Рудий</Option>
                    </Select>
                </div>
                <div>
                    <h3 className="select-title">Додаткові опції</h3>
                    <Checkbox checked = {sterilized} onChange={() => setSterilized(!sterilized)} className="select-text">
                        Стерилізовано
                    </Checkbox>
                    <Checkbox checked = {passport} onChange={() => setPassport(!passport)} className="select-text">
                        Паспорт
                    </Checkbox>
                </div>
            </div>
            <div className='bottom-container'>
                <OurPets type={type} color={color} sterilized={sterilized} passport={passport} />
            </div>
        </div>
    );
};

export default Filters;
