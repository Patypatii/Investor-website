export default function ReferralLinkCard() {
    const referral = "https://swiftxchange.pro/auth.php?action=register&ref=patypa";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referral);
        alert("Referral link copied!");
    };

    return (
        <div className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Your Unique Referral Link</h3>
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                        <code className="text-sm text-slate-200 break-all">{referral}</code>
                    </div>
                    <button onClick={copyToClipboard} className="copy-btn px-4 py-2 rounded-lg font-medium flex items-center">
                        <i className="fas fa-copy mr-2"></i> Copy
                    </button>
                </div>
                <button className="outline-btn w-full border px-4 py-2 rounded-lg flex items-center justify-center">
                    <i className="fas fa-share-alt mr-2"></i> Share Link
                </button>
            </div>
        </div>
    );
}
