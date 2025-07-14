import React from 'react';

const InvestmentCard = ({ title, minInvestment, maxInvestment, returnRate, duration }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-400">Min Investment: {minInvestment}</p>
            <p className="text-gray-400">Max Investment: {maxInvestment}</p>
            <p className="text-gray-400">Return Rate: {returnRate}</p>
            <p className="text-gray-400">Duration: {duration}</p>
        </div>
    );
};

export default InvestmentCard;