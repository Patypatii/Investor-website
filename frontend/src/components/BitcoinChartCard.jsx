import React, { useEffect, useRef, useState } from 'react';
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import streamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';

// Register Chart.js components and plugins
Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
    Filler,
    streamingPlugin
);

const BitcoinChartCard = ({
    btcPrice,
    btcPriceChange,
    btc24hHigh,
    btc24hLow,
    btcVolume,
    coinIcons,
    setBtcPrice,
    setBtcPriceChange,
    setBtc24hHigh,
    setBtc24hLow,
    setBtcVolume
}) => {
    const chartRef = useRef(null);
    const btcChartInstance = useRef(null);
    const [currentTimeRange, setCurrentTimeRange] = useState('1h');

    const getDurationForTimeRange = (range) => {
        switch (range) {
            case '1h': return 60 * 60 * 1000;
            case '1d': return 24 * 60 * 60 * 1000;
            case '1w': return 7 * 24 * 60 * 60 * 1000;
            case '1m': return 30 * 24 * 60 * 60 * 1000;
            case '1y': return 365 * 24 * 60 * 60 * 1000;
            default: return 60 * 60 * 1000;
        }
    };

    const generateHistoricalData = (range, initialPrice) => {
        const now = Date.now();
        const data = [];
        let currentPrice = initialPrice;

        let points, interval;
        switch (range) {
            case '1h': points = 60; interval = 60 * 1000; break;
            case '1d': points = 24; interval = 60 * 60 * 1000; break;
            case '1w': points = 7; interval = 24 * 60 * 60 * 1000; break;
            case '1m': points = 30; interval = 24 * 60 * 60 * 1000; break;
            case '1y': points = 12; interval = (365 / 12) * 24 * 60 * 60 * 1000; break;
            default: points = 60; interval = 60 * 1000;
        }

        for (let i = points; i >= 0; i--) {
            const time = now - (i * interval);
            const volatility = 0.002;
            const change = (Math.random() * volatility * 2 - volatility) + 0.0001;
            currentPrice = currentPrice * (1 + change);
            currentPrice = Math.max(90000, Math.min(120000, currentPrice));
            data.push({ x: time, y: currentPrice });
        }

        return data;
    };

    useEffect(() => {
        if (!chartRef.current) return;

        if (btcChartInstance.current) {
            btcChartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        const initialData = generateHistoricalData(currentTimeRange, btcPrice);

        btcChartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'BTC Price',
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.3,
                    data: initialData
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'nearest',
                        intersect: false,
                        backgroundColor: '#1e293b',
                        titleColor: '#f59e0b',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: (context) => `BTC: $${context.parsed.y.toFixed(2)}`
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'realtime',
                        realtime: {
                            duration: getDurationForTimeRange(currentTimeRange),
                            refresh: 1000,
                            delay: 100,
                            onRefresh: (chart) => {
                                const volatility = 0.002;
                                const change = (Math.random() * volatility * 2 - volatility) + 0.0001;
                                const newPrice = btcPrice * (1 + change);
                                const boundedPrice = Math.max(90000, Math.min(120000, newPrice));

                                // Update state
                                setBtcPrice(boundedPrice);
                                setBtcPriceChange(prev =>
                                    ((boundedPrice - chart.data.datasets[0].data[0]?.y || boundedPrice) /
                                        (chart.data.datasets[0].data[0]?.y || boundedPrice)) * 100
                                );
                                setBtc24hHigh(prev => Math.max(prev, boundedPrice));
                                setBtc24hLow(prev => Math.min(prev, boundedPrice));
                                setBtcVolume(prev => 3.2 + (Math.random() * 0.1 - 0.05));

                                chart.data.datasets[0].data.push({
                                    x: Date.now(),
                                    y: boundedPrice
                                });
                            }
                        },
                        ticks: { color: '#94a3b8' },
                        grid: { color: '#334155' }
                    },
                    y: {
                        ticks: {
                            callback: value => `$${value.toLocaleString()}`,
                            color: '#94a3b8'
                        },
                        grid: { color: '#334155' }
                    }
                }
            }
        });

        return () => {
            if (btcChartInstance.current) {
                btcChartInstance.current.destroy();
            }
        };
    }, [currentTimeRange]);

    return (
        <div className="bg-slate-800 rounded-lg shadow p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-white">Market Currency 💲</h3>
                <div className="flex gap-2">
                    {['1h', '1d', '1w', '1m', '1y'].map((range) => (
                        <button
                            key={range}
                            onClick={() => setCurrentTimeRange(range)}
                            className={`text-xs px-2 py-1 rounded ${currentTimeRange === range
                                    ? 'bg-yellow-500 text-black'
                                    : 'bg-slate-700 text-gray-300'
                                }`}
                        >
                            {range.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-64">
                <canvas ref={chartRef}></canvas>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-gray-300 text-sm">
                <div>
                    <p className="text-gray-400">Current</p>
                    <p className="font-medium text-yellow-400">${btcPrice.toFixed(2)}</p>
                </div>
                <div>
                    <p className="text-gray-400">Change</p>
                    <p className={`font-medium ${btcPriceChange >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                        {btcPriceChange.toFixed(2)}%
                    </p>
                </div>
                <div>
                    <p className="text-gray-400">Volume</p>
                    <p className="font-medium">${btcVolume.toFixed(1)}B</p>
                </div>
                <div>
                    <p className="text-gray-400">24h High</p>
                    <p className="font-medium text-green-400">${btc24hHigh.toFixed(2)}</p>
                </div>
                <div>
                    <p className="text-gray-400">24h Low</p>
                    <p className="font-medium text-red-400">${btc24hLow.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default BitcoinChartCard;
