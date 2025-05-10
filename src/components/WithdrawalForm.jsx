import React, { useState } from 'react';
import '../styles/components.css';

const WithdrawalForm = ({ members, removeMember }) => {
  const [selectedMember, setSelectedMember] = useState('');
  const [success, setSuccess] = useState('');

  const handleWithdrawal = (e) => {
    e.preventDefault();
    if (!selectedMember) return;
    
    removeMember(selectedMember);
    setSuccess('Withdrawal processed successfully. Slot is now available for new members.');
    setSelectedMember('');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="withdrawal-container">
      <h2>Withdrawal Management</h2>
      
      {members.length > 0 ? (
        <form onSubmit={handleWithdrawal}>
          <div className="form-group">
            <label>Select Member to Withdraw:</label>
            <select 
              value={selectedMember} 
              onChange={(e) => setSelectedMember(e.target.value)}
              required
            >
              <option value="">-- Select Member --</option>
              {members.map(member => (
                <option key={member.id} value={member.id}>
                  {member.name} ({member.tier} - ₦{member.total.toLocaleString()})
                </option>
              ))}
            </select>
          </div>
          
          <button type="submit">Process Withdrawal</button>
        </form>
      ) : (
        <p>No members available for withdrawal.</p>
      )}
      
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default WithdrawalForm;