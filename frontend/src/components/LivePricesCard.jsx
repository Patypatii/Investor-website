import React, { useState, useEffect } from 'react';

export default function LivePricesCard() {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [ethereumPrice, setEthereumPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrices = () => {
            setLoading(true);
            setError(null);
            setTimeout(() => {
                try {
                    const newBitcoinPrice = (Math.random() * (70000 - 60000) + 60000).toFixed(2);
                    const newEthereumPrice = (Math.random() * (4000 - 3000) + 3000).toFixed(2);
                    setBitcoinPrice(newBitcoinPrice);
                    setEthereumPrice(newEthereumPrice);
                    setLoading(false);
                } catch (err) {
                    setError("Failed to fetch prices.");
                    setLoading(false);
                }
            }, 1500);
        };

        fetchPrices();
        const intervalId = setInterval(fetchPrices, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const priceChangeColor = (change) => change >= 0 ? 'text-green-500' : 'text-red-500';

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                📈 Live Prices
            </h3>

            {loading && (
                <p className="text-slate-500">Loading real-time prices...</p>
            )}

            {error && (
                <div className="text-red-600 border border-red-400 p-4 rounded-md bg-red-100">
                    <p>Error: {error}</p>
                    <p>Please try again later.</p>
                </div>
            )}

            {!loading && !error && (
                <>
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 font-medium">Bitcoin (BTC)</p>
                        <p className="text-2xl font-bold text-yellow-600">${bitcoinPrice}</p>
                        <p className={`${priceChangeColor(1)} text-sm`}>+0.5% (simulated)</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm text-gray-600 font-medium">Ethereum (ETH)</p>
                        <p className="text-2xl font-bold text-blue-600">${ethereumPrice}</p>
                        <p className={`${priceChangeColor(-1)} text-sm`}>-0.2% (simulated)</p>
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                        Prices update every 5 seconds.
                    </p>
                </>
            )}
        </div>
    );
}
