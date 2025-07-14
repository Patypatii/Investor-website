export default function EarningsStats() {
    return (
        <div className="px-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { icon: 'fa-wallet', label: 'Total Earnings', value: 'KSh 0.00', color: 'green' },
                { icon: 'fa-calendar-alt', label: 'This Month', value: 'KSh 0.00', color: 'blue' },
                { icon: 'fa-trophy', label: 'Success Rate', value: '100%', color: 'yellow' }
            ].map(({ icon, label, value, color }, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 p-6 rounded-xl border border-slate-600/50">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-${color}-500/20 rounded-xl flex items-center justify-center`}>
                            <i className={`fas ${icon} text-xl text-${color}-400`}></i>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">{label}</p>
                            <p className="text-lg md:text-2xl font-bold">{value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
