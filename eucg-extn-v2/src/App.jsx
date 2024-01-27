import React, { useState, useEffect } from 'react';
import './App.css';

const GetData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Datas');
        if (!response.ok) {
          throw new Error('Server is down. Please try again later.');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError('Server is down. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p className='text-2xl'>Variable 1 values:</p>
          <p>Value 1: {data.Datas[0]}</p>
          <p>Value 2: {data.Datas[1]}</p>
          <p>Value 3: {data.Datas[2]}</p>

          <p className='text-2xl'>Variable 2 values:</p>
          <p>Value 1: {data.Numbers[0]}</p>
          <p>Value 2: {data.Numbers[1]}</p>
          <p>Value 3: {data.Numbers[2]}</p>
        </div>
      )}
    </div>
  );
};

export default GetData;
