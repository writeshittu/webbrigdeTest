import React from 'react';
import '../styles/components.css';

const TierInfoCard = ({ tier, amount, interest }) => {
  return (
    <div className="tier-card">
      <h3>{tier}</h3>
      <p>Amount: ₦{amount}</p>
      <p>Weekly Interest: {interest}</p>
    </div>
  );
};

export default TierInfoCard;