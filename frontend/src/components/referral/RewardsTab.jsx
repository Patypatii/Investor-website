export default function RewardsTab() {
    return (
        <div className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Rewards Breakdown</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>Referral</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-slate-300">user123</td>
                            <td className="text-slate-400">2025-07-01</td>
                            <td className="text-green-400">KES 0.00</td>
                            <td>
                                <span className="status-badge status-pending">Pending</span>
                            </td>
                        </tr>
                        {/* You can map through actual reward data here */}
                        <tr>
                            <td colSpan="4" className="text-center text-slate-500 py-8">
                                No rewards earned yet.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
