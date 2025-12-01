import React from 'react';

const ProgramTable = () => {
  const programData = [
    {
      component: "The Intervention",
      description: "Brief, low-stigma group-based program focusing on Growth Mindset, Value Affirmations and Gratitude. Adapted for trauma-informed care.",
      benefits: "Teaches practical skills and actively rebuilds self-efficacy and identity."
    },
    {
      component: "The Delivery",
      description: "Sessions led by Aletheia Guides (trained lay-providers, typically young adults or Alumni of residential care centres).",
      benefits: "Drastically reduces cost and increases engagement through relatable role models."
    },
    {
      component: "The Safety Net",
      description: "Mandatory three-tiered clinical supervision: Guides → Clinical Supervisors → Professional Networks.",
      benefits: "Ensures quality care, protocol fidelity, and immediate escalation of high-risk cases."
    }
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-primary-500 to-secondary-500">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              COMPONENT
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              DESCRIPTION
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              BENEFITS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {programData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 whitespace-normal">
                <span className="font-bold text-primary-700">{item.component}</span>
              </td>
              <td className="px-6 py-4 whitespace-normal">
                {item.description}
              </td>
              <td className="px-6 py-4 whitespace-normal">
                <div className="bg-green-50 p-3 rounded-lg">
                  {item.benefits}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramTable;