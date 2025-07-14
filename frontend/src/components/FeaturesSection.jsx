import React from 'react';

const features = [
    {
        icon: 'fa-chart-line',
        title: 'Automated Trading',
        desc: 'Our AI-powered algorithms trade 24/7 to maximize your profits while minimizing risks.'
    },
    {
        icon: 'fa-shield-alt',
        title: 'Secure Platform',
        desc: 'Military-grade encryption and cold storage for all digital assets.'
    },
    {
        icon: 'fa-coins',
        title: 'Multiple Cryptos',
        desc: 'Invest in Bitcoin, Ethereum, Litecoin and other major cryptocurrencies.'
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Swift Exchange</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Our platform offers the most reliable and profitable crypto investment solutions</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card-gradient p-8 rounded-xl border border-slate-700">
                            <div className="feature-icon rounded-full flex items-center justify-center mb-6">
                                <i className={`fas ${feature.icon} text-yellow-400 text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-300">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
