export default function SuccessStories() {
    const stories = [
        {
            name: 'James K.',
            time: '2 days ago',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
            story: 'Started with KSh 5,000 and now earning KSh 25,000 monthly.',
            total: 'KSh 120,450'
        },
        {
            name: 'Sarah M.',
            time: '1 week ago',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
            story: "In just 3 months I've doubled my initial investment.",
            total: 'KSh 78,200'
        }
    ];

    return (
        <div className="px-4 mb-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 p-6 rounded-xl border border-slate-600/50">
                <h2 className="text-xl font-semibold text-yellow-400 mb-4"><i className="fas fa-medal mr-2"></i> Success Stories</h2>
                <div className="space-y-4">
                    {stories.map((user, idx) => (
                        <div key={idx} className="bg-green-900/10 border-l-4 border-green-500 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <img src={user.img} className="w-8 h-8 rounded-full border-2 border-yellow-400" />
                                    <span className="font-medium">{user.name}</span>
                                </div>
                                <span className="text-sm text-slate-400">{user.time}</span>
                            </div>
                            <p className="text-slate-300 mb-2">"{user.story}"</p>
                            <div className="flex justify-between text-xs">
                                <span className="text-green-400"><i className="fas fa-check-circle mr-1"></i> Verified Story</span>
                                <span className="text-yellow-400"><i className="fas fa-coins mr-1"></i> +{user.total} total</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
