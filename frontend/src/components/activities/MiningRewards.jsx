import { FaCoins } from "react-icons/fa";

export default function MiningRewards() {
    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 card-hover">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <FaCoins className="text-xl text-slate-900" />
                </div>
                <div>
                    <p className="text-slate-400 text-sm">Available Mining Rewards</p>
                    <p className="text-2xl font-bold text-green-400">Ksh 0.00</p>
                </div>
            </div>
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-medium transition-colors">
                <FaCoins className="mr-2 inline" />
                Collect All Rewards
            </button>
        </div>
    );
}
