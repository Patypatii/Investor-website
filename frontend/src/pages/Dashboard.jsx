import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Import other components
import Header from '../components/Header';
import LiveActivityCard from '../components/LiveActivityCard';
import BalanceCard from '../components/BalanceCard';
import PendingWithdrawalsCard from '../components/PendingWithdrawalsCard';
import MenuGrid from '../components/MenuGrid';
import BitcoinChartCard from '../components/BitcoinChartCard';
import LivePricesCard from '../components/LivePricesCard';
import BottomNavigation from '../components/BottomNavigation';
import DepositModal from '../components/DepositModal';
import WithdrawModal from '../components/WithdrawModal';

const DashboardPage = () => {
    const [totalBalance, setTotalBalance] = useState(0.00);
    const [liveVolume, setLiveVolume] = useState(30.06);
    const [activityItem, setActivityItem] = useState('');
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const [btcPrice, setBtcPrice] = useState(107437.80);
    const [btcPriceChange, setBtcPriceChange] = useState(1.25);
    const [btc24hHigh, setBtc24hHigh] = useState(108920);
    const [btc24hLow, setBtc24hLow] = useState(106150);
    const [btcVolume, setBtcVolume] = useState(3.2);
    const [cryptoPrices, setCryptoPrices] = useState({
        bitcoin: { usd: 107437.80, usd_24h_change: 1.25 },
        ethereum: { usd: 3250.42, usd_24h_change: 1.82 },
        ripple: { usd: 0.52, usd_24h_change: -0.45 },
        litecoin: { usd: 68.5, usd_24h_change: 0.92 },
        dogecoin: { usd: 0.12, usd_24h_change: -1.23 }
    });

    // ... (rest of your state variables)

    const coinIcons = useRef({
        'BTC': '/images/btc.png', // Adjust path for React public folder
        'ETH': '/images/eth.png',
        'XRP': '/images/xrp.png',
        'LTC': '/images/ltc.png',
        'DOGE': '/images/doge.png'
    });

    // Helper functions for data generation (can be moved to a separate utility file)
    const userNames = ['John D.', 'Alice M.', 'Bob K.', 'Emma W.', 'Mike T.', 'Sarah L.', 'David R.', 'Lisa M.', 'Khamso K.', 'Nicolas K.', 'MR Elvis.', 'Petel M.', 'sadra N.', 'Khamisi A.', 'Mohamed H.'];
    const coins = ['BTC', 'ETH', 'XRP', 'LTC', 'DOGE'];
    const transactionTypes = ['Deposited', 'Withdrew'];
    const packageNames = ['Starter', 'Five days vault', 'Weekly Grow', 'Quick Mine', 'Triple Mine'];

    const generateActivityItem = () => {
        const userName = userNames[Math.floor(Math.random() * userNames.length)];
        const coin = coins[Math.floor(Math.random() * coins.length)];
        const packageN = packageNames[Math.floor(Math.random() * packageNames.length)];
        const amount = (Math.random() * 750000 + 50000).toFixed(2);
        const type = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

        return { userName, coin, package: packageN, amount, type, time: '1 min ago' };
    };

    // Effects for live data updates
    useEffect(() => {
        const activityInterval = setInterval(() => {
            setActivityItem(generateActivityItem());
        }, 5000);

        const volumeInterval = setInterval(() => {
            setLiveVolume(prevVolume => {
                const change = (Math.random() * 1 - 0.5);
                return Math.max(25, Math.min(35, prevVolume + change));
            });
        }, 3000);

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(activityInterval);
            clearInterval(volumeInterval);
        };
    }, []); // Empty dependency array means this runs once on mount

    // Implement functions for chart data generation and updates here
    // These will be passed as props to BitcoinChartCard

    return (
        <div className="main-content">
            <div className="p-4 md:p-6">
                <Header />
                <LiveActivityCard activityItem={activityItem} liveVolume={liveVolume} coinIcons={coinIcons.current} />
                <BalanceCard onDepositClick={() => setIsDepositModalOpen(true)} onWithdrawClick={() => setIsWithdrawModalOpen(true)} totalBalance={totalBalance} />
                <PendingWithdrawalsCard />
                <MenuGrid />
                <BitcoinChartCard
                    btcPrice={btcPrice}
                    btcPriceChange={btcPriceChange}
                    btc24hHigh={btc24hHigh}
                    btc24hLow={btc24hLow}
                    btcVolume={btcVolume}
                    coinIcons={coinIcons.current}
                    setBtcPrice={setBtcPrice}
                    setBtcPriceChange={setBtcPriceChange}
                    setBtc24hHigh={setBtc24hHigh}
                    setBtc24hLow={setBtc24hLow}
                    setBtcVolume={setBtcVolume}
                />
                <LivePricesCard cryptoPrices={cryptoPrices} coinIcons={coinIcons.current} />
            </div>

            <BottomNavigation />

            <DepositModal isOpen={isDepositModalOpen} onClose={() => setIsDepositModalOpen(false)} />
            <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} />
        </div>
    );
};

export default DashboardPage;