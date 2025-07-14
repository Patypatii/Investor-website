import { FaDollarSign, FaCoins } from "react-icons/fa";

export default function MiningStats() {
    return (
        <div className="grid grid-cols-2 gap-4 animate-in">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 card-hover">
                <div className="flex items-center gap-3 mb-2">
                    <FaDollarSign className="text-blue-400" />
                    <span className="text-slate-400 text-sm">Total Invested</span>
                </div>
                <p className="text-lg font-semibold">Ksh 0.00</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 card-hover">
                <div className="flex items-center gap-3 mb-2">
                    <FaCoins className="text-yellow-500" />
                    <span className="text-slate-400 text-sm">Active Mining</span>
                </div>
                <p className="text-lg font-semibold">0 miners</p>
            </div>
        </div>
    );
}
