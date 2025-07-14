import React from "react";
import Header from "../components/activities/Header";
import MiningStats from "../components/activities/MiningStats";
import MiningRewards from "../components/activities/MiningRewards";
import MiningTabs from "../components/activities/MiningTabs";
import BottomNavigation from "../components/BottomNavigation";

export default function Activity() {
    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-20">
            <Header />
            <div className="p-6 space-y-6">
                <MiningRewards />
                <MiningStats />
                <MiningTabs />
            </div>
            <BottomNavigation />
        </div>
    );
}
