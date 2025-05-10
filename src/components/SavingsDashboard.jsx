import React from 'react';
import MemberList from './MemberList';
import '../styles/components.css';

const SavingsDashboard = ({ members, totalSavings, gameEarnings }) => {
  return (
    <div className="dashboard-container">
      <h2>Savings Dashboard</h2>
      
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Savings</h3>
          <p>₦{totalSavings.toLocaleString()}</p>
        </div>
        
        <div className="summary-card">
          <h3>Projected Game Earnings</h3>
          <p>₦{gameEarnings.toLocaleString()}</p>
        </div>
        
        <div className="summary-card">
          <h3>Total Members</h3>
          <p>{members.length}</p>
        </div>
      </div>
      
      <MemberList members={members} />
    </div>
  );
};

export default SavingsDashboard;