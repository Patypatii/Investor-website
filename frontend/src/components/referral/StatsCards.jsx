export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="stat-card p-6">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-500/20">
                        <i className="fas fa-users text-blue-500 text-xl"></i>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-sm text-slate-400">Referrals</div>
                    </div>
                </div>
            </div>
            <div className="stat-card p-6">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-yellow-500/20">
                        <i className="fas fa-coins text-yellow-500 text-xl"></i>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">KES 0.00</div>
                        <div className="text-sm text-slate-400">Total Earnings</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
