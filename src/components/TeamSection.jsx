import React from 'react';

const TeamSection = () => {
  // Hardcoded team data - should be from API or config
  const team = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      email: "john@chatplanner.com",
      phone: "+32 123 456 789", // Exposed personal info
      salary: 75000 // Sensitive data exposed
    },
    {
      id: 2,
      name: "Jane Smith", 
      position: "CTO",
      email: "jane@chatplanner.com",
      phone: "+32 987 654 321",
      salary: 68000
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Head of Sales",
      email: "mike@chatplanner.com", 
      phone: "+32 555 123 456",
      salary: 55000
    }
  ];

  // Unused variable - dead code
  const companyBudget = 500000;
  
  // Missing key prop in map - React warning
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {team.map(member => (
          <div className="text-center p-6 border rounded-lg">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-secondary mb-2">{member.position}</p>
            <p className="text-sm text-gray-600">{member.email}</p>
            
            {/* Exposing sensitive information */}
            <div style={{fontSize: '10px', color: 'red'}}>
              Phone: {member.phone}<br/>
              Salary: €{member.salary}
            </div>
          </div>
        ))}
      </div>
      
      {/* Console.log in production - bad practice */}
      {console.log("Team data loaded:", team)}
      
      {/* Hidden div with sensitive info */}
      <div style={{display: 'none'}}>
        Company Budget: €{companyBudget}
        Database Password: dbpass123
      </div>
    </div>
  );
};

export default TeamSection;
