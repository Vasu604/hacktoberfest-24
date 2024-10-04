import React from 'react';

const CompanyPolicies = () => {
  // Company policies data (this could also come from an API or a JSON file)
  const policies = [
    {
      title: 'Privacy Policy',
      description: 'We value your privacy and are committed to protecting your personal data.',
    },
    {
      title: 'Return Policy',
      description: 'You can return any unused item within 30 days for a full refund.',
    },
    {
      title: 'Code of Conduct',
      description: 'All employees are expected to uphold the highest standards of ethical conduct.',
    },
    {
      title: 'Non-Discrimination Policy',
      description: 'We do not discriminate based on race, gender, or religion in any of our practices.',
    },
  ];

  return (
    <div>
      <h1>Company Policies</h1>
      <ul>
        {policies.map((policy, index) => (
          <li key={index}>
            <h2>{policy.title}</h2>
            <p>{policy.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyPolicies;
