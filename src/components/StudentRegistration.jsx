import React, { useState } from 'react';
import TierInfoCard from './TierInfoCard';
import '../styles/components.css';

const StudentRegistration = ({ addMember, availableSlots }) => {
  const [name, setName] = useState('');
  const [tier, setTier] = useState('Tier 1');
  const [amount, setAmount] = useState(10000);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate tier amount
    const expectedAmount = {
      'Tier 1': 10000,
      'Tier 2': 20000,
      'Tier 3': 30000
    }[tier];

    if (parseInt(amount) !== expectedAmount) {
      setError(`Amount for ${tier} must be exactly ₦${expectedAmount.toLocaleString()}`);
      return;
    }

    // Calculate interest
    let interestRate;
    switch(tier) {
      case 'Tier 1': interestRate = 0.05; break;
      case 'Tier 2': interestRate = 0.10; break;
      case 'Tier 3': interestRate = 0.20; break;
      default: interestRate = 0;
    }

    const newMember = {
      id: Date.now(),
      name,
      tier,
      amount: parseInt(amount),
      interest: amount * interestRate,
      total: amount + (amount * interestRate)
    };

    if (addMember(newMember)) {
      setSuccess(`${name} successfully joined as ${tier} member!`);
      setName('');
      setTier('Tier 1');
      setAmount(10000);
    } else {
      setError('Group is full (12/12 members). Please wait for a slot to open.');
    }
  };

  return (
    <div className="registration-container">
      <h2>Student Registration</h2>

        <div className="tier-info-container" >
        <TierInfoCard 
          tier="Tier 1" 
          amount="10,000" 
          interest="5%" 
        />
        <TierInfoCard 
          tier="Tier 2" 
          amount="20,000" 
          interest="10%" 
        />
        <TierInfoCard 
          tier="Tier 3" 
          amount="30,000" 
          interest="20%" 
        />
      </div>
      {availableSlots > 0 ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Savings Tier:</label>
              <select 
                value={tier} 
                onChange={(e) => {
                  setTier(e.target.value);
                  setAmount({
                    'Tier 1': 10000,
                    'Tier 2': 20000,
                    'Tier 3': 30000
                  }[e.target.value]);
                }}
              >
                <option value="Tier 1">Tier 1 (5%)</option>
                <option value="Tier 2">Tier 2 (10%)</option>
                <option value="Tier 3">Tier 3 (20%)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Amount (₦):</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                min="10000" 
                max="30000" 
                step="10000" 
                required 
              />
            </div>
            
            <button type="submit">Join Savings Group</button>
          </form>
          
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </>
      ) : (
        <p className="info">The savings group is currently full (12/12 members).</p>
      )}
      
    
    </div>
  );
};

export default StudentRegistration;