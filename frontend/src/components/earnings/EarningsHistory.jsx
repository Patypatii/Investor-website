import { Link } from 'react-router-dom';

export default function EarningsHistory() {
    return (
        <div className="px-4 mb-20">
            <div className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 p-6 rounded-xl border border-slate-600/50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-yellow-400">Your Earnings History</h2>
                    <span className="text-sm text-slate-300">Sorted by Recent</span>
                </div>
                <div className="text-center py-8">
                    <i className="fas fa-coins text-4xl text-slate-600 mb-3"></i>
                    <p className="text-slate-400">You don't have any completed investments yet</p>
                    <p className="text-sm text-slate-500 mt-1">Your earnings will appear here once investments complete</p>
                    <Link to="/invest" className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors">
                        Start mining now
                    </Link>
                </div>
            </div>
        </div>
    );
}
