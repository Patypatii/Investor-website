export default function RecentActivityCard() {
    return (
        <div className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-4">
                    <i className="fas fa-user-plus text-slate-400 text-2xl"></i>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">No referrals yet</h4>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Start sharing your link to invite friends and earn rewards
                </p>
            </div>
        </div>
    );
}
