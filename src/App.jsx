
import React, { useState, useEffect } from 'react';
import './App.css'
import StudentRegistration from './components/StudentRegistration';
import SavingsDashboard from './components/SavingsDashboard';
import WithdrawalForm from './components/WithdrawalForm';

function App() {
  const [members, setMembers] = useState([]);
  const [availableSlots, setAvailableSlots] = useState(12);
  const [week, setWeek] = useState(1);
  const [gameEarnings, setGameEarnings] = useState(0);

  // Calculate total savings
  const totalSavings = members.reduce((sum, member) => sum + member.amount, 0);

  // Calculate weekly game earnings (20% of total savings)
  useEffect(() => {
    setGameEarnings(totalSavings * 0.2);
  }, [totalSavings]);

  // Add new member
  const addMember = (newMember) => {
    if (availableSlots > 0) {
      setMembers([...members, newMember]);
      setAvailableSlots(availableSlots - 1);
      return true;
    }
    return false;
  };

  // Remove member
  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
    setAvailableSlots(availableSlots + 1);
  };

  // Advance to next week
  const nextWeek = () => {
    setWeek(week + 1);
    setMembers(members.map(member => {
      let interestRate;
      switch(member.tier) {
        case 'Tier 1': interestRate = 0.05; break;
        case 'Tier 2': interestRate = 0.10; break;
        case 'Tier 3': interestRate = 0.20; break;
        default: interestRate = 0;
      }
      
      return {
        ...member,
        interest: member.amount * interestRate,
        total: member.amount + (member.amount * interestRate)
      };
    }));
  };

  return (
    <div className="app">
      <header>
        <h1>Savings Group</h1>
        <p>Week {week} | Members: {12 - availableSlots}/12 | Total Savings: ₦{totalSavings.toLocaleString()}</p>
        <p>Projected Game Earnings This Week: ₦{gameEarnings.toLocaleString()}</p>
      </header>

      <div className="app-container">
        <StudentRegistration 
          addMember={addMember} 
          availableSlots={availableSlots} 
        />
        
        <SavingsDashboard 
          members={members} 
          totalSavings={totalSavings} 
          gameEarnings={gameEarnings} 
        />
        
        <WithdrawalForm 
          members={members} 
          removeMember={removeMember} 
        />
        
        <button onClick={nextWeek} className="next-week-btn">
          Advance to Next Week
        </button>
      </div>
    </div>
  );
}

export default App;