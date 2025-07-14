import React from 'react';
import Header from '../components/Header';
import InvestmentCard from '../components/InvestmentCard';
import BottomNavigation from "../components/BottomNavigation";
const Invest = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Investment Packages</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InvestmentCard
                        title="Quick Mine"
                        minInvestment="KSh 150,000.00"
                        maxInvestment="KSh 1,000,000.00"
                        returnRate="7.00%"
                        duration="12 hours"
                    />
                    <InvestmentCard
                        title="Daily Mine Pro"
                        minInvestment="KSh 300.00"
                        maxInvestment="KSh 1,000,000.00"
                        returnRate="10.00%"
                        duration="24 hours"
                    />
                    <InvestmentCard
                        title="Crypto Blast"
                        minInvestment="KSh 50,000.00"
                        maxInvestment="KSh 1,000,000.00"
                        returnRate="15.00%"
                        duration="1 day"
                    />
                    {/* Add more InvestmentCard components as needed */}
                </div>
            </div>
            <BottomNavigation />
        </div>
    );
};

export default Invest;