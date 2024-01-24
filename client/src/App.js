// frontend/src/components/YourComponent.js
import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Datas');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <p>Variable 1 values:</p>
          <p>Value 1: {data.Datas[0]}</p>
          <p>Value 2: {data.Datas[1]}</p>
          <p>Value 3: {data.Datas[2]}</p>

          <p>Variable 2 values:</p>
          <p>Value 1: {data.Numbers[0]}</p>
          <p>Value 2: {data.Numbers[1]}</p>
          <p>Value 3: {data.Numbers[2]}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
