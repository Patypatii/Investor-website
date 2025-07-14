import { useState } from "react";
import { FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MiningTabs() {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden card-hover">
            <div className="flex">
                <button
                    onClick={() => setActiveTab("active")}
                    className={`flex-1 py-4 px-6 font-medium transition-colors relative ${activeTab === "active"
                            ? "text-yellow-500 bg-slate-700"
                            : "text-slate-400 hover:text-white"
                        }`}
                >
                    Active Mining
                    {activeTab === "active" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("completed")}
                    className={`flex-1 py-4 px-6 font-medium transition-colors relative ${activeTab === "completed"
                            ? "text-yellow-500 bg-slate-700"
                            : "text-slate-400 hover:text-white"
                        }`}
                >
                    Completed
                    {activeTab === "completed" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"></div>
                    )}
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 text-center">
                <div className="p-8">
                    <div className="w-16 h-16 bg-slate-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <FaServer className="text-2xl text-slate-400" />
                    </div>
                    {activeTab === "active" ? (
                        <>
                            <p className="text-slate-400 mb-6">You have no active mining operations.</p>
                            <Link
                                to="/invest"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-xl transition-colors"
                            >
                                Start Mining Now
                            </Link>
                        </>
                    ) : (
                        <p className="text-slate-400">You have no completed mining operations.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
