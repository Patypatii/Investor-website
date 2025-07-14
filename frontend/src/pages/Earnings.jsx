import React from 'react';
import EarningsHeader from '../components/earnings/EarningsHeader';
import EarningsStats from '../components/earnings/EarningsStats';
import SuccessStories from '../components/earnings/SuccessStories';
import EarningsHistory from '../components/earnings/EarningsHistory';
import BottomNavigation from '../components/BottomNavigation';

export default function Earnings() {
    return (
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 min-h-screen text-white pb-20">
            <EarningsHeader />
            <EarningsStats />
            <SuccessStories />
            <EarningsHistory />
            <BottomNavigation />
        </div>
    );
}
