import React from 'react';

const LiveActivityCard = ({ activityItem, liveVolume, coinIcons }) => {
    if (!activityItem) return null; // Don't render if no activity yet

    return (
        <div className="card mb-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <h2 className="text-sm font-medium">Live Activity</h2>
                    <span className="live-indicator"></span>
                </div>
                <div className="text-xs text-gray-400">
                    Volume: <span className="text-yellow-400">KES {liveVolume.toFixed(2)}M</span>
                </div>
            </div>

            <div className="activity-container" id="activityContainer">
                <div className="activity-item">
                    <div className="flex items-center">
                        <div className="coin-icon" style={{ backgroundImage: `url('${coinIcons[activityItem.coin]}')` }}></div>
                        <div>
                            <div className="text-xs">{activityItem.userName}</div>
                            <div className="text-xs text-gray-400">{activityItem.package} {activityItem.type}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-xs ${activityItem.type === 'Deposited' ? 'text-green-400' : 'text-red-400'}`}>
                            {activityItem.type === 'Deposited' ? '+' : '-'}KES {activityItem.amount}
                        </div>
                        <div className="text-xs text-gray-400">{activityItem.time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveActivityCard;