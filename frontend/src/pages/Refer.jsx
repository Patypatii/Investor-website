import { useState } from 'react';
import ReferralHeader from '../components/referral/ReferralHeader';
import TabsNavigation from '../components/referral/TabsNavigation';
import StatsCards from '../components/referral/StatsCards';
import ReferralLinkCard from '../components/referral/ReferralLinkCard';
import RecentActivityCard from '../components/referral/RecentActivityCard';
import BottomNavigation from '../components/BottomNavigation';
import InviteTab from '../components/referral/InviteTab';
import RewardsTab from '../components/referral/RewardsTab';

export default function ReferralPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white pb-24 px-4 py-8">
            <ReferralHeader />
            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'overview' && (
                <>
                    <StatsCards />
                    <ReferralLinkCard />
                    <RecentActivityCard />
                </>
            )}

            {activeTab === 'invite' && <InviteTab />}
            {activeTab === 'rewards' && <RewardsTab />}

            <BottomNavigation />
        </div>
    );
}
