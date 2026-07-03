import React from 'react';

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ReviewCard = ({ name, role, quote, rating }) => {
  const offset = CIRCUMFERENCE - (rating / 5) * CIRCUMFERENCE;

  return (
    <div className="frame glass review-card">
      <span className="review-mark">“</span>
      <p className="review-quote">{quote}</p>

      <div className="review-foot">
        <div className="review-gauge">
          <svg viewBox="0 0 50 50" aria-hidden="true">
            <circle className="track" cx="25" cy="25" r={RADIUS} />
            <circle
              className="value"
              cx="25"
              cy="25"
              r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>
          <span className="review-gauge-num">{rating.toFixed(1)}</span>
        </div>
        <div>
          <div className="review-name">{name}</div>
          <div className="review-role">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;