export default function InviteTab() {
    return (
        <div className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Invite Your Friends</h3>
            <p className="text-slate-300 mb-6">You can invite friends by sharing your referral link or sending an invite directly via email.</p>

            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-4 py-2 rounded-lg w-full"
                >
                    Send Invite
                </button>
            </form>
        </div>
    );
}
