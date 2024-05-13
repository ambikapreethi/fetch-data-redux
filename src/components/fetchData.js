// Component.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../pages/dataSlice';

const FetchData = () => {
  const dispatch = useDispatch();
  var data=useSelector((state) => state.data.data);
  console.log(data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.id}......{item.title}</div>
      ))}
    </div>
);
};

   

export default FetchData;