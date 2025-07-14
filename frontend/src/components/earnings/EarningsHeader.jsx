export default function EarningsHeader() {
    return (
        <div className="px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-yellow-400">Your Success Portfolio</h1>
                    <p className="text-sm md:text-base text-slate-300">Track your investment growth</p>
                </div>
                <div className="flex justify-start md:justify-end">
                    <div className="bg-blue-900/50 text-blue-100 px-4 py-2 rounded-lg border border-blue-700/50 text-sm md:text-base">
                        <span className="font-medium">Active:</span> 0 Investments
                    </div>
                </div>
            </div>
        </div>
    );
}
