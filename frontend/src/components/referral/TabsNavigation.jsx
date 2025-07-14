export default function TabsNavigation({ activeTab, setActiveTab }) {
    const tabs = ['overview', 'invite', 'rewards'];
    return (
        <div className="flex justify-center mb-8">
            <div className="bg-slate-800/30 p-1 rounded-lg backdrop-blur-sm border border-slate-700">
                <div className="flex space-x-1">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === tab
                                    ? 'bg-yellow-500 text-slate-900'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
