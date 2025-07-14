import React from 'react';

const plans = [
    {
        title: '1. Quick Mine',
        roi: '7.00%',
        min: 'KSh 150,000.00',
        term: '12 Hours term',
    },
    {
        title: '2. Daily Mine Pro',
        roi: '10.00%',
        min: 'KSh 300.00',
        term: '1 Day term',
    },
    {
        title: '3. Crypto Blast',
        roi: '15.00%',
        min: 'KSh 50,000.00',
        term: '1 Day term',
    },
    {
        title: '4. Triple Mine',
        roi: '35.00%',
        min: 'KSh 80,000.00',
        term: '3 Days term',
    },
    {
        title: '5. Five Days Vault',
        roi: '56.00%',
        min: 'KSh 100,000.00',
        term: '5 Days term',
    },
    {
        title: '6. Weekly Grow',
        roi: '78.00%',
        min: 'KSh 200,000.00',
        term: '7 Days term',
    },
];

export default function PlansSection() {
    return (
        <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Investment Plans</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Choose the perfect plan for your financial goals</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div key={idx} className="card-gradient p-8 rounded-xl border border-slate-700 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                            <div className="text-yellow-400 text-4xl font-bold mb-6">
                                {plan.roi} <span className="text-lg">ROI</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-slate-300">
                                    <i className="fas fa-check-circle text-yellow-400 mr-2"></i>
                                    Min. {plan.min}
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <i className="fas fa-check-circle text-yellow-400 mr-2"></i>
                                    {plan.term}
                                </li>
                            </ul>
                            <a href="auth.php?action=register" className="btn-primary text-black font-bold py-3 px-6 rounded-lg text-center block">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
