import { FaCoins, FaSyncAlt } from "react-icons/fa";

export default function Header() {
    return (
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <FaCoins className="text-slate-900" />
                </div>
                <h1 className="text-xl font-semibold">Mining Operations</h1>
            </div>
            <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                <FaSyncAlt />
            </button>
        </div>
    );
}
