import React, { useState } from 'react';
import axios from 'axios';
import convert from 'color-convert';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const [dominantColor, setDominantColor] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [basicColorName, setBasicColorName] = useState(null);
  const [imageData, setImageData] = useState(null); // Add imageData state

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = reader.result;
        setImageData(imageData); // Store the image data

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

        const properties = response.data.responses[0].imagePropertiesAnnotation;
        const dominantColorRgb = properties.dominantColors.colors[0].color;
        const dominantColor = rgbToHex(
          dominantColorRgb.red,
          dominantColorRgb.green,
          dominantColorRgb.blue
        );
        setDominantColor(dominantColor);

        const colorName = convertHexToColorName(dominantColor);
        setColorName(colorName);

        const basicColor = convertColorToBasic(dominantColor);
        setBasicColorName(basicColor);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
    }
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };

  const convertHexToColorName = (hexCode) => {
    const [r, g, b] = convert.hex.rgb(hexCode);
    const colorName = convert.rgb.keyword([r, g, b]);
    return colorName;
  };

  const convertColorToBasic = (hexCode) => {
    const colorMapping = {
      gray: ['#525252', '#747474', '#4e4545', '#807373', '#686161'],
      black: ['#000000', '#303030', '#161414', '#302525', '#140f0f'],
      brown: ['#2e1707', '#492106', '#42290f', '#5f3516'],
      red: ['#fc7a00', '#a04300', '#fd9042', '#ad6507','#cf8e16'],
      white: ['#FFFFFF', '#A8A8A8', '#f7d5d5',  '#faead5', '#dbd2c5'],
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

    return closestBasicColor;
  };

  const colorDistance = (color1, color2) => {
    const [r1, g1, b1] = convert.hex.rgb(color1);
    const [r2, g2, b2] = convert.hex.rgb(color2);
    return Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      {labels.length > 0 && (
        <div>
          <h3>Animal:</h3>
          <ul>
            {labels.map((label, index) => {
              if (label === 'Dog' || label === 'Cat') {
                return <li key={index}>{label}</li>;
              } else {
                return (
                  <li key={index}>
                    Please upload a photo with a cat or a dog.
                  </li>
                );
              }
            })}
          </ul>
          {labels.includes('Dog') || labels.includes('Cat') ? (
            <>
              {imageData && (
                <img src={imageData} style={{ width: '200px', height: '200px' }} alt="Uploaded" />
              )}
              {dominantColor && (
                <div>
                  <h3>Dominant Color:</h3>
                  <div
                    style={{
                      backgroundColor: dominantColor,
                      width: '100px',
                      height: '100px',
                    }}
                  ></div>
                </div>
              )}
              {colorName && (
                <p>
                  The color name for {dominantColor} is {colorName}.
                </p>
              )}
              {basicColorName && (
                <p>
                  The closest basic color for {dominantColor} is {basicColorName}.
                </p>
              )}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
