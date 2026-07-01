import React, { useState, useEffect } from 'react';

const StatCard = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout;
    if (count < number) {
      timeout = setTimeout(() => {
        setCount(Math.min(count + Math.ceil(number / 40), number));
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [count, number]);

  return (
    <>
      <div className="protocol-number">{count}</div>
      <div className="protocol-label">{label}</div>
    </>
  );
};

export default StatCard;