import React from 'react';

export default function CTASection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Grow Your Wealth?</h2>
                <p className="text-slate-900 mb-8 text-lg">Join thousands of miners earning passive income with our platform</p>
                <a href="auth.php?action=register" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-12 rounded-lg inline-block">
                    Start Mining Now
                </a>
            </div>
        </section>
    );
}
