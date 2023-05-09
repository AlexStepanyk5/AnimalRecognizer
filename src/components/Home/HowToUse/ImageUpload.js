import React, { useState } from 'react';
import axios from 'axios';
import convert from 'color-convert';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const [dominantColor, setDominantColor] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [basicColorName, setBasicColorName] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = reader.result;

        const response = await axios.post(
          `https://vision.googleapis.com/v1/images:annotate?key=`,
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
      gray: ['#808080', '#A8A8A8'],
      black: ['#000000', '#1F1D1D'],
      brown: ['#8B4513', '#A52A2A', '#D2691E', '#CD853F'],
      red: ['#FF0000', '#A52A2A', '#D2691E'],
      white: ['#FFFFFF', '#DBDBDB'],

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
          <h3>Labels:</h3>
          <ul>
            {labels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
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
    </div>
  );
};

export default ImageUpload;
