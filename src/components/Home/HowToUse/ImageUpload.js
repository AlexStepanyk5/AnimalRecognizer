import React, { useState } from 'react';
import axios from 'axios';
import convert from 'color-convert';
import { Modal, Button, Input, Checkbox, Select } from 'antd';

const ImageUpload = () => {
  const [labels, setLabels] = useState([]);
  const [dominantColor, setDominantColor] = useState(null);
  const [basicColorName, setBasicColorName] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedLabels, setEditedLabels] = useState([]);
  const [editedBasicColorName, setEditedBasicColorName] = useState('');
  const [shelter, setShelter] = useState('');
  const [name, setName] = useState('');
  const [sterilized, setSterilized] = useState(false);
  const [hasPassport, setHasPassport] = useState(false);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setModalVisible(true);

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = reader.result;
        setImageData(imageData);

        const response = await axios.post(
          `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDEVL_Yj-SsWIC93wpK85tZuXLlt72_l5I`,
          {
            requests: [
              {
                image: {
                  content: imageData.split(',')[1],
                },
                features: [
                  {
                    maxResults: 1,
                    type: 'LABEL_DETECTION',
                  },
                  {
                    maxResults: 1,
                    type: 'IMAGE_PROPERTIES',
                  },
                ],
              },
            ],
          }
        );

        const labelsData = response.data.responses[0].labelAnnotations || [];
        const labels = labelsData.map((label) => label.description);
        setLabels(labels);
        setEditedLabels(labels);

        const properties = response.data.responses[0].imagePropertiesAnnotation;
        const dominantColorRgb = properties.dominantColors.colors[0].color;
        const dominantColor = rgbToHex(
          dominantColorRgb.red,
          dominantColorRgb.green,
          dominantColorRgb.blue
        );
        setDominantColor(dominantColor);

        const basicColor = convertColorToBasic(dominantColor);
        setBasicColorName(basicColor);
        setEditedBasicColorName(basicColor);
      };

      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLabelChange = (index, value) => {
    const editedLabelsCopy = [...editedLabels];
    editedLabelsCopy[index] = value;
    setEditedLabels(editedLabelsCopy);
  };
  

  const handleBasicColorChange = (value) => {
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setEditedBasicColorName(capitalizedValue);
  };
  
  
  const handleShelterChange = (value) => {
    setShelter(value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSterilizedChange = (event) => {
    setSterilized(event.target.checked);
  };

  const handlePassportChange = (event) => {
    setHasPassport(event.target.checked);
  };

  const handleSaveChanges = () => {
    setLabels(editedLabels);
    setBasicColorName(editedBasicColorName);
    closeModal();
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };

  const convertColorToBasic = (hexCode) => {
    const colorMapping = {
      gray: ['#525252', '#747474', '#4e4545', '#807373', '#686161'],
      black: ['#000000', '#303030', '#161414', '#302525', '#140f0f'],
      brown: ['#2e1707', '#492106', '#42290f', '#5f3516'],
      red: ['#fc7a00', '#a04300', '#fd9042', '#ad6507', '#cf8e16'],
      white: ['#FFFFFF', '#A8A8A8', '#f7d5d5', '#faead5', '#dbd2c5'],
    };
  
    let closestBasicColor = null;
    let minDistance = Infinity;
  
    for (const basicColor in colorMapping) {
      const colorRange = colorMapping[basicColor];
      for (const color of colorRange) {
        const distance = colorDistance(hexCode, color);
        if (distance < minDistance) {
          minDistance = distance;
          closestBasicColor = basicColor;
        }
      }
    }
  
    closestBasicColor = closestBasicColor.charAt(0).toUpperCase() + closestBasicColor.slice(1);
  
    return closestBasicColor;
  };
  

  const colorDistance = (color1, color2) => {
    const [r1, g1, b1] = convert.hex.rgb(color1);
    const [r2, g2, b2] = convert.hex.rgb(color2);
    return Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2);
  };

  const { Option } = Select;
  const shelterOptions = [
    'Pawsitively Purrfect Animal Shelter',
    'Furry Friends Haven',
    'Happy Tails Rescue Center',
    'Critter Cottage',
    'FurEver Home Animal Sanctuary',
    'Second Chance Animal Shelter',
    'Loving Paws Animal Rescue',
    'Wags and Whiskers Refuge',
    'Paw Prints Animal Haven',
    'Safe Haven Animal Sanctuary',
  ];
  
  return (
    <div>
      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      <Button
        type="primary"
        style={{ 
          backgroundColor: 'rgb(255, 136, 0)',
          width: '200px',
          marginLeft: '18px',
          fontSize: '35px',
          height: '200px',
          fontFamily: 'Rockwell'
        }}
        onClick={() => {
          document.querySelector('input[type="file"]').click();
        }}
        disabled={modalVisible}
      >
        Upload
      </Button>

      <Modal
        title={<span style={{ fontFamily: 'Arial', fontSize: '20px'}}>Let's find a new owner for our little friend!</span>}
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {labels.includes('Dog') || labels.includes('Cat') ? (
              <>
                <h3>Animal:</h3>
                {editedLabels.map((label, index) => (
                  <Select
                    value={label}
                    onChange={(value) => handleLabelChange(index, value)}
                    style={{ width: '200px' }}
                    key={index}
                  >
                    <Select.Option value="Dog">Dog</Select.Option>
                    <Select.Option value="Cat">Cat</Select.Option>
                  </Select>
                ))}

                {imageData && (
                  <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageData} style={{ width: '200px', height: '200px' }} alt="Uploaded" />
                  </div>
                )}

                <div>
                  <h3>Name:</h3>
                  <Input value={name} onChange={handleNameChange} style={{ width: '200px' }}/>
                </div>
              </>
            ) : (
              <p>Please upload a photo with a cat or a dog.</p>
            )}
          </div>
          <div style={{ flex: 1 }}>
            {labels.includes('Dog') || labels.includes('Cat') ? (
              <>
                {dominantColor && (
                  <div>
                    <h3>Dominant Color:</h3>
                    <div
                      style={{
                        backgroundColor: dominantColor,
                        width: '236px',
                        height: '32px',
                      }}
                    ></div>
                  </div>
                )}
                {basicColorName && (
                  <div>
                    <h3>Basic Color:</h3>
                    <Select value={editedBasicColorName} onChange={handleBasicColorChange} style={{ width: '200px' }}>
                    <Option value="Black">Black</Option>
                    <Option value="Gray">Gray</Option>
                    <Option value="White">White</Option>
                    <Option value="Brown">Brown</Option>
                    <Option value="Red">Red</Option>
                  </Select>

                  </div>
                )}
                <div>
                  <h3>Shelter:</h3>
                  <Select value={shelter} onChange={handleShelterChange} style={{ width: '200px' }}>
                    {shelterOptions.map((option) => (
                      <Option value={option} key={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <h3>Additional Options:</h3>
                  <Checkbox checked={sterilized} onChange={handleSterilizedChange}>
                    Sterilized
                  </Checkbox>
                  <Checkbox checked={hasPassport} onChange={handlePassportChange}>
                    Passport
                  </Checkbox>
                </div>
                <div>
                  <br/><br/>

                  <Button
                    key="save"
                    type="primary"
                    onClick={handleSaveChanges}
                    style={{ 
                      backgroundColor: 'rgb(255, 136, 0)',
                      width: '200px',
                      marginLeft: '18px',
                      height: '50px',
                      fontSize: '18px'
                    }}
                  >
                    Upload for approval
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageUpload;