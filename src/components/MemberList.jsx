import React from 'react';
import '../styles/components.css';

const MemberList = ({ members }) => {
  return (
    <div className="member-list">
      <h3>Member Contributions</h3>
      
      {members.length === 0 ? (
        <p>No members have joined yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tier</th>
              <th>Amount (₦)</th>
              <th>Weekly Interest (₦)</th>
              <th>Total Withdrawal (₦)</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.tier}</td>
                <td>{member.amount.toLocaleString()}</td>
                <td>{member.interest.toLocaleString()}</td>
                <td>{member.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MemberList;