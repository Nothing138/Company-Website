import React, { useState, useEffect } from 'react';

const StatCard = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < number) {
      interval = setTimeout(() => {
        setCount(count + Math.ceil(number / 50));
      }, 30);
    }
    return () => clearTimeout(interval);
  }, [count, number]);

  return (
    <div className="card stat-card">
      <div className="stat-number">{Math.min(count, number)}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCard;